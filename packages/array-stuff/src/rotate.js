import rotate from './_rotate';

const { isArray } = Array;
export default function (arr, times) {
  if (isArray(arr)) {
    return rotate(arr, times);
  }
  return arr;
}
