'use strict';

const { getLogger, clrsole } = require('..');

const appLogger = getLogger('app', {
  level: 'info'
});
// appLogger.setLevel('info');
appLogger.trace('日志信息', '日志信息2');
appLogger.debug('日志信息', '日志信息2');
appLogger.info('日志信息', '日志信息2');
appLogger.warn('日志信息', '日志信息2');
appLogger.error('日志信息', '日志信息2');
appLogger.fatal('日志信息', '日志信息2');
appLogger.info({
  key: {
    key1: {
      key2: {
        key3: {
          key4: {
            key5: {
              key6: [{
                key7: [1, 2, 3],
                key8: { a: 'a', b: 'b' }
              }]
            }
          }
        }
      }
    }
  }
});

// changed levels
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

// logging for syslog
appLogger.debug('message', 'message2');
appLogger.info('message', 'message2');
appLogger.notice('message', 'message2');
appLogger.warn('message', 'message2');
appLogger.error('message', 'message2');
appLogger.critical('message', 'message2');
appLogger.alert('message', 'message2');
appLogger.emergency('message', 'message2');

appLogger.level = 'info';
appLogger.log('info', 'info日志信息2');
appLogger.log('INFO', 'INFO日志信息2');
appLogger.log('debug', 'debug日志信息2');

clrsole.green('绿色消息');
clrsole.red('红色消息');
