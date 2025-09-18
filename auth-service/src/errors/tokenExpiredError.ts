import { StatusCodes } from "http-status-codes";
import {AppError} from "../errors/appError";

const TokenExpiredError = class extends AppError {
  constructor(message = "Token has expired", details?: Record<string, unknown>) {
    super({
      statusCode: StatusCodes.UNAUTHORIZED, // 401
      message,
      errorCode: "TOKEN_EXPIRED",
      isOperational: true,
      details,
    });
  }
}

module.exports = { TokenExpiredError };
