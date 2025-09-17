import { StatusCodes } from "http-status-codes";
import { AppError } from "./appError";



export class TokenInvalidError extends AppError {
  constructor(message = "Invalid token", details?: Record<string, unknown>) {
    super({
      statusCode: StatusCodes.UNAUTHORIZED, // 401
      message,
      errorCode: "TOKEN_INVALID",
      isOperational: true,
      details,
    });
  }
}
