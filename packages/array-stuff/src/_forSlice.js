import forSlice from 'celia/_forSlice';
import isFunction from 'celia/isFunction';
import transIndex from './_transIndex';

export default function (value, start, end, iterator, context) {
  const len = value.length;
  if (isFunction(start)) {
    context = end;
    iterator = start;
    end = len;
    start = 0;
  } else if (isFunction(end)) {
    context = iterator;
    iterator = end;
    end = len;
  }
  start = transIndex(start, len);
  end = transIndex(end, len);

  forSlice(value, start, end, iterator, context);
};
