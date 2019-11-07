import parse from './parse';

export default function (source) {
  if (this.cacheable) {
    this.cacheable();
  }

  const obj = Object.create(null);
  parse(source, (key, value) => {
    obj[key] = value;
  });

  return `module.exports = ${JSON.stringify(obj)}`;
};
