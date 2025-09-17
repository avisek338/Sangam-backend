
export interface IAppError {
    statusCode: number;
    message: string;
    errorCode?: string;
    isOperational?: boolean;
    details?: Record<string, unknown>;
}


export class AppError extends Error implements IAppError {
    public readonly statusCode: number;
    public readonly errorCode?: string;
    public readonly details?: Record<string, unknown>;
    public readonly isOperational?: boolean;
    public readonly message: string;

    constructor({ statusCode, message, errorCode, isOperational, details }: IAppError) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.details = details;
        this.isOperational = isOperational;
        this.message = message;

        Error.captureStackTrace(this, this.constructor);
        Object.setPrototypeOf(this, AppError.prototype);
    }

};