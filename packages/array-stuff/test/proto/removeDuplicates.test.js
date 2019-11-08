import removeDuplicates from '../../src/proto/removeDuplicates';

// eslint-disable-next-line no-extend-native
Array.prototype.removeDuplicates = removeDuplicates;

it('测试 removeDuplicates 方法', () => {
  const arr1 = [1, 1, 3, 3, 6, 7, 2, 2, 2, 3];
  expect(arr1.removeDuplicates()).toEqual([1, 3, 2, 2, 3]);

  const arr2 = [1, 1, 3, 3, 6, 7, 2, 2, 2, 3];
  expect(arr2.removeDuplicates(n => n)).toEqual([1, 3, 2, 2, 3]);

  const arr3 = [{}, {}, {}];
  expect(arr3.removeDuplicates()).toEqual([]);

  const obj = {};
  const arr4 = [obj, obj, obj];
  expect(arr4.removeDuplicates()).toEqual([{}, {}]);
});
