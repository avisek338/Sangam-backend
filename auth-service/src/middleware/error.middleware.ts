import type { Request, Response, NextFunction } from "express";
import type { AppErrorType } from "@/errors/appError";
const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../errors/appError");
const { logger } = require("../utils/logger");


interface ErrorResponse {
    success: boolean;
    message: string;
    errorCode?: string;
    details?: Record<string, unknown> | null;
    stack?: string;
}

export const ErrorMiddleware = (
    err: AppErrorType,
    req: Request,
    res: Response,
    next: NextFunction
): Response<ErrorResponse> => {
    if (err instanceof AppError) {
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message,
            errorCode: err.errorCode || 'APP_ERROR',
            details: err.details || null,
            stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
        });
    }

    logger.error("Unexpected error:", {
        error: err.message,
        code: err.errorCode || 'INTERNAL_ERROR',
        stack: err.stack,
        url: req.originalUrl,
        method: req.method,
        headers: req.headers,
        query: req.query,
        body: req.body
    });

    return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.message || "Internal Server Error",
        errorCode: err.errorCode || "INTERNAL_ERROR",
        details: err.details || null,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
};

