# corie-request

[![npm package](https://nodei.co/npm/corie-request.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/corie-request)

> Note: A promisify [request](https://github.com/request/request)

## Configuration

  - [request options](https://github.com/request/request#requestoptions-callback)
  - extra options
    - host - Array or String. sets the host portion of the URL.
    - interval - The time interval of retrying
    - logger - default: [corie-logger](https://www.npmjs.com/package/corie-logger). logger instance
    - logLevel - default: `ERROR`. apply to `corie-logger`
    - retries - default: `3` times. times of retrying
    - balance - default: `roundrobin`. ways of balance
    - protocol - default: `http:`. network protocol
    - validateBody - function. return `true` or `new Error()`
    - abortion - `new Abortion()`
    
## Usage
```javascript

const request = require('corie-request');
const { Abortion } = request;
const abortion = new Abortion();

request({
  abortion,
  ...options
});

abortion.abort();

```

## Jest

  - [test](https://github.com/fengxinming/corie-request/tree/master/test)

## Examples

  - [examples](https://github.com/fengxinming/corie-request/tree/master/examples)
