import flattenDeep from '../../src/proto/flattenDeep';

// eslint-disable-next-line no-extend-native
Array.prototype.flattenDeep = flattenDeep;

it('测试 flatten 方法', () => {
  const arr1 = [1, [2], [], 3, 4, 5];
  expect(arr1.flattenDeep()).toEqual([1, 2, 3, 4, 5]);

  const arr2 = [1, [2, [1, 2, [2, 3]], 3], [], 3, [[1, 2], [[1, 2, 3], 3], [1, 2]], 4, 5];
  const result = [];
  expect(arr2.flattenDeep(result)).toEqual([1, 2, 1, 2, 2, 3, 3, 3, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5]);
});
