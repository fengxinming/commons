'use strict';

const glob = require('glob');
const { difference, union } = require('lodash');
const { flat } = require('kick-array');
const { isString, isFunction } = require('celia');

/**
 * 根据表达式匹配具体的路径
 * @param {Array|String} patterns
 * @param {Object} options
 * @param {Function} readFilePaths
 */
function matches(patterns, options, readFilePaths) {
  if (!patterns || !patterns.length) {
    return [];
  }
  if (isString(patterns)) {
    patterns = [patterns];
  }
  if (isFunction(options)) {
    readFilePaths = options;
    options = null;
  }

  patterns = flat(patterns);
  options = options || {};
  readFilePaths = readFilePaths || function (pattern) {
    return glob.sync(pattern);
  };

  let result = [];
  patterns.forEach((pattern) => {
    const exclusion = pattern.indexOf('!') === 0;
    if (exclusion) {
      pattern = pattern.slice(1);
    }
    const arr = readFilePaths(pattern);
    if (exclusion) {
      result = difference(result, arr);
    } else {
      result = union(result, arr);
    }
  });
  return result;
}

module.exports = matches;

// console.log(matches(['./**/*.js', '!./node_modules/**/*.js']));
