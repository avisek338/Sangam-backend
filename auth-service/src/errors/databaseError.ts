import { AppError } from "./appError.js";
import { StatusCodes } from "http-status-codes";


export class DatabaseError extends AppError {

    constructor(message: string = "Database error", details?: Record<string, unknown>) {
        super({
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            message,
            errorCode: "DATABASE_ERROR",
            details,
            isOperational: true
        })
    }
}