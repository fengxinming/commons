'use strict';

const { default: regexp, matchToToken } = require('js-tokens');
const isNil = require('celia/isNil');
const isObject = require('celia/isObject');

const BY_EXPRESSION = /\{([^{}]+)\}/g;
const tmplCache = Object.create(null);

function compile(str, obj) {
  let vars = Object.create(null);
  let ignore = false;

  str = str.replace(BY_EXPRESSION, function (s, exp) {
    exp
      .match(regexp)
      .forEach((value) => {
        value = regexp.exec(value);

        if (value) {
          value = matchToToken(value);
          switch (value.type) {
            case 'whitespace':
            case 'comment':
              break;
            case 'name':
              if (!ignore) {
                value = value.value;
                vars[`var ${value}=locals.${value};`] = value;
              }
              break;
            default:
              ignore = value.type === `punctuator` && value.value === `.`;
          }
        }
      });
    return `"+""+(${exp})+""+"`;
  });

  // eslint-disable-next-line no-new-func
  return new Function('locals', `${Object.keys(vars).join('')}return "${str}";`);
}

module.exports = function (val, obj) {
  if (!isNil(val) && isObject(obj)) {
    let fn = tmplCache[val];
    if (!fn) {
      fn = compile(val);
      tmplCache[val] = fn;
    }
    val = fn(obj);
  }
  return val;
}
