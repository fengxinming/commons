'use strict';

const request = require('../');

async function fetch() {
  try {
    const { body } = await request({
      // logLevel: 'info', // 选填
      // interval: 3000, // 选填
      // validateBody(result) { // 选填
      //   return true;
      // },
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
    });
    console.log('body ======>', body);
  } catch (e) {
    console.error('异常：', e);
  }

  try {
    const { body } = await request({
      logLevel: 'info', // 选填
      // interval: 3000, // 选填
      // validateBody(result) { // 选填
      //   return true;
      // },
      headers: {
        'X-App-Id': 'talos-open',
        'X-Access-Key': '134VQ9cH29G00Zv7',
        'X-Signature-Time': 1533284944,
        'Authorization': '1b1c92907a63d73df1c0151388195c43'
      },
      url: 'http://10.57.17.40:8188/v2/api/config/file?app=redis&env=dev&group=DEFAULT_GROUP&key=redis.talos-open.properties'
    });
    console.log('body 2 ======>', body);
  } catch (e) {
    console.error('异常：', e);
  }

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
