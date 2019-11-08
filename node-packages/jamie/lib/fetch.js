'use strict';

const request = require('request');
const { isObject } = require('celia');
const { createError, createResponse } = require('./utils');
const RequestAbortedError = require('./RequestAbortedError');

/**
 * 请求接口
 * @param {Object} options
 */
function fetch(options) {
  return new Promise((resolve, reject) => {
    const { abortion } = options;
    let key;
    const req = request(options, (error, response, body) => {
      if (key) {
        abortion.remove(key);
        key = null;
      }
      const statusCode = (response && response.statusCode) || 500;
      if (error) {
        reject(
          createResponse(
            createError(statusCode, error),
            response,
            body
          )
        );
      } else if (statusCode !== 200) {
        reject(
          createResponse(
            createError(statusCode, body),
            response,
            body
          )
        );
      } else {
        let result = createResponse(error, response, body);
        const { validateBody } = options;
        if (validateBody) {
          const ret = validateBody(result);
          if (ret === true) {
            resolve(result);
          } else {
            if (isObject(ret)) {
              result.error = ret;
            }
            reject(result);
          }
        } else {
          resolve(result);
        }
      }
    });
    if (abortion) {
      key = Date.now() + Math.random();
      abortion.set(key, (obj) => {
        req
          .once('abort', () => {
            reject(
              createResponse(
                createError(500, new RequestAbortedError(obj.message, obj))
              )
            );
          })
          .abort();
      });
    }
  });
}

module.exports = fetch;
