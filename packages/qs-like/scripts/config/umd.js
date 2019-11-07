'use strict';

const pkg = require('../../package.json');
const { resolve } = require('../util');

function configure(input, output, name) {
  return {
    isProd: true,
    inputOptions: {
      input
    },
    outputOptions: {
      name: name || 'qsLike',
      file: output,
      format: 'umd',
      legacy: false,
      esModule: false
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), resolve(`npm/${pkg.name}.umd.js`))
];
