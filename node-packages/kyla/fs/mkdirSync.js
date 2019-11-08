'use strict';

const { mkdirSync } = require('fs');
const { dirname } = require('path');
const { getLogger } = require('clrsole');

const logger = getLogger('mkdirSync');

module.exports = function mkdir(dir, mode) {
  try {
    mkdirSync(dir, mode);
  } catch (e) {
    switch (e.code) {
      case 'ENOENT': // 上级目录不存在
        mkdir(dirname(dir), mode);
        mkdir(dir, mode);
        break;
      case 'EEXIST': // 文件已存在
        logger.warn(e);
        break;
    }
  }
};
