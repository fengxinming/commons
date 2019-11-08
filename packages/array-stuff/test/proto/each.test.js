import each from '../../src/proto/each';

// eslint-disable-next-line no-extend-native
Array.prototype.each = each;

it('测试 each 方法', () => {
  const arr = [1, 2, 3, 4];
  let i = 1;
  arr.each(() => (i++));
  expect(i).toBe(5);
});
