import indexOf from './_indexOf';
import isArrayLike from 'celia/isArrayLike';

export default function (arrLike, elem, fromIndex) {
  if (isArrayLike(arrLike)) {
    return indexOf(arrLike, elem, fromIndex);
  }
  return -1;
}
