import toArray from '../../src/proto/toArray';

// eslint-disable-next-line no-extend-native
Array.prototype.toArray = toArray;

it('测试 toArray 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(arr1.toArray()).toEqual(
    expect.arrayContaining([1, 2, 3, 4, 5])
  );
  expect(arr1.toArray() !== arr1).toBe(true);
});
