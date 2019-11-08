function max(a, b) {
  return a > b ? a : b;
}

export default function (fromIndex, length) {
  return fromIndex < 0 ? max(0, length + fromIndex) : fromIndex;
}
