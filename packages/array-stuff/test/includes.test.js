import includes from '../src/includes';

it('测试 includes 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(includes(arr1, 2)).toBe(true);
  expect(includes(arr1, 6)).toBe(false);
});
