import flatten from '../_flatten';

export default function () {
  return flatten(this, [], Number.MAX_VALUE);
}
