import forEach from '../src/forEach';

it('测试 forEach 方法', () => {
  forEach(null, () => { });

  const arr = [1, 2, 3, 4];
  let i = 1;
  forEach(arr, () => (i++));
  expect(i).toBe(5);
});
