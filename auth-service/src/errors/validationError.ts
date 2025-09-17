import { AppError } from "./appError.js";
import { StatusCodes } from "http-status-codes";

export class ValidationError extends AppError {
    constructor(message: string = "Validation error", details?: Record<string, unknown>) {
        super({
            statusCode: StatusCodes.BAD_REQUEST,
            message,
            errorCode: "VALIDATION_ERROR",
            isOperational: true,
            details,
        });
    }
}