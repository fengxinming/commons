import loop from './_internal/loop';
import repeat from './_internal/repeat';
import defaultCompare from './_internal/defaultCompare';

export default function (arr, compareFn) {
  compareFn = compareFn || defaultCompare;

  const len = arr.length - 1;

  repeat(0, len, (i) => {
    loop(arr, 0, len - i, (m, j) => {
      const nextIndex = j + 1;
      const next = arr[nextIndex];
      const compareResult = compareFn(m, next);
      if (compareResult > 0) { // 降序
        arr[nextIndex] = m;
        arr[j] = next;
      }
    });
  });
  return arr;
}
