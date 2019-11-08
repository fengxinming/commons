import combine from '../../src/proto/combine';

// eslint-disable-next-line no-extend-native
Array.prototype.combine = combine;

it('测试 combine 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(arr1.combine([7, 8, 9])).toBe(8);
  expect(arr1.combine({})).toBe(9);
});
