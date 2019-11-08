import flatten from './flatten';

export default function (arr) {
  return flatten(arr, Number.MAX_VALUE);
}
