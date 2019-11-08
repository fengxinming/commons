'use strict';

const { get, set } = require('lodash');
const relative = require('./relative');

/**
 * 给对象的某些属性设置绝对路径
 * @param {Object} options
 * @param {String|Array} src
 */
function relativeWith(options, src) {
  if (Array.isArray(src)) {
    src.forEach(dir => relativeWith(options, dir));
  } else {
    const relativePath = get(options, src);
    if (Array.isArray(relativePath)) {
      set(options, src, relativePath.map(n => relative(n)));
    } else {
      const _absPath = relative(relativePath);
      relativePath !== _absPath && set(options, src, _absPath);
    }
  }
}

module.exports = relativeWith;
