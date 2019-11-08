import removeSortedDuplicates from '../../src/proto/removeSortedDuplicates';

// eslint-disable-next-line no-extend-native
Array.prototype.removeSortedDuplicates = removeSortedDuplicates;

it('测试 removeSortedDuplicates 方法', () => {
  const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(arr1.removeSortedDuplicates()).toEqual([0, 1, 1, 2, 3]);
  expect([].removeSortedDuplicates()).toEqual([]);
});
