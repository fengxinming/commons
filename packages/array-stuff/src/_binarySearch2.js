export default function recursive(arr, val, left, right, compareFn) {
  const middle = (left + right) >> 1; // 找到中间值
  const compareResult = compareFn(val, arr[middle]);

  if (compareResult > 0) {
    // 往右边找
    recursive(arr, val, middle, right);
  } else if (compareResult < 0) {
    // 往左边找
    recursive(arr, val, left, middle);
  } else {
    return middle;
  }
  return -1;
}
