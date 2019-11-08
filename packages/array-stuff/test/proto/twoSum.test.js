import twoSum from '../../src/proto/twoSum';

// eslint-disable-next-line no-extend-native
Array.prototype.twoSum = twoSum;

it('测试 twoSum 方法', () => {
  const arr1 = [2, 7, 11, 15];
  expect(arr1.twoSum(9)).toEqual([0, 1]);
  expect([].twoSum()).toEqual([]);
});
