import twoSum from '../src/twoSum';

it('测试 twoSum 方法', () => {
  const arr1 = [2, 7, 11, 15];
  expect(twoSum(arr1, 9)).toEqual([0, 1]);
  expect(twoSum(null)).toEqual([]);
});
