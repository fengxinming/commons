'use strict';

const { join } = require('path');
const { exec } = require('./util');

const [, , name, ...args] = process.argv;
const packages = [
  'js-linkedmap'
];

packages.forEach(
  (packageName) => {
    if (name && name !== packageName) {
      return;
    }
    exec(['publish', join(__dirname, '..', 'packages', packageName, 'npm'), ...args], true);
  }
);
