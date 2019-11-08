export default function (arr, times) {
  if (times) {
    const len = arr.length;
    const lastIndex = len - 1;

    // 循环次数大于数据长度就取模
    times = times < len ? times : times % len;

    while (times > 0) {
      let last = arr[lastIndex];
      for (let i = lastIndex; i > 0; i--) {
        arr[i] = arr[i - 1];
      }
      arr[0] = last;
      times--;
    }
  }
  return arr;
}
