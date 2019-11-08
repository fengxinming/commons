import mapFilter from '../../src/proto/mapFilter';

// eslint-disable-next-line no-extend-native
Array.prototype.mapFilter = mapFilter;

it('测试 mapFilter 方法', () => {
  let arr1 = [1, 2, 3, 4, 5];
  expect(arr1.mapFilter(n => n + 1)).toEqual(
    expect.arrayContaining([2, 3, 4, 5, 6])
  );
  arr1 = [1, null, 2, undefined, 3, 4, 5];
  expect(arr1.mapFilter(n => n && (n + 1))).toEqual(
    expect.arrayContaining([2, 3, 4, 5, 6])
  );
});
