import forEach from 'celia/_forEach';

export default function (elems, callback, isOpposite) {
  let matches = [];
  isOpposite = !!isOpposite;
  let j = 0;
  forEach(elems, (elem, i) => {
    if (!callback(elem, i) === isOpposite) {
      matches[j++] = elem;
    }
  });
  return matches;
}
