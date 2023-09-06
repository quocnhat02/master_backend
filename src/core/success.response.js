'use strict';

class SuccessResponse extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
