'use strict';

const { resolve } = require('../util');

function configure(input, output) {
  const isDIR = Array.isArray(input);
  return {
    inputOptions: {
      input,
      external: (id) => {
        return /^(celia)|(fs)/.test(id);
      }
    },
    outputOptions: {
      dir: isDIR ? output : undefined,
      file: isDIR ? undefined : output,
      format: 'cjs',
      legacy: false,
      esModule: false,
      interop: false
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), resolve(`npm/index.js`)),
  configure(resolve('src/parse.js'), resolve(`npm/parse.js`)),
  configure(resolve('src/webpack-loader.js'), resolve(`npm/webpack-loader.js`))
];
