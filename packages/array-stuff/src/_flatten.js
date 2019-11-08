import loop from './_internal/loop';
import append from 'celia/_append';

const { isArray } = Array;

export default function flatten(arr, result, depth) {
  loop(arr, 0, arr.length, (n) => {
    if (depth > 0) {
      if (isArray(n)) {
        flatten(n, result, --depth);
      } else {
        append(result, n);
      }
    } else {
      if (isArray(n)) {
        loop(n, 0, n.length, (m) => {
          append(result, m);
        });
      } else {
        append(result, n);
      }
    }
  });
  return result;
}
