# kick-conf

[![npm package](https://nodei.co/npm/kick-conf.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/kick-conf)

[![NPM version](https://img.shields.io/npm/v/kick-conf.svg?style=flat)](https://npmjs.org/package/kick-conf) [![NPM Downloads](https://img.shields.io/npm/dm/kick-conf.svg?style=flat)](https://npmjs.org/package/kick-conf)

---

## Installation

### Node >= 7.6

```bash
npm install --save kick-conf
```

---

## Usage

```javascript
const Configuration = require('kick-conf');
const config = new Configuration({
  dir: './conf',
  env: 'production'
});

console.log(config.get('module1'));
console.log(config.get('module2'));
console.log(config.get('module3'));
```

### Configuration

```
|--conf
  |--module1
    |--development.config.js
    |--test.config.js
    |--production.config.js
  |--module2
    |--development.json
    |--test.json
    |--production.json
  |--module3
    |--development.properties
    |--test.properties
    |--production.properties
```
