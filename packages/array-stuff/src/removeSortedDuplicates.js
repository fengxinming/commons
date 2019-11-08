import removeSortedDuplicates from './_removeSortedDuplicates';

const { isArray } = Array;
export default function (arr) {
  if (isArray(arr)) {
    return removeSortedDuplicates(arr);
  }
  return [];
}
