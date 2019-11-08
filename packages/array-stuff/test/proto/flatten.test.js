import flatten from '../../src/proto/flatten';

// eslint-disable-next-line no-extend-native
Array.prototype.flatten = flatten;

it('测试 flatten 方法', () => {
  const arr1 = [1, [2], [], 3, 4, 5];
  expect(arr1.flatten()).toEqual([1, 2, 3, 4, 5]);

  const arr2 = [1, 2, 3, [2, 3, 4], [[1, 2, 3], [3, 4, 5]], 1, 3, 4];
  expect(arr2.flatten()).toEqual([1, 2, 3, 2, 3, 4, [1, 2, 3], [3, 4, 5], 1, 3, 4]);
});
