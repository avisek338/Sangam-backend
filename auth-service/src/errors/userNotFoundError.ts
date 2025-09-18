
import { StatusCodes } from "http-status-codes";
import {AppError} from "../errors/appError";

const UserNotFoundError = class extends AppError {
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

module.exports = { UserNotFoundError };
