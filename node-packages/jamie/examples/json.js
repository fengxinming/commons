'use strict';

const request = require('../');

async function fetch() {
  const { body } = await request({
    logLevel: 'info',
    url: 'http://api.map.baidu.com/place/v2/search?query=ATM%E6%9C%BA&tag=%E9%93%B6%E8%A1%8C&region=%E5%8C%97%E4%BA%AC&output=json&ak=%E6%82%A8%E7%9A%84ak',
    json: true,
    validateBody({ body }) {
      return body.status === 200;
    }
  });
  console.log('======== ++++++++++', body);
};

fetch();
