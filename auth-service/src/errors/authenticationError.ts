import { StatusCodes } from "http-status-codes";
import {AppError} from "../errors/appError";

const AuthError = class extends AppError {
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
