# LinkedMap
> LinkedMap

[![NPM version](https://img.shields.io/npm/v/js-linkedmap.svg?style=flat)](https://npmjs.org/package/js-linkedmap)
[![NPM Downloads](https://img.shields.io/npm/dm/js-linkedmap.svg?style=flat)](https://npmjs.org/package/js-linkedmap)
[![](https://data.jsdelivr.com/v1/package/npm/js-linkedmap/badge)](https://www.jsdelivr.com/package/npm/js-linkedmap)

## [中文文档](README.zh-CN.md)

---

## Installation

### Load `linkedmap` via classical `<script>` tag

```html
<script src="https://cdn.jsdelivr.net/npm/linkedmap/iife.min.js"></script>
<script>
  // window.LinkedMap
  var map = new LinkedMap();
</script>
```

### CommonJS style with npm

```bash
npm install linkedmap --save
```

```javascript

// es6
import LinkedMap from 'linkedmap';

// node
const LinkedMap = require('linkedmap');

```

## API

### clear

Removes all of the mappings from this map (optional operation).

- clear()

### clone

Returns a shallow copy of this HashMap instance: the keys and values themselves are not cloned.

- clone()

- Returns
  - `<LinkedMap>`

### containsKey​

Returns true if this map contains a mapping for the specified key.

- containsKey​(key)
  - `key`: `<String>`

- Returns
  - `<Boolean>`

### containsValue​

Returns true if this map maps one or more keys to the specified value.

- containsValue​(value)
  - `value`: `<any>`

- Returns
  - `<Boolean>`

### forEach

Performs the given action for each entry in this map until all entries have been processed or the action throws an exception.

- forEach(callback)
  - `callback`: `<Function>`

- Returns
  - this

### get​

Returns the value to which the specified key is mapped, or defaultValue if this map contains no mapping for the key.

- get​(key[, defaultValue])
  - `key` `<String|Number|Boolean>`
  - `defaultValue` `<any>` Optional

- Returns
  - `<any>`

### isEmpty​

Returns true if this map contains no key-value mappings.

- isEmpty​()

- Returns
  - `<Boolean>`

### keys​

Returns a Array of the keys contained in this map, or performs the given action for each key in this map.

- keys​([callback])
  - `callback`: `<Function>` Optional，performs the given action for each key

- Returns
  - `Array<String>` Returns a Set view of the keys contained in this map

### put​

Associates the specified value with the specified key in this map (optional operation).

- put​(key, value)
  - `key` `<String|Number|Boolean>`
  - `value` `<any>`

- Returns
  - `<any>`

### putAll​

Copies all of the mappings from the specified map to this map (optional operation).

- putAll​(value)
  - `value` `<Object|Array>`

- Returns
  - this

### remove​

Removes the entry for the specified key only if it is currently mapped to the specified value.

- remove​(key[, specifiedValue])
  - `key` `<String|Number|Boolean>`
  - `specifiedValue` `<any>` Optional

- Returns
  - `<Boolean>` `true` or `false`

### replace​

- replace​(key, newValue) (Replaces the entry for the specified key only if it is currently mapped to some value.)
  - `key` `<String|Number|Boolean>`
  - `newValue` `<any>`

- replace​(key, oldValue, newValue) (Replaces the entry for the specified key only if currently mapped to the specified value.)
  - `key` `<String|Number|Boolean>`
  - `oldValue` `<any>`
  - `newValue` `<any>`

- Returns
  - `<Boolean>` `true` or `false`

### size

Returns the number of key-value mappings in this map.

- size()

- Returns
  - `<Number>`

### toString

- toString()

- Returns
  - `<String>` `'[object LinkedMap]'`

### values

Returns a Array of the values contained in this map, or performs the given action for each value in this map.

- values(callback)
  - `callback`: `<Function>` Optional，performs the given action for value

- Returns
  - `Array<String>` Returns a Array of the values contained in this map

### keySet

Alias of the `keys` method

### set

Alias of the `put` method

### delete

Alias of the `remove` method

## Usage

```js
const map = new LinkedMap();
map.put('key', 'value');

map.putAll({
  key2: 'value2',
  key3: 'value3'
});
map.putAll([
  ['key4', 'value4'],
  ['key5', 'value5']
]);

map.forEach((value, key) => {
  
});

for (let [key, value, index] of map) {
  
}

```
