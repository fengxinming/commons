'use strict';

const assert = require('assert');
const { isNil, isFunction, isString } = require('celia');
const chalk = require('chalk');
const { level2Color } = require('./util');
const layout = require('./layout');

class ConsoleAppender {

  /**
   * 构造函数
   * @param {Object} options appender对应的配置
   */
  constructor(options) {
    let layoutOptions = options.layout || {};
    if (isString(layoutOptions)) {
      layoutOptions = { type: layoutOptions };
    }
    this.layout = layout.getLayout(layoutOptions.type || 'basic')(layoutOptions);
    this.isPM2Worked = !!process.env.PM2_HOME;
  }

  /**
   * 追加日志
   * @param {Array<any>} infos
   * @param {Object} options
   */
  append(infos, options) {
    // pm2 已经记录了时间
    if (this.isPM2Worked) {
      options.timestamp = null;
    }
    console.log(chalk[level2Color(options.level)](this.layout(infos, options)));
  }

  async destroy() {
    Object.keys(this).forEach((key) => {
      delete this[key];
    });
  }

}

const appenderMap = new Map();
appenderMap.set('console', ConsoleAppender);

function addAppender(name, appender) {
  assert(!isNil(name), `Invalid appender name ${name}`);
  assert(isFunction(appender), `Appender must be a Class or function, but got ${typeof layout}`);
  appenderMap.set(name, appender);
}

function getAppender(name) {
  return appenderMap.get(name);
}

module.exports = { addAppender, getAppender };
