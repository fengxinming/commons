import forSlice from '../../src/proto/forSlice';

// eslint-disable-next-line no-extend-native
Array.prototype.forSlice = forSlice;

it('测试 forSlice 方法', () => {
  let i = 0;
  const arr = [1, 2, 3, 4];
  arr.forSlice(0, () => {
    i++;
  });
  expect(i).toBe(4);
  i = 0;
  arr.forSlice(0, 2, () => {
    i++;
  });
  expect(i).toBe(2);
  i = 0;
  arr.forSlice(0, 0, () => {
    i++;
  });
  expect(i).toBe(0);
  i = 0;
  arr.forSlice(0, -1, () => {
    i++;
  });
  expect(i).toBe(3);
  i = 0;
  arr.forSlice(0, -5, () => {
    i++;
  });
  expect(i).toBe(0);
  i = 0;
  arr.forSlice(null, 0, () => {
    i++;
  });
  expect(i).toBe(0);
  i = 0;
  arr.forSlice(-3, -1, () => {
    i++;
  });
  expect(i).toBe(2);
});
