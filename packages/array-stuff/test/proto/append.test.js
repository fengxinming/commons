import append from '../../src/proto/append';

// eslint-disable-next-line no-extend-native
Array.prototype.append = append;

it('测试 append 方法', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(arr1.append(6)[arr1.length - 1]).toBe(6);
});
