import combine from './_internal/combine';

const { isArray } = Array;
export default function (first) {
  let i = 0;
  if (first && (i = first.length) > -1) {
    i = combine(first, arguments, 1);

    if (i && !isArray(first)) {
      first.length = i;
    }
  }

  return i;
}
