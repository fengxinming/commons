'use strict';

const { resolve } = require('../util');

function configure(input, output) {
  const isDIR = Array.isArray(input);
  return {
    inputOptions: {
      input,
      external: (id) => {
        return /^celia/.test(id);
      }
    },
    outputOptions: {
      dir: isDIR ? output : undefined,
      file: isDIR ? undefined : output,
      format: 'es'
    }
  };
}

module.exports = [
  configure(resolve('src/index.js'), resolve(`npm/esm.js`)),
  configure(resolve('src/parse.js'), resolve(`npm/parse.esm.js`))
];
