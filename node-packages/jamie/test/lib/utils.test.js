'use strict';

const { createError } = require('../../lib/utils');

describe('测试utils.js', () => {

  it('测试createError方法', () => {
    expect(createError(500, '{}')).toEqual(
      expect.any(Error)
    );
  });

  it('测试createError方法2', () => {
    expect(createError(500, '异常')).toEqual(
      expect.any(Error)
    );
  });

});
