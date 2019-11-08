import forEach from '../forEach';
import map from 'celia/_map';

export default function (callback, context) {
  return map(forEach, this, callback, context);
}
