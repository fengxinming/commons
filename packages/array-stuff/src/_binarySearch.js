export default function (arr, val, left, right, compareFn) {
  let found;
  while (left < right) {
    let middle = (left + right) >> 1; // 找到中间值
    let compareResult = compareFn(val, arr[middle]);
    if (compareResult > 0) {
      left = middle + 1; // 往右边找
    } else {
      right = middle; // 往左边找
      found = !compareResult;
    }
  }
  return found ? left : -1;
};
