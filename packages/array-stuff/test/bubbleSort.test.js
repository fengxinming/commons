import bubbleSort from '../src/bubbleSort';

it('测试 bubbleSort 方法', () => {
  const arr1 = [5, 4, 3, 2, 1];
  expect(bubbleSort(null)).toBe(null);
  expect(bubbleSort(arr1)).toEqual([1, 2, 3, 4, 5]);

  const arr2 = [3, 2, 1, 5, 4];
  expect(bubbleSort(arr2)).toEqual([1, 2, 3, 4, 5]);

  const arr3 = [3, 2, 1, 5, 4];
  expect(bubbleSort(arr3, (a, b) => a < b ? 1 : -1)).toEqual([5, 4, 3, 2, 1]);
});
