import append from 'celia/_append';
import isString from 'celia/isString';
import isUndefined from 'celia/isUndefined';
import forEach from 'celia/_forEach';
import unescape from './unescape';

function parse(str, sep, eq, cb) {
  let matchedKey = '';
  let matchedValue = '';
  let hasEq = false;
  forEach(str, (c) => {
    switch (c) {
      case '?':
        matchedKey = '';
        matchedValue = '';
        return;
      case sep:
        hasEq && matchedKey &&
          cb(matchedKey, matchedValue);
        hasEq = false;
        matchedKey = '';
        matchedValue = '';
        return;
      case eq:
        hasEq = true;
        matchedValue = '';
        return;
      case '#':
        return false;
      default:
        !hasEq
          ? (matchedKey += c)
          : (matchedValue += c);
    }
  });
  hasEq && matchedKey &&
    cb(matchedKey, matchedValue);
}

const { isArray } = Array;

export default function (str, sep, eq, options) {
  const result = {};
  if (isString(str)) {
    sep = sep || '&';
    eq = eq || '=';
    options = options || {};
    const decode = options.decodeURIComponent || unescape;

    parse(str, sep, eq, (key, value) => {
      value = decode(value);
      const last = result[key];
      // 没有相同的key值
      if (isUndefined(last)) {
        result[key] = value;
      } else if (isArray(last)) { // 继续追加
        append(last, value);
      } else { // 已存在key
        result[key] = [last, value];
      }
    });
  }
  return result;
}
