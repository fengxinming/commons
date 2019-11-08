import isFunction from 'celia/isFunction';
import getEasyHash from 'celia/getEasyHash';

export default function (arr, result, getHash) {
  if (isFunction(result)) {
    getHash = result;
    result = arr;
  }

  let len = arr.length;
  const returnArray = result || arr;
  let hashFn = getHash || getEasyHash;

  // 已存在的集合
  let seen = Object.create(null);
  // 被移除的内容
  const removed = [];
  let removedIndex = 0;
  // 游标
  let cursorInsert = 0;
  for (let cursorRead = 0; cursorRead < len;) {
    let current = arr[cursorRead++];
    let key = hashFn(current);
    if (!seen[key]) {
      seen[key] = true;
      returnArray[cursorInsert++] = current;
    } else {
      removed[removedIndex++] = current;
    }
  }
  returnArray.length = cursorInsert;
  return removed;
}
