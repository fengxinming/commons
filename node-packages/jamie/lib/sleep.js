'use strict';

/**
 * 休眠函数
 * @param {Number} defer 休眠时间
 */
function sleep(defer) {
  return new Promise((resolve) => {
    setTimeout(resolve, defer);
  });
}

module.exports = sleep;
