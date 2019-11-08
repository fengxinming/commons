'use strict';

const createHttpError = require('http-errors');
const request = require('../');

const { Abortion } = request;

describe('测试index.js', () => {
  it('测试只传入一个host', () => {
    return expect(request({
      host: ['pv.sohu.com'],
      uri: '/cityjson'
    }))
      .resolves
      .toEqual(
        expect.objectContaining({
          body: expect.any(String)
        })
      );
  });

  it('测试传入host的情况', () => {
    return expect(request({
      headers: {
        'X-App-Id': 'talos-open',
        'X-Access-Key': '134VQ9cH29G00Zv7',
        'X-Signature-Time': 1533284944,
        'Authorization': '1b1c92907a63d73df1c0151388195c43'
      },
      host: [ // 选填
        '10.57.17.40:8188',
        '10.57.17.39:8188'
      ],
      uri: '/v2/api/config/file?app=redis&env=dev&group=DEFAULT_GROUP&key=redis.talos-open.properties'
    }))
      .resolves
      .toEqual(
        expect.objectContaining({
          body: expect.any(String)
        })
      );
  });

  it('测试传入url的情况', () => {
    return expect(request({
      headers: {
        'X-App-Id': 'talos-open',
        'X-Access-Key': '134VQ9cH29G00Zv7',
        'X-Signature-Time': 1533284944,
        'Authorization': '1b1c92907a63d73df1c0151388195c43'
      },
      host: [ // 选填
        '10.57.17.40:8188',
        '10.57.17.39:8188'
      ],
      uri: 'http://www.baidu.com/v2/api/config/file?app=redis&env=dev&group=DEFAULT_GROUP&key=redis.talos-open.properties'
    }))
      .resolves
      .toEqual(
        expect.objectContaining({
          body: expect.any(String)
        })
      );
  });

  it('测试传入balance的情况', () => {
    return expect(request({
      headers: {
        'X-App-Id': 'talos-open',
        'X-Access-Key': '134VQ9cH29G00Zv7',
        'X-Signature-Time': 1533284944,
        'Authorization': '1b1c92907a63d73df1c0151388195c43'
      },
      host: [ // 选填
        '10.57.17.39:8188',
        '10.57.17.39:8188'
      ],
      balance: 'random',
      url: '/v2/api/config/file?app=redis&env=dev&group=DEFAULT_GROUP&key=redis.talos-open.properties'
    }))
      .resolves
      .toEqual(
        expect.objectContaining({
          body: expect.any(String)
        })
      );
  });

  it('测试兼容host的情况', () => {
    return expect(request({
      headers: {
        'X-App-Id': 'talos-open',
        'X-Access-Key': '134VQ9cH29G00Zv7',
        'X-Signature-Time': 1533284944,
        'Authorization': '1b1c92907a63d73df1c0151388195c43'
      },
      host: '10.57.17.39:8188,10.57.17.39:8188',
      balance: 'random',
      uri: '/v2/api/config/file?app=redis&env=dev&group=DEFAULT_GROUP&key=redis.talos-open.properties'
    }))
      .resolves
      .toEqual(
        expect.objectContaining({
          body: expect.any(String)
        })
      );
  });

  it('测试传入interval的情况', () => {
    return expect(request({
      interval: 2000, // 选填
      headers: {
        'X-App-Id': 'talos-open',
        'X-Access-Key': '134VQ9cH29G00Zv7',
        'X-Signature-Time': 1533284944,
        'Authorization': '1b1c92907a63d73df1c0151388195c43'
      },
      retries: 2,
      url: 'http://10.57.17.40:8188/v2/api/config/file?app=redis&env=dev&group=DEFAULT_GROUP&key=redis.talos-open.properties'
    }))
      .rejects
      .toEqual(
        expect.objectContaining({
          error: expect.any(Error)
        })
      );
  });

  it('测试自定义logger的情况', () => {
    return expect(request({
      host: ['pv.sohu.com'],
      uri: '/cityjson',
      logger: console
    }))
      .resolves
      .toEqual(
        expect.objectContaining({
          body: expect.any(String)
        })
      );
  });

  it('测试异常情况', () => {
    return expect(request({
      logLevel: 'info', // 选填
      headers: {
        'X-App-Id': 'talos-open',
        'X-Access-Key': '134VQ9cH29G00Zv7',
        'X-Signature-Time': 1533284944,
        'Authorization': '1b1c92907a63d73df1c0151388195c43'
      },
      retries: 1,
      url: 'http://10.57.17.40:8188/v2/api/config/file?app=redis&env=dev&group=DEFAULT_GROUP&key=redis.talos-open.properties'
    }))
      .rejects
      .toEqual(
        expect.objectContaining({
          error: expect.any(Error)
        })
      );
  });

  it('测试abort情况', () => {
    const abortion = new Abortion();
    const req = request({
      abortion,
      logLevel: 'info', // 选填
      headers: {
        'X-App-Id': 'talos-open',
        'X-Access-Key': '134VQ9cH29G00Zv7',
        'X-Signature-Time': 1533284944,
        'Authorization': '1b1c92907a63d73df1c0151388195c43'
      },
      retries: 10,
      interval: 1000,
      url: 'http://10.57.17.40:8188/v2/api/config/file?app=redis&env=dev&group=DEFAULT_GROUP&key=redis.talos-open.properties'
    });
    abortion.abort(new Error('主动中断请求'));
    return expect(req)
      .rejects
      .toEqual(
        expect.objectContaining({
          error: expect.any(Error)
        })
      );
  });

  it('测试abort情况2', () => {
    const abortion = new Abortion();
    const req = request({
      abortion,
      logLevel: 'info', // 选填
      headers: {
        'X-App-Id': 'talos-open',
        'X-Access-Key': '134VQ9cH29G00Zv7',
        'X-Signature-Time': 1533284944,
        'Authorization': '1b1c92907a63d73df1c0151388195c43'
      },
      retries: 10,
      url: 'http://10.57.17.40:8188/v2/api/config/file?app=redis&env=dev&group=DEFAULT_GROUP&key=redis.talos-open.properties'
    });
    abortion.abort('主动中断请求String');
    return expect(req)
      .rejects
      .toEqual(
        expect.objectContaining({
          error: expect.any(Error)
        })
      );
  });

  it('测试abort情况3', () => {
    const abortion = new Abortion();
    const req = request({
      abortion,
      logLevel: 'info', // 选填
      headers: {
        'X-App-Id': 'talos-open',
        'X-Access-Key': '134VQ9cH29G00Zv7',
        'X-Signature-Time': 1533284944,
        'Authorization': '1b1c92907a63d73df1c0151388195c43'
      },
      retries: 10,
      url: 'http://10.57.17.40:8188/v2/api/config/file?app=redis&env=dev&group=DEFAULT_GROUP&key=redis.talos-open.properties'
    });
    abortion.abort();
    return expect(req)
      .rejects
      .toEqual(
        expect.objectContaining({
          error: expect.any(Error)
        })
      );
  });

  it('测试校验body', () => {
    return expect(
      request({
        logLevel: 'info',
        url: 'http://api.map.baidu.com/place/v2/search',
        json: true,
        validateBody({ body }) {
          return body.status !== 101;
        }
      }))
      .rejects
      .toEqual(
        expect.objectContaining({
          error: null
        })
      );
  });

  it('测试校验body情况2', () => {
    return expect(
      request({
        logLevel: 'info',
        url: 'http://api.map.baidu.com/place/v2/search?query=ATM%E6%9C%BA&tag=%E9%93%B6%E8%A1%8C&region=%E5%8C%97%E4%BA%AC&output=json&ak=%E6%82%A8%E7%9A%84ak',
        json: true,
        validateBody({ body }) {
          return body.status === 200;
        }
      }))
      .resolves
      .toEqual(
        expect.objectContaining({
          body: expect.any(Object)
        })
      );
  });

  it('测试校验body情况3', () => {
    return expect(
      request({
        logLevel: 'info',
        url: 'http://api.map.baidu.com/place/v2/search?query=ATM%E6%9C%BA&tag=%E9%93%B6%E8%A1%8C&region=%E5%8C%97%E4%BA%AC&output=json&ak=%E6%82%A8%E7%9A%84ak',
        json: true,
        validateBody({ body }) {
          if (body.status === 200) {
            return createHttpError('格式错误');
          }
          return true;
        }
      }))
      .rejects
      .toEqual(
        expect.objectContaining({
          error: expect.any(Error)
        })
      );
  });

});
