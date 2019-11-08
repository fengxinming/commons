import append from 'celia/_append';

export default function (arr, obj) {
  return arr ? append(arr, obj) : arr;
}
