import { env } from '../config/env';
import { HttpStatus } from './HttpStatus';

export enum ErrorCategory {
  CLIENT_ERROR = 'ClientError',
  SERVER_ERROR = 'ServerError',
}

export abstract class BaseError extends Error {
  statusCode: number;
  logging: boolean;
  category: ErrorCategory;

  constructor(
    statusCode: number,
    message: string,
    category: ErrorCategory,
    logging = true,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.logging = logging;
    this.category = category;
    if(logging) this.logError();
  }

  private async logError() {
    const timestamp = new Date().toISOString();
    const environment = env.NODE_ENV;
    const logMessage = `
    [${timestamp}] [${environment.toUpperCase()}]
    [${this.category}] [Status: ${this.statusCode}] - ${this.message}
  `.trim();

    console.error(logMessage);
    if (this.stack && process.env.NODE_ENV === 'dev') {
      console.error(this.stack);
    }
  }

  // Converte o erro em um objeto JSON, para ser enviado como resposta na API
  toJSON() {
    return {
      status: this.statusCode,
      message: this.message,
    };
  }
}

export class BadRequest extends BaseError {
  constructor(message: string) {
    super(HttpStatus.BAD_REQUEST, message, ErrorCategory.CLIENT_ERROR);
  }
}

export class NoContent extends BaseError {
  constructor(message: string) {
    super(HttpStatus.NO_CONTENT, message, ErrorCategory.CLIENT_ERROR, false);
  }
}

export class Unauthorized extends BaseError {
  constructor(message: string) {
    super(HttpStatus.UNAUTHORIZED, message, ErrorCategory.CLIENT_ERROR);
  }
}

export class Forbidden extends BaseError {
  constructor(message: string) {
    super(HttpStatus.FORBIDDEN, message, ErrorCategory.CLIENT_ERROR);
  }
}

export class NotFound extends BaseError {
  constructor(message: string) {
    super(HttpStatus.NOT_FOUND, message, ErrorCategory.CLIENT_ERROR);
  }
}

export class InternalServer extends BaseError {
  constructor(message: string) {
    super(
      HttpStatus.INTERNAL_SERVER_ERROR,
      message,
      ErrorCategory.SERVER_ERROR,
    );
  }
}
