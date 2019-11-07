'use strict';

const { join } = require('path');
const { exec } = require('./util');

const cwd = process.cwd();
const [, , name, ...args] = process.argv;
const packages = [
  'js-linkedmap',
  'properties-like',
  'qs-like',
  'str-formatter'
];

packages.forEach(
  (packageName) => {
    if (name && name !== packageName) {
      return;
    }
    process.chdir(join(__dirname, '..', 'packages', packageName));
    exec(['run', 'test', ...args], true);
  }
);

process.chdir(cwd);
