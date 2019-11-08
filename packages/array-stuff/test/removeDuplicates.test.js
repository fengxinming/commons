import removeDuplicates from '../src/removeDuplicates';

it('测试 rotate 方法', () => {
  const arr1 = [1, 1, 3, 3, 6, 7, 2, 2, 2, 3];
  expect(removeDuplicates(arr1)).toEqual([1, 3, 2, 2, 3]);
  expect(removeDuplicates(null)).toEqual([]);

  const arr2 = [1, 1, 3, 3, 6, 7, 2, 2, 2, 3];
  expect(removeDuplicates(arr2, n => n)).toEqual([1, 3, 2, 2, 3]);

  const arr3 = [{}, {}, {}];
  expect(removeDuplicates(arr3)).toEqual([]);

  const obj = {};
  const arr4 = [obj, obj, obj];
  expect(removeDuplicates(arr4)).toEqual([{}, {}]);
});
