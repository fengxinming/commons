import forEach from './forEach';
import map from 'celia/_map';

export default function (elems, callback, context) {
  return map(forEach, elems, callback, context);
}
