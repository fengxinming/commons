'use strict';

const { join } = require('path');

module.exports = {
  roots: [
    'tests'
  ],
  verbose: false,
  testEnvironment: 'node',
  testRegex: 'tests/(.*/)*.*test.js$',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*'
  ],
  moduleNameMapper: {
    '^js-linkedmap$': join(__dirname, '..', 'js-linkedmap', 'src')
  },
  transformIgnorePatterns: []
};
