'use strict';

const { URL } = require('url');
const Console = require('clrsole');
const { isString } = require('celia');
const sleep = require('./lib/sleep');
const fetch = require('./lib/fetch');
const Abortion = require('./lib/Abortion');

const requestLogger = new Console('corie-request');

async function corieRequest(options) {
  let {
    host,
    uri,
    url,
    interval, // 重试间隔周期
    logger, // 日志对象
    retries = 3, // 重试次数
    balance = 'roundrobin', // 负责方式
    protocol = 'http:', // 请求协议
    logLevel = 'ERROR'
    // logLevel = 'WARN'
  } = options;

  // 设置默认日志操作对象
  if (!logger) {
    logger = requestLogger;
    logger.setLevel(logLevel);
  }

  // 请求异常
  let error;
  // 响应结果
  let result;
  // 请求前的数据处理
  let beforeEach;
  // 循环次数
  let count = retries;

  if (host) {
    // 兼容string类型
    if (isString(host)) {
      host = host.split(',');
    }
    let urls;
    uri = uri || url;
    // 如果是url
    if (uri.indexOf('://') !== -1) {
      // 解析url
      const myURL = new URL(uri);
      urls = host.map((h) => {
        myURL.host = h;
        return myURL.href;
      });
    } else {
      urls = host.map(h => `${protocol}//${h}${uri}`);
    }
    // 配置了多个host
    if (urls.length > 1) {
      switch (balance) {
        // 轮询方式
        case 'roundrobin':
          beforeEach = () => {
            if (error) {
              const u = urls[0];
              options.url = u;
              urls.push(u);
              urls.shift();
            }
          };
          break;
        // 随机方式
        case 'random':
          beforeEach = () => {
            options.url = urls[Math.floor(Math.random() * urls.length)];
          };
          break;
      }
      count = host.length * retries;
    } else {
      options.url = urls[0];
    }
    delete options.uri;
  }

  // 循环获取数据
  while (count--) {
    beforeEach && beforeEach();
    try {
      result = await fetch(options);
      error = undefined;
      break;
    } catch (e) {
      error = e;
      const err = e.error;
      if (err) {
        logger.warn(err);
        // 如果aborted请求，就直接退出循环
        if (err.code === 'ERR_REQUEST_ABORTED') {
          break;
        }
      }
      if (interval) {
        await sleep(interval);
      }
    }
  }

  if (error) {
    // return Promise.reject(error);
    throw error;
  }
  return result;
};

corieRequest.fetch = fetch;
corieRequest.Abortion = Abortion;
corieRequest.sleep = sleep;

module.exports = corieRequest;
