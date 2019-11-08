import map from '../src/mapFilter';

it('测试 map 方法', () => {
  let arr1 = [1, 2, 3, 4, 5];
  expect(map(arr1, n => n + 1)).toEqual(
    expect.arrayContaining([2, 3, 4, 5, 6])
  );
  arr1 = [1, null, 2, undefined, 3, 4, 5];
  expect(map(arr1, n => n && (n + 1))).toEqual(
    expect.arrayContaining([2, 3, 4, 5, 6])
  );
});
