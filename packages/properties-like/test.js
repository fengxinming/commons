'use strict';

const fs = require('fs');
const path = require('path');
const parse = require('./npm/parse');
const Properties = require('./npm/index');
const filePath = path.join(__dirname, 'tests', 'test.properties');

parse(fs.readFileSync(filePath, 'utf8'), (key, value) => {
  console.log(`========== ${key} = ${value} ==========`);
});

console.log(`---------------------`);

const str = 'key=value\nkey2=value2';
parse(str, (key, value) => {
  console.log(`==========${key}=${value}==========`);
});

console.log(`---------------------`);

const prop = new Properties();
prop.loadFrom(filePath);
for (let [key, value, index] of prop) {
  console.log(key, value, index);
}
