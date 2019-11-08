import remove from '../../src/proto/remove';

// eslint-disable-next-line no-extend-native
Array.prototype.remove = remove;

it('测试 remove 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(arr1.remove(2)).toBe(2);
  expect(arr1.remove(9)).toBeNull();
});
