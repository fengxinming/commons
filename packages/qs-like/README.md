# qs-like

[![NPM version](https://img.shields.io/npm/v/qs-like.svg?style=flat)](https://npmjs.org/package/qs-like)
[![NPM Downloads](https://img.shields.io/npm/dm/qs-like.svg?style=flat)](https://npmjs.org/package/qs-like)
[![](https://data.jsdelivr.com/v1/package/npm/qs-like/badge)](https://www.jsdelivr.com/package/npm/qs-like)

> A tiny query string parsing and stringifying library

---

## Usage

```js

// ES6
import { escape, parse, prefix, stringify, unescape } from 'qs-like';

// modularity
import escape from 'qs-like/escape';
import parse from 'qs-like/parse';
import prefix from 'qs-like/prefix';
import stringify from 'qs-like/stringify';
import unescape from 'qs-like/unescape';
// or
import escape from 'qs-like/es/escape';
import parse from 'qs-like/es/parse';
import prefix from 'qs-like/es/prefix';
import stringify from 'qs-like/es/stringify';
import unescape from 'qs-like/es/unescape';

// CommonJS
const { escape, parse, prefix, stringify, unescape } = require('qs-like');

// modularity
const escape = require('qs-like/escape');
const parse = require('qs-like/parse');
const prefix = require('qs-like/prefix');
const stringify = require('qs-like/stringify');
const unescape = require('qs-like/unescape');

```

### Load `qs-like` via classical `<script>` tag

```html
<script src="https://cdn.jsdelivr.net/npm/qs-like/qs-like.umd.min.js"></script>
<script>
  // window.qsLike
  qsLike.escape
  qsLike.parse
  qsLike.prefix
  qsLike.stringify
  qsLike.unescape
</script>

```

## API

### decode()

The `decode()` method is an alias for `parse()`.

### encode()

The `encode()` method is an alias for `stringify()`.

### escape(str)

The `escape()` method performs URL percent-encoding on the given str in a manner that is optimized for the specific requirements of URL query strings.

The `escape()` method is used by `stringify()` and is generally not expected to be used directly. It is exported primarily to allow application code to provide a replacement percent-encoding implementation if necessary by assigning `escape()` to an alternative function.

### parse(str[, sep[, eq[, options]]])

- `str` `<string>` The URL query string to parse.
- `sep` `<string>` The substring used to delimit key and value pairs in the query string. <strong>Default</strong>: `'&'`.
- `eq` `<string>` The substring used to delimit keys and values in the query string. <strong>Default</strong>: '='.
- `options` `<Object>`
  - `decodeURIComponent` `<Function>` The function to use when decoding percent-encoded characters in the query string. Default: `unescape()`.

For example: 

```js
parse(null)
// => {}

parse('12342343')
// => {}

parse('a=1&b=2&c=3&d=&f=')
// => { a: '1', b: '2', c: '3', d: '', f: '' }

parse('&a=1&b=2&c=3&d=&f=')
// => { a: '1', b: '2', c: '3', d: '', f: '' }

parse('abcd1234&a=1&b=2&c=3&d=&f=')
// => { a: '1', b: '2', c: '3', d: '', f: '' }

parse('?a=1&a=2&a=3&d=&f=')
// => { a: ['1', '2', '3'], d: '', f: '' }

parse('https://www.npmjs.com/search?q=qs#hash')
// => { q: 'qs' }

```

### stringify(obj[, sep[, eq[, options]]])

- `obj` `<Object>` The object to serialize into a URL query string.
- `sep` `<string>` The substring used to delimit key and value pairs in the query string. <strong>Default</strong>: `'&'`.
- `eq` `<string>`. The substring used to delimit keys and values in the query string. <strong>Default</strong>: `'='`.
- options
  - `encodeURIComponent` `<Function>` The function to use when converting URL-unsafe characters to percent-encoding in the query string. <strong>Default</strong>: `escape()`.

The `stringify()` method produces a URL query string from a given obj by iterating through the object's "own properties".

For example: 

```js
stringify(null)
// => {}
    
stringify({ a: 1, b: null, c: undefined, d: NaN, e: '' })
// => 'a=1&b=&c=&d=&e='

stringify({ a: '', c: ['\'1\'', '2', '3', NaN, undefined], f: null, '': 'null' })
// => 'a=&c=%271%27&c=2&c=3&c=&c=&f='

stringify({ a: { key: 'value', 'key2': 'value2' }, d: undefined, f: '' })
// => 'a=%7B%22key%22%3A%22value%22%2C%22key2%22%3A%22value2%22%7D&d=&f='

stringify({ a: () => { } })
// => 'a=%28%29%20%3D%3E%20%7B%7D'

```

### prefix(str[, prefix])

The `prefix()` method is used for prefixing exclusive characters for a URL query string. <strong>Default</strong>: `'?'`.

For example: 

```js
prefix('a=1&b=2')
// => '?a=1&b=2'

prefix('a=1&b=2', '&')
// => '&a=1&b=2'

prefix('?a=1&b=2', '?')
// => '?a=1&b=2'

```
