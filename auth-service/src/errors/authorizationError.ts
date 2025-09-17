import { AppError } from "./appError";
import { StatusCodes } from "http-status-codes";

export class AuthorizationError extends AppError {
  constructor(message = "Not authorized", details?: Record<string, unknown>) {
    super({
      statusCode: StatusCodes.FORBIDDEN, // 403
      message,
      errorCode: "AUTHORIZATION_ERROR",
      isOperational: true,
      details,
    });
  }
}
