'use strict';

const compatRes = require('koay-res');

function toKoa(fn) {
  return async (ctx, next) => {
    await new Promise((resolve, reject) => {
      fn(ctx.req, compatRes(ctx), err => err ? reject(err) : resolve());
    });
    await next();
  };
};

module.exports = toKoa;
