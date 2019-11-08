import forEach from 'celia/_forEach';

export default function (arr, cb, ctx) {
  if (arr) {
    forEach(arr, cb, ctx);
  }
};
