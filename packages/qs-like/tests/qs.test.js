import parse from '../src/parse';
import prefix from '../src/prefix';
import stringify from '../src/stringify';

describe('测试 qs', () => {

  it('测试 parse 方法', () => {
    expect(Object.keys(parse(null)).length).toBe(0);
    expect(Object.keys(parse('12342343')).length).toBe(0);
    expect(parse('a=1&b=2&c=3&d=&f=')).toEqual({ a: '1', b: '2', c: '3', d: '', f: '' });
    expect(parse('&a=1&b=2&c=3&d=&f=')).toEqual({ a: '1', b: '2', c: '3', d: '', f: '' });
    expect(parse('abcdef&a=1&b=2&c=3&d=&f=')).toEqual({ a: '1', b: '2', c: '3', d: '', f: '' });
    expect(parse('?a=1&a=2&a=3&d=&f=')).toEqual({ a: ['1', '2', '3'], d: '', f: '' });
    expect(parse('https://www.npmjs.com/search?q=qs#hash')).toEqual({
      q: 'qs'
    });
  });

  it('测试 prefix 方法', () => {
    const str = 'a=1&b=2';
    expect(prefix(str, '?')).toBe('?' + str);
    expect(prefix(str)).toBe('?' + str);
    expect(prefix('?' + str, '?')).toBe('?' + str);
    expect(prefix('', '?')).toBe('');
  });

  it('测试 stringify 方法', () => {
    expect(stringify(null)).toBe('');

    expect(
      stringify({ a: 1, b: null, c: undefined, d: NaN, e: '' })
    ).toEqual('a=1&b=&c=&d=&e=');

    expect(
      stringify({ a: '', c: ['\'1\'', '2', '3', NaN, undefined], f: null, '': 'null' })
    ).toEqual('a=&c=%271%27&c=2&c=3&c=&c=&f=');

    expect(
      stringify({ a: { key: 'value', 'key2': 'value2' }, d: undefined, f: '' })
    ).toEqual('a=%7B%22key%22%3A%22value%22%2C%22key2%22%3A%22value2%22%7D&d=&f=');

    expect(
      stringify({ a: () => { } })
    ).toEqual('a=%28%29%20%3D%3E%20%7B%7D');
  });

});
