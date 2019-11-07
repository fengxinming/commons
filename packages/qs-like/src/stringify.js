import isObject from 'celia/isObject';
import forOwn from 'celia/_forOwn';
import append from 'celia/_append';
import escape from './escape';

const { stringify } = JSON;

function convert(value, encode) {
  switch (typeof value) {
    case 'string':
      return encode(value);
    case 'number':
      if (isNaN(value)) {
        return '';
      }
    case 'boolean':
      return value.toString();
    case 'object':
      return value === null ? '' : encode(stringify(value));
    case 'undefined':
      return '';
    // case 'function':
    //   return encode(value.toString());
    default:
      return encode(value.toString());
  }
}

const { isArray } = Array;
export default function (obj, sep, eq, options) {
  if (isObject(obj)) {
    sep = sep || '&';
    eq = eq || '=';
    options = options || {};

    const encode = options.encodeURIComponent || escape;
    const arr = [];

    forOwn(obj, (value, key) => {
      if (key) {
        if (isArray(value)) {
          value.forEach((val) => {
            append(arr, key + eq + convert(val, encode));
          });
        } else {
          append(arr, key + eq + convert(value, encode));
        }
      }
    });

    return arr.join(sep);
  }
  return '';
}
