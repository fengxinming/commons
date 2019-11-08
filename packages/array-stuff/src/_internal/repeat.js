export default function (start, end, callback) {
  for (; start < end; start++) {
    callback(start, end);
  }
}
