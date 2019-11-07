# LinkedMap
> LinkedMap

[![NPM version](https://img.shields.io/npm/v/js-linkedmap.svg?style=flat)](https://npmjs.org/package/js-linkedmap)
[![NPM Downloads](https://img.shields.io/npm/dm/js-linkedmap.svg?style=flat)](https://npmjs.org/package/js-linkedmap)
[![](https://data.jsdelivr.com/v1/package/npm/js-linkedmap/badge)](https://www.jsdelivr.com/package/npm/js-linkedmap)

## [English Documentation](README.md)

---

## 安装

### `<script>` 方式加载

```html
<script src="https://cdn.jsdelivr.net/npm/linkedmap/iife.min.js"></script>
<script>
  // window.LinkedMap
  var map = new LinkedMap();
</script>
```

### CommonJS 方式引入

```bash
npm install linkedmap --save
```

```javascript

// es6
import LinkedMap from 'linkedmap';

// node
const LinkedMap = require('linkedmap');

```

## API方法

### clear

清空属性集合对象内的key和value。

- clear()

### clone

浅克隆一个属性集合对象。

- clone()

- Returns
  - `<LinkedMap>`

### containsKey​

检测是否包含指定key。

- containsKey​(key)
  - `key`: `<String>`

- Returns
  - `<Boolean>`

### containsValue​

检测是否包含指定value。

- containsValue​(value)
  - `value`: `<any>`

- Returns
  - `<Boolean>`

### forEach

遍历属性集合，在回调函数中返回包含value和key的数组。

- forEach(callback)
  - `callback`: `<Function>`

- Returns
  - this

### get​

根据指定的key返回对应的value，如果未匹配到就返回默认值或者undefined。

- get​(key[, defaultValue])
  - `key` `<String|Number|Boolean>`
  - `defaultValue` `<any>` 可选项

- Returns
  - `<any>`

### isEmpty​

判断是否是空集合。

- isEmpty​()

- Returns
  - `<Boolean>`

### keys​

遍历或返回所有的key

- keys​([callback])
  - `callback`: `<Function>` 可选项，遍历所有的key

- Returns
  - `Array<String>` 如果不传入回调函数，就直接返回所有的key

### put​

暂存key和value至属性集合。

- put​(key, value)
  - `key` `<String|Number|Boolean>`
  - `value` `<any>`

- Returns
  - `<any>`

### putAll​

把数组或者对象浅拷贝至属性集合。

- putAll​(value)
  - `value` `<Object|Array>`

- Returns
  - this

### remove​

移除指定的key的映射或者也包含指定的value才被移除。

- remove​(key[, specifiedValue])
  - `key` `<String|Number|Boolean>`
  - `specifiedValue` `<any>` 可选项

- Returns
  - `<Boolean>` 是否被移除

### replace​

替换已存在的指定的key的映射。

- replace​(key, newValue)
  - `key` `<String|Number|Boolean>`
  - `newValue` `<any>`

- replace​(key, oldValue, newValue)
  - `key` `<String|Number|Boolean>`
  - `oldValue` `<any>` 匹配key和value之后才能被替换
  - `newValue` `<any>`

- Returns
  - `<Boolean>` 是否被替换

### size

属性集合内key的数量

- size()

- Returns
  - `<Number>`

### toString

- toString()

- Returns
  - `<String>` `'[object LinkedMap]'`

### values

遍历或返回所有的value

- values([callback])
  - `callback`: `<Function>` 可选项，遍历所有的value

- Returns
  - `Array<String>` 如果不传入回调函数，就直接返回所有的value

### keySet

`keys` 方法的别名

### set

`put` 方法的别名

### delete

`remove` 方法的别名

## 使用

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
