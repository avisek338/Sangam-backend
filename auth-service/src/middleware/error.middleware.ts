import { AppError } from "@/errors/appError";
import { logger } from "@/utils/logger";
import { NextFunction, Request, Response } from "express";


export const ErrorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            sucess: false,
            message: err.message,
            errorCode: err.errorCode,
            details: err.details || null,
            stack: process.env.NODE_ENV === "development" ? err.stack : undefined
        })
    }
    logger.error("Unexpected error: ", err)
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        errorCode: "INTERNAL_ERROR",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });

}