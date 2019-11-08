import forSlice from './_forSlice';

export default function (value, start, end, iterator, context) {
  if (value) {
    forSlice(value, start, end, iterator, context);
  }
};
