import loop from './_internal/loop';

const { isArray } = Array;
export default function (/* ArrayLike */arrLike) {
  const newArr = [];
  if (isArray(arrLike)) {
    loop(arrLike, 0, arrLike.length, (n, i) => {
      newArr[i] = n;
    });
  }
  return newArr;
}
