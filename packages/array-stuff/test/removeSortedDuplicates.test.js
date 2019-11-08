import removeSortedDuplicates from '../src/removeSortedDuplicates';

it('测试 removeSortedDuplicates 方法', () => {
  const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(removeSortedDuplicates(arr1)).toEqual([0, 1, 1, 2, 3]);
  expect(removeSortedDuplicates(null)).toEqual([]);
  expect(removeSortedDuplicates([])).toEqual([]);
});
