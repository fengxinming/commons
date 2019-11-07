'use strict';

const chalk = require('chalk');
const { inspect } = require('util');
const { isObject, each } = require('celia');
const { colors } = require('./lib/util');

colors.forEach((color) => {
  exports[color] = function () {
    const args = [];
    each(arguments, (arg, i) => {
      args[i] = isObject(arg) ? inspect(arg, { depth: Infinity }) : arg;
    });
    console.log(chalk[color](args.join(' ')));
  };
});
