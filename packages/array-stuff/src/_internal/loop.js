export default function (arr, start, end, callback) {
  for (; start < end; start++) {
    callback(arr[start], start, arr);
  }
}
