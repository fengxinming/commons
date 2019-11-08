import loop from './_internal/loop';

export default function (arr, result) {
  // 被移除的内容
  const removed = [];
  let len = arr.length;

  if (!len) {
    return removed;
  }

  const returnArray = result || arr;
  let i = 0;

  loop(arr, 1, len, (item) => {
    item !== arr[i]
      ? (returnArray[++i] = item)
      : (removed[removed.length] = item);
  });
  returnArray.length = i + 1;
  return removed;
}
