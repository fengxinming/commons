import forSlice from '../src/forSlice';

it('测试 forSlice 方法', () => {
  let i = 0;
  const arr = [1, 2, 3, 4];
  forSlice(null, () => {
    i++;
  });
  expect(i).toBe(0);

  i = 0;
  forSlice(arr, 0, () => {
    i++;
  });
  expect(i).toBe(4);

  i = 0;
  forSlice(arr, 0, 2, () => {
    i++;
  });
  expect(i).toBe(2);

  i = 0;
  forSlice(arr, 0, 0, () => {
    i++;
  });
  expect(i).toBe(0);

  i = 0;
  forSlice(arr, 0, -1, () => {
    i++;
  });
  expect(i).toBe(3);

  i = 0;
  forSlice(arr, 0, -5, () => {
    i++;
  });
  expect(i).toBe(0);

  i = 0;
  forSlice(arr, null, 0, () => {
    i++;
  });
  expect(i).toBe(0);

  i = 0;
  forSlice(arr, () => {
    i++;
  });
  expect(i).toBe(4);
});
