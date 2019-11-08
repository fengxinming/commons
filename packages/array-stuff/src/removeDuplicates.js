import removeDuplicates from './_removeDuplicates';

const { isArray } = Array;
export default function (arr, result, getHash) {
  if (isArray(arr)) {
    return removeDuplicates(arr, result, getHash);
  }
  return [];
}
