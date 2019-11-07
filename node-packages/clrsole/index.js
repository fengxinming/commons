'use strict';

const assert = require('assert');
const { isNil, isObject, isString } = require('celia');
const { addAppender, getAppender } = require('./lib/appender');
const { addLayout, getLayout } = require('./lib/layout');
const { normalizeLevel, isLevelEnabled, setLevels } = require('./lib/util');
const defaultLevels = require('./lib/levels');

const { isArray } = Array;
const { stringify } = JSON;

class Logger {

  /**
   * 创建logger实例
   * @param {String} loggerName
   * @param {Object} options
   */
  static getLogger(loggerName, options) {
    return new Logger(loggerName, options);
  }

  /**
   * 日志操作类
   * @param {String} loggerName 日志分类
   * @param {Object} options
   */
  constructor(loggerName, options) {
    assert(!isNil(loggerName), `Invalid log name ${loggerName}`);
    this.name = loggerName;
    options = options || {};
    this.setLevels(defaultLevels, options.level || 'INFO');
    this.appenders = [options.defaultAppender || { type: 'console' }];
  }

  set level(level) {
    const nlevel = normalizeLevel(level);
    assert(nlevel !== null, `Invalid log level ${level}`);
    this._level = nlevel;
  }

  get level() {
    return this._level;
  }

  set appenders(appenders) {
    assert(isArray(appenders), `Invalid appenders config ${stringify(appenders)}`);

    this._appenders = appenders.map((appenderConfig) => {
      if (isString(appenderConfig)) {
        appenderConfig = { type: appenderConfig };
      }
      const Appender = getAppender(appenderConfig.type);
      return new Appender(appenderConfig);
    });
  }

  /**
   * 设置新的日志级别
   * @param {Array<object>} levels
   * @param {String} defaultLevel
   */
  setLevels(levels, defaultLevel) {
    const lastLevels = this._levels;
    if (lastLevels) {
      lastLevels.forEach(({ level }) => {
        delete this[level.toLocaleLowerCase()];
      });
    }

    setLevels(levels, ({ level }) => {
      this[level.toLocaleLowerCase()] = function (...args) {
        return this._log(level, args);
      };
    });
    this._levels = levels;
    this.level = defaultLevel;
  }

  /**
   * 追加Appender对象
   * @param {Object} appenderConfig
   */
  addAppender(appenderConfig) {
    let type;
    assert(isObject(appenderConfig) && (type = appenderConfig.type), `Invalid appender ${stringify(appenderConfig)}`);
    const Appender = getAppender(type);
    this._appenders.push(new Appender(appenderConfig));
  }

  /**
   * 判断当前级别是否启用
   * @param {String} l
   */
  isLevelEnabled(l) {
    return isLevelEnabled(this.level, l);
  }

  /**
   * 记录日志
   * @param {String} level 级别
   * @param {...any} args 日志内容
   */
  log(level, ...args) {
    const nlevel = normalizeLevel(level);
    assert(nlevel !== null, `Invalid log level ${level}`);
    return this._log(nlevel, args);
  }

  /**
   * 销毁内部对象
   */
  destroy() {
    return Promise.all(
      this._appenders.map(appender => appender.destroy())
    ).then(() => {
      Object.keys(this).forEach((key) => {
        delete this[key];
      });
    });
  }

  /**
   * 记录日志
   * @param {String} level 级别
   * @param {Array} args 日志内容数组
   */
  _log(level, args) {
    if (this.isLevelEnabled(level)) {
      const opts = { level, logger: this.name, timestamp: Date.now() };
      this._appenders.forEach((appender) => {
        appender.append(args, opts);
      });
    }
    return this;
  }

}

Logger.clrsole = require('./clrsole');
Logger.addAppender = addAppender;
Logger.getAppender = getAppender;
Logger.addLayout = addLayout;
Logger.getLayout = getLayout;

module.exports = Logger;
