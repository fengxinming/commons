import flattenDeep from '../src/flattenDeep';

it('测试 flattenDeep 方法', () => {
  const arr1 = [1, [2], [], 3, 4, 5];
  expect(flattenDeep(arr1)).toEqual([1, 2, 3, 4, 5]);

  const arr2 = [1, [2, [1, 2, [2, 3]], 3], [], 3, [[1, 2], [[1, 2, 3], 3], [1, 2]], 4, 5];
  expect(flattenDeep(arr2)).toEqual([1, 2, 1, 2, 2, 3, 3, 3, 1, 2, 1, 2, 3, 3, 1, 2, 4, 5]);
  expect(flattenDeep(null).length).toBe(0);
});
