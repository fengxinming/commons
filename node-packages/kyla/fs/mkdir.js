'use strict';

const { mkdir } = require('fs');
const { dirname } = require('path');
const { getLogger } = require('clrsole');

function mkdirAsync(dir, mode) {
  return new Promise((resolve, reject) => {
    mkdir(dir, mode, e => (e ? reject(e) : resolve));
  });
}

const logger = getLogger('mkdir');

module.exports = async function mkdir(dir, mode) {
  try {
    await mkdirAsync(dir, mode);
  } catch (e) {
    switch (e.code) {
      case 'ENOENT': // 上级目录不存在
        await mkdirAsync(dirname(dir), mode);
        await mkdirAsync(dir, mode);
        break;
      case 'EEXIST': // 文件已存在
        logger.warn(e);
        break;
    }
  }
};
