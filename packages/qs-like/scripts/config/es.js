'use strict';

const pkg = require('../../package.json');
const { resolve, apiNames } = require('../util');

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
  configure(resolve('src/index.js'), resolve(`npm/${pkg.name}.esm.js`)),
  configure(apiNames.map(dir => resolve(`src/${dir}.js`)), resolve(`npm/es`))
];
