import loop from './_internal/loop';

export default function (arr, target) {
  const seen = {};
  const result = [];
  loop(arr, 0, arr.length, (item, i) => {
    const remainder = target - item;
    if (seen.hasOwnProperty(remainder)) {
      result[0] = seen[remainder];
      result[1] = i;
      return false;
    }
    seen[item] = i;
  });
  return result;
}
