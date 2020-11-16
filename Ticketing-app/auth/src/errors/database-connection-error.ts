import {CustomError} from './custom-error'

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Database connection error";
  constructor() {
    super('Error inside database connection');
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
