import flatten from '../_flatten';

export default function (depth) {
  return flatten(this, [], depth);
}
