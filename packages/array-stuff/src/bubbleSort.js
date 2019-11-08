import bubbleSort from './_bubbleSort';

const { isArray } = Array;
export default function (arr, obj) {
  if (isArray(arr)) {
    return bubbleSort(arr, obj);
  }
  return arr;
}
