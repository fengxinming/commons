export default function (elems, index) {
  return elems.splice(index, 1)[0] || null;
}
