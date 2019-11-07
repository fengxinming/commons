'use strict';

const assert = require('assert');
const { isNil, isFunction, isObject } = require('celia');
const { inspect } = require('util');
const formatDate = require('date-manip/format');

/**
 * 转换成文本日志格式
 * @param {Object} options 配置参数
 */
function basicLayout(options) {
  const {
    datePattern = 'YYYY-MM-DD HH:mm:ss.SSS Z',
    depth = Infinity
  } = options;

  return function (args, {
    logger,
    level,
    timestamp
  }) {
    timestamp = timestamp && datePattern ? `[${formatDate(new Date(timestamp), datePattern)}] ` : '';
    args = args.map(arg => isObject(arg) ? inspect(arg, { depth }) : arg).join(' ');
    return `${timestamp}[${level}] ${logger} - ${args}`;
  };
}

const layoutMap = new Map();
layoutMap.set('basic', basicLayout);

function addLayout(name, layout) {
  assert(!isNil(name), `Invalid layout name ${name}`);
  assert(isFunction(layout), `Layout must be a function, but got ${typeof layout}`);
  layoutMap.set(name, layout);
}

function getLayout(name) {
  return layoutMap.get(name);
}

module.exports = { addLayout, getLayout };
