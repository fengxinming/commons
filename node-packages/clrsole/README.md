# clrsole

[![npm package](https://nodei.co/npm/clrsole.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/clrsole)

## Usage

```javascript

const { clrsole, getLogger } = require('clrsole');

const appLogger = getLogger('app');

// logging like log4j
appLogger.trace('message', 'message2', ...);
appLogger.debug('message', 'message2', ...);
appLogger.info('message', 'message2', ...);
appLogger.warn('message', 'message2', ...);
appLogger.error('message', 'message2', ...);
appLogger.fatal('message', 'message2', ...);

// changed syslog levels
// appLogger.levels = require('graylog-sender/lib/syslog-levels');
appLogger.setLevels([
  { level: 'EMERGENCY', value: 0, color: 'magentaBright' },
  { level: 'ALERT', value: 1, color: 'magenta' },
  { level: 'CRITICAL', value: 2, color: 'redBright' },
  { level: 'ERROR', value: 3, color: 'red' },
  { level: 'WARN', value: 4, color: 'yellowBright' },
  { level: 'NOTICE', value: 5, color: 'yellow' },
  { level: 'INFO', value: 6, color: 'green' },
  { level: 'DEBUG', value: 7, color: 'cyan' }
], 'INFO');

// logging like syslog
appLogger.debug('message', 'message2');
appLogger.info('message', 'message2');
appLogger.notice('message', 'message2');
appLogger.warn('message', 'message2');
appLogger.error('message', 'message2');
appLogger.critical('message', 'message2');
appLogger.alert('message', 'message2');
appLogger.emergency('message', 'message2');

// The first param is level
appLogger.log('INFO', 'message', 'message2', ...);
appLogger.log('error', 'message', 'message2', ...);
appLogger.log('message', 'message2', ...);

clrsole.green('green message', ...);
clrsole.red('red message', ...);

```
