'use strict';

class NotSupportedError extends Error {

  constructor(message) {
    super(message);
    this.name = 'NotSupportedError';
    this.code = 'ERR_NOT_SUPPORTED';
  }

}

module.exports = NotSupportedError;
