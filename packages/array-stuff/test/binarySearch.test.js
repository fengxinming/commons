import binarySearch from '../src/binarySearch';

it('测试 append 方法', () => {
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(binarySearch(arr1, 10)).toBe(-1);
  expect(binarySearch(null)).toBe(-1);
  expect(binarySearch(arr1, 7)).toBe(6);
  expect(binarySearch(arr1, 6)).toBe(5);
  expect(binarySearch(arr1, 6, 6)).toBe(-1);
  expect(binarySearch(arr1, 3)).toBe(2);
  expect(binarySearch(arr1, 3, 4)).toBe(-1);
  expect(binarySearch(arr1, 3, (a, b) => a - b)).toBe(2);
  expect(binarySearch(arr1, 5, 3, (a, b) => a - b)).toBe(4);
});
