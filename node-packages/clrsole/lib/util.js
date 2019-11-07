'use strict';

const assert = require('assert');
const { isNil, isString, isNumber } = require('celia');

const colors = [
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray',
  'redBright',
  'greenBright',
  'yellowBright',
  'blueBright',
  'magentaBright',
  'cyanBright',
  'whiteBright'
];
const ALL = { level: 'ALL', value: Number.MAX_VALUE, color: 'whiteBright' };
const OFF = { level: 'OFF', value: -Number.MAX_VALUE, color: 'gray' };

let levelValueMapping;
let levelColorMapping;

const { stringify } = JSON;

/**
 * 切换日志级别
 * @param {Array} levels 日志级别类型
 * @param {Function} callback
 */
function setLevels(levels, callback) {
  levelValueMapping = Object.create(null);
  levelColorMapping = Object.create(null);

  levels.forEach((n) => {
    let { level, value, color } = n;

    assert(isString(level), `Invalid log level ${level} in config ${stringify(n)}`);
    assert(colors.indexOf(color) > -1, `Invalid color string ${color} in config ${stringify(n)}`);
    assert(isNumber(value), `Invalid log level value ${value} in config ${stringify(n)}`);

    levelValueMapping[level] = value;
    levelColorMapping[level] = color;

    n = { level: level.toLocaleUpperCase(), value, color };
    callback(n);
  });
  [ALL, OFF].forEach(({ level, value, color }) => {
    levelValueMapping[level] = value;
    levelColorMapping[level] = color;
  });
}

/**
 * firstLevel是否能用
 * @param {String} firstLevel
 * @param {String} secondLevel
 */
function isLevelEnabled(firstLevel, secondLevel) {
  return firstLevel !== 'OFF' && levelValueMapping[firstLevel] >= levelValueMapping[secondLevel];
}

/**
 * 格式化 level
 * @param {String} level
 */
function normalizeLevel(level) {
  return level && !isNil(levelValueMapping[(level = level.toLocaleUpperCase())]) ? level : null;
}

/**
 * 根据级别获取颜色
 * @param {String} level
 */
function level2Color(level) {
  return levelColorMapping[level];
}

module.exports = {
  colors,
  level2Color,
  isLevelEnabled,
  normalizeLevel,
  setLevels
};
