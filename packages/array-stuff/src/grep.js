import grep from './_grep';

export default function (elems, callback, isOpposite) {
  if (elems) {
    return grep(elems, callback, isOpposite);
  }
  return [];
}
