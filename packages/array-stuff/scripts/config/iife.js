'use strict';

const { resolve } = require('../util');

function configure(input, output) {
  return {
    isProd: true,
    inputOptions: {
      input
    },
    outputOptions: {
      name: 'celiaArray',
      file: output,
      format: 'iife',
      legacy: false,
      esModule: false
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), resolve(`npm/iife.js`))
];
