import grep from '../src/grep';

it('测试 grep 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(grep(arr1, (n, i) => {
    return n === 3;
  })).toEqual(
    expect.arrayContaining([3])
  );

  expect(grep(arr1, (n, i) => {
    return n === 3;
  }, true)).toEqual(
    expect.arrayContaining([1, 2, 4, 5])
  );

  expect(grep(null).length).toBe(0);
});
