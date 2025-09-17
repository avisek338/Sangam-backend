import { AppError } from "./appError.js";
import { StatusCodes } from "http-status-codes";

export class AuthError extends AppError {
    constructor(
        message: string = "Authentication failed",
        details?: Record<string, unknown>
    ) {
        super({
            statusCode: StatusCodes.UNAUTHORIZED,
            message,
            errorCode: "AUTH_ERROR",
            isOperational: true,
            details,
        });
    }
}
