import checkForSearch from './_internal/checkForSearch';
import binarySearch from './_binarySearch';

export default function (arr, val, left, right, compareFn) {
  return checkForSearch(binarySearch)(arr, val, left, right, compareFn);
}
