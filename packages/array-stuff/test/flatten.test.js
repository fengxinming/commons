import flat from '../src/flatten';

it('测试 flatten 方法', () => {
  const arr1 = [1, [2], [], 3, 4, 5];
  expect(flat(arr1)).toEqual([1, 2, 3, 4, 5]);
  expect(flat(null).length).toBe(0);

  const arr2 = [1, 2, 3, [2, 3, 4], [[1, 2, 3], [3, 4, 5]], 1, 3, 4];
  expect(flat(arr2)).toEqual([1, 2, 3, 2, 3, 4, [1, 2, 3], [3, 4, 5], 1, 3, 4]);
});
