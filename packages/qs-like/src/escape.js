// rfc3986
const encodeReserveRE = /[!'()*]/g;

function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16).toUpperCase();
}

export default function (str) {
  return encodeURIComponent(str)
    .replace(encodeReserveRE, encodeReserveReplacer);
}
