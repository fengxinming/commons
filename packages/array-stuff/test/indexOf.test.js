import indexOf from '../src/indexOf';

it('测试 indexOf 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(indexOf(arr1, 2)).toBe(1);
  expect(indexOf(arr1, 2, 2)).toBe(-1);
  expect(indexOf(arr1, 4, 2)).toBe(3);
  expect(indexOf()).toBe(-1);
});

it('用arraylike测试 indexOf 方法', () => {
  const arr1 = { 0: 'abc', 1: 'def', 2: 'aaa', 3: 'bbb', length: 4 };
  expect(indexOf(arr1, 2)).toBe(-1);
  expect(indexOf(arr1, 'aaa', 3)).toBe(-1);
  expect(indexOf(arr1, 'def', 1)).toBe(1);
  expect(indexOf(arr1, 'bbb', -1)).toBe(3);
});
