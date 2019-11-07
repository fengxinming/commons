import isString from 'celia/isString';
import isFalsy from 'celia/isFalsy';
import LinkedMap from 'js-linkedmap';
import alias from 'celia/alias';
import parse from './parse';

let readFileSync;

try {
  readFileSync = require('fs').readFileSync;
} catch (e) { }

function defaultTransform(value) {
  return value;
}

class Properties extends LinkedMap {

  static getProperties(iterator) {
    return new Properties(iterator);
  }

  clone() {
    return this._clone(new Properties());
  }

  getNumber(key, defaultValue) {
    key = parseFloat(this._map[String(key)]);
    return isNaN(key)
      ? defaultValue === undefined
        ? NaN
        : defaultValue
      : key;
  }

  getBoolean(key, defaultValue) {
    key = this._map[String(key)];
    return key === undefined
      ? defaultValue
      : !isFalsy(key);
  }

  load(str, transform) {
    transform = transform || defaultTransform;
    isString(str) && parse(String(str), (key, value) => {
      this.put(key, transform(value));
    });
    return this;
  }

  loadFrom(path, transform) {
    return this.load(readFileSync(path, 'utf8'), transform);
  }

  toString() {
    return '[object Properties]';
  }

}

const proto = Properties.prototype;
alias(proto, {
  get: 'getProperty',
  keys: 'propertyNames',
  put: 'setProperty',
  putAll: 'setProperties'
});

Properties.parse = parse;

export default Properties;
