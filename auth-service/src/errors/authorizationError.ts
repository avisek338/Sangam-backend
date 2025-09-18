import { StatusCodes } from "http-status-codes";
import {AppError} from "../errors/appError";

export const AuthorizationError = class extends AppError {
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


