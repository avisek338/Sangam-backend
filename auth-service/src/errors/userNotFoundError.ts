import { StatusCodes } from "http-status-codes";
import { AppError } from "./appError";



export class UserNotFoundError extends AppError {
  constructor(message = "User not found", details?: Record<string, unknown>) {
    super({
      statusCode: StatusCodes.NOT_FOUND, // 404
      message,
      errorCode: "USER_NOT_FOUND",
      isOperational: true,
      details,
    });
  }
}
