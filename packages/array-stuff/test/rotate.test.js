import rotate from '../src/rotate';

it('测试 rotate 方法', () => {
  const arr1 = [1, 2, 3, 4, 5, 6, 7];
  expect(rotate(arr1, 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);

  const arr2 = [1, 2, 3, 4, 5, 6, 7];
  expect(rotate(arr2, 10)).toEqual([5, 6, 7, 1, 2, 3, 4]);

  expect(rotate(arr1, null)).toEqual(arr1);
  expect(rotate(null)).toBe(null);
});
