import removeAt from '../../src/proto/removeAt';

// eslint-disable-next-line no-extend-native
Array.prototype.removeAt = removeAt;

it('测试 removeAt 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(arr1.removeAt(2)).toBe(3);
  expect(arr1.removeAt(9)).toBeNull();
});
