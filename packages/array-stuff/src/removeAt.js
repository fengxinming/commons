import removeAt from './_removeAt';

const { isArray } = Array;
export default function (elems, index) {
  if (isArray(elems)) {
    return removeAt(elems, index);
  }
  return null;
}
