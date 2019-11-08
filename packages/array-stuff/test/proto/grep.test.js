import grep from '../../src/proto/grep';

// eslint-disable-next-line no-extend-native
Array.prototype.grep = grep;

it('测试 grep 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(arr1.grep((n, i) => {
    return n === 3;
  })).toEqual(
    expect.arrayContaining([3])
  );

  expect(arr1.grep((n, i) => {
    return n === 3;
  }, true)).toEqual(
    expect.arrayContaining([1, 2, 4, 5])
  );
});
