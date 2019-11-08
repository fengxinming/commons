import checkForSearch from './_internal/checkForSearch';
import binarySearch2 from './_binarySearch2';

export default function (arr, val, left, right, compareFn) {
  return checkForSearch(binarySearch2)(arr, val, left, right, compareFn);
}
