import loop from '../_internal/loop';
import isArrayLike from 'celia/isArrayLike';

export default function (arr, args, start) {
  let i = arr.length;

  loop(args, start, args.length, (arg) => {
    if (isArrayLike(arg)) {
      loop(arg, 0, arg.length, (elem) => {
        arr[i++] = elem;
      });
    } else {
      arr[i++] = arg;
    }
  });

  return i;
}
