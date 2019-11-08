import forEach from 'celia/_forEach';

export default function (cb, ctx) {
  forEach(this, cb, ctx);
};
