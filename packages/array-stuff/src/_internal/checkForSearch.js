import isFunction from 'celia/isFunction';
import defaultCompare from './defaultCompare';

const { isArray } = Array;
export default function (fn) {
  return function (arr, val, left, right, compareFn) {
    if (!isArray(arr)) {
      return -1;
    }

    if (isFunction(left)) {
      compareFn = left;
      left = 0;
      right = arr.length;
    } else if (isFunction(right)) {
      compareFn = right;
      right = arr.length;
    }

    return fn(
      arr,
      val,
      left || 0,
      right || arr.length,
      compareFn || defaultCompare
    );
  };
}
