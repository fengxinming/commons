'use strict';

const { isString } = require('celia');
const Logger = require('..');
const levels = [
  { level: 'EMERGENCY', value: 0, color: 'magentaBright' },
  { level: 'ALERT', value: 1, color: 'magenta' },
  { level: 'CRITICAL', value: 2, color: 'redBright' },
  { level: 'ERROR', value: 3, color: 'red' },
  { level: 'WARN', value: 4, color: 'yellowBright' },
  { level: 'NOTICE', value: 5, color: 'yellow' },
  { level: 'INFO', value: 6, color: 'green' },
  { level: 'DEBUG', value: 7, color: 'cyan' }
];

class CustomAppender {

  constructor(options) {
    let layoutOptions = options.layout || {};
    if (isString(layoutOptions)) {
      layoutOptions = { type: layoutOptions };
    }
    this.layout = Logger.getLayout(layoutOptions.type)(layoutOptions);
  }

  append(args, opts) {
    console.log(...this.layout(args, opts));
  }

  destroy() {
    Object.keys(this).forEach((key) => {
      delete this[key];
    });
  }

}

function customLayout() {
  return args => args;
}

describe('测试 index.js', () => {
  let spy;
  beforeAll(() => {
    spy = jest.spyOn(console, 'log');

    Logger.addLayout('customLayout', customLayout);
    Logger.addAppender('customAppender', CustomAppender);
  });

  it('测试记录日志方法', () => {
    const logger = new Logger('test');
    logger.trace('日志信息', '日志信息trace');
    logger.debug('日志信息', '日志信息debug');
    logger.info('日志信息', '日志信息info');
    logger.warn('日志信息', '日志信息warn');
    logger.error('日志信息', '日志信息error');
    logger.fatal('日志信息', '日志信息fatal');

    expect(spy).toHaveBeenCalledTimes(4);
    expect(spy.mock.calls[0][0]).toMatch('日志信息 日志信息info');
    expect(spy.mock.calls[1][0]).toMatch('日志信息 日志信息warn');
    expect(spy.mock.calls[2][0]).toMatch('日志信息 日志信息error');
    expect(spy.mock.calls[3][0]).toMatch('日志信息 日志信息fatal');
    logger.destroy();
  });

  it('测试layout处理逻辑', () => {
    const logger = Logger.getLogger('layout', {
      defaultAppender: {
        type: 'console',
        layout: { type: 'basic', datePattern: 'UTC', depth: 1 }
      }
    });
    logger.log('INFO', { message: 'call log method' });

    expect(spy.mock.calls[0][0]).toMatch("{ message: 'call log method' }");
    logger.destroy();
  });

  it('测试自定义layout', () => {
    const logger = Logger.getLogger('customLayout', {
      defaultAppender: {
        type: 'console',
        layout: 'basic'
      }
    });

    expect(() => {
      Logger.addLayout();
    }).toThrow();
    expect(() => {
      Logger.addLayout('testLayout');
    }).toThrow();
    logger.destroy();
  });

  it('测试自定义appender', () => {
    process.env.PM2_HOME = process.env.NODE;
    const logger = Logger.getLogger('customAppender', {
      defaultAppender: 'console'
    });
    logger.addAppender({ type: 'customAppender', layout: 'customLayout' });
    logger.info({ message: '测试自定义' });

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[0][0]).toMatch('测试自定义');
    expect(spy.mock.calls[1][0]).toMatchObject({ message: '测试自定义' });
    delete process.env.PM2_HOME;

    expect(() => {
      Logger.addAppender();
    }).toThrow();
    expect(() => {
      Logger.addAppender('testAppender');
    }).toThrow();

    expect(() => {
      logger.addAppender();
    }).toThrow();
    logger.destroy();
  });

  it('测试切换日志实例类型', () => {
    const logger = Logger.getLogger('switchLevels');
    logger.setLevels(levels, 'INFO');
    expect(logger.trace).toBeUndefined();
  });

  it('测试实例方法', () => {
    expect(() => {
      Logger.getLogger('testError', {
        level: 'test'
      });
    }).toThrow();
  });

  afterEach(() => {
    spy.mockClear();
  });

  afterAll(() => {
    spy.mockRestore();
  });
});
