import combine from '../src/combine';

it('测试 combine 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(combine(null)).toBe(0);
  expect(combine(arr1, [7, 8, 9])).toBe(8);
  expect(combine(arr1, {})).toBe(9);
  expect(combine({ 0: 1, length: 1 }, 1)).toBe(2);
});
