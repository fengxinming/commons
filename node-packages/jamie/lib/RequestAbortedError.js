'use strict';

class RequestAbortedError extends Error {

  constructor(message, options) {
    super(message);
    this.name = 'RequestAbortedError';
    this.code = 'ERR_REQUEST_ABORTED';
    Object.assign(this, options);
  }

}

module.exports = RequestAbortedError;
