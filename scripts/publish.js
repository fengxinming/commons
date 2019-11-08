'use strict';

const { join } = require('path');
const { exec } = require('./util');

function publish(arr, getDir) {
  arr.forEach(
    (packageName) => {
      if (name && name !== packageName) {
        return;
      }
      exec(['publish', getDir(packageName), ...args], true);
    }
  );
}

const [, , name, ...args] = process.argv;

const es6packages = [
  'js-linkedmap',
  'properties-like'
];

const es5Packages = [
  'str-formatter'
];

const nodePackages = [
];

publish(es6packages, packageName => join(__dirname, '..', 'packages', packageName, 'npm'));
publish(es5Packages, packageName => join(__dirname, '..', 'packages', packageName));
publish(nodePackages, packageName => join(__dirname, '..', 'node-packages', packageName));
