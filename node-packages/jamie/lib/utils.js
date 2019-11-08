'use strict';

const createHttpError = require('http-errors');
const { isString } = require('celia');

exports.createError = function (statusCode, option) {
  if (isString(option)) {
    try {
      option = JSON.parse(option);
    } catch (e) {
      option = { message: option };
    }
  }
  return createHttpError(statusCode, option);
};

exports.createResponse = function (error, response, body) {
  return {
    error, response, body
  };
};
