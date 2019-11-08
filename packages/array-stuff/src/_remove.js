import removeAt from './_removeAt';

export default function (elems, value) {
  let index = elems.indexOf(value);
  if (index > -1) {
    return removeAt(elems, index);
  }
  return null;
}
