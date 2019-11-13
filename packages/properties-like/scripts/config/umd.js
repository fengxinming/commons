'use strict';

const { join } = require('path');
const { resolve } = require('../util');

function configure(input, output, name) {
  return {
    isProd: true,
    inputOptions: {
      input
    },
    outputOptions: {
      name: name || 'Properties',
      file: output,
      format: 'umd',
      legacy: false,
      esModule: false
    },
    replacements: {
      'process.env.NODE_ENV': "'production'"
    },
    aliases: {
      'js-linkedmap': join(__dirname, '../../../js-linkedmap/src/index.js')
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), resolve('npm/umd.js')),
  configure(resolve('src/parse.js'), resolve('npm/parse.umd.js'), 'parseProperties')
];
