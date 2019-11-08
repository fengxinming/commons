
import transIndex from './_transIndex';

export default function (arr, elem, fromIndex) {
  const len = arr.length;
  let i = fromIndex ? transIndex(fromIndex, len) : 0;
  for (; i < len; i++) {
    if (i in arr && arr[i] === elem) {
      return i;
    }
  }
  return -1;
}
