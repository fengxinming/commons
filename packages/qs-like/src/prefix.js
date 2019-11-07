export default function (str, prefix) {
  prefix = prefix || '?';
  return str
    ? str.indexOf(prefix) === 0
      ? str
      : (prefix + str)
    : str;
}
