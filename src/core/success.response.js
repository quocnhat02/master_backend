'use strict';

const { ReasonPhrases, StatusCodes } = require('./httpStatusCode');

class SuccessResponse extends Error {
  constructor(
    message,
    statusCode = StatusCodes.OK,
    reasonPhrases = ReasonPhrases.OK,
    metadata = {}
  ) {
    this.message = !message ? reasonPhrases : message;
    this.status = statusCode;
    this.metadata = metadata;
  }

  send(res, headers = {}) {
    return res.status(this.status).json(this);
  }
}

class OK extends SuccessResponse {
  constructor(message, metadata = {}) {
    super({ message, metadata });
  }
}

class CREATED extends SuccessResponse {
  constructor(
    message,
    statusCode = StatusCodes.CREATED,
    reasonPhrases = ReasonPhrases.CREATED,
    metadata = {}
  ) {
    super({ message, statusCode, reasonPhrases, metadata });
  }
}

module.exports = {
  OK,
  CREATED,
};
