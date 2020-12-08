

import {CustomError} from './custom-error'

export class NotAuthorisedError extends CustomError {
  statusCode = 500;
  reason = "Not Authorised";
  constructor() {
    super('Not Authorised');
    Object.setPrototypeOf(this, NotAuthorisedError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
