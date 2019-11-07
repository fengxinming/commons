'use strict';

const eformat = require('../index.js');

it('测试 格式化 方法', () => {
  expect(eformat('{$key ? 1 : 0}', { $key: true })).toBe('1');
  expect(eformat('{$key && 2}', { $key: true })).toBe('2');
  expect(eformat('==={$key > 2 && 3}===', { $key: true })).toBe('===false===');
  expect(eformat('abc{$key ? 1 : 0}def', { $key: true })).toBe('abc1def');
});
