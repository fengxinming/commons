import rotate from '../../src/proto/rotate';

// eslint-disable-next-line no-extend-native
Array.prototype.rotate = rotate;

it('测试 rotate 方法', () => {
  const arr1 = [1, 2, 3, 4, 5, 6, 7];
  expect(arr1.rotate(3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  expect(arr1.rotate(null)).toEqual(arr1);
});
