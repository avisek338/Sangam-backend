import { StatusCodes } from "http-status-codes";
import {AppError} from "../errors/appError";

export class UserAlreadyExistsError  extends AppError {
  constructor(message = "User already exists", details?: Record<string, unknown>) {
    super({
      statusCode: StatusCodes.CONFLICT, // 409
      message,
      errorCode: "USER_ALREADY_EXISTS",
      isOperational: true,
      details,
    });
  }
}

module.exports = { UserAlreadyExistsError };
