'use strict';

const Path = require('path');
const { isString } = require('celia');
const cwd = require('./cwd')();

/**
 * 根据相对地址获取绝对路径
 * @param {String} p
 * @param {String} relativePath
 */
function relative(p, relativePath = cwd) {
  if (!isString(p) || p.startsWith('~')) {
    return p;
  }
  const file = Path.relative(relativePath, p);
  return Path.join(relativePath, file);
}

module.exports = relative;
