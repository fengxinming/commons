# properties-like

[![npm package](https://nodei.co/npm/properties-like.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/properties-like)

[![NPM version](https://img.shields.io/npm/v/properties-like.svg?style=flat)](https://npmjs.org/package/properties-like)
[![NPM Downloads](https://img.shields.io/npm/dm/properties-like.svg?style=flat)](https://npmjs.org/package/properties-like)
[![](https://data.jsdelivr.com/v1/package/npm/properties-like/badge)](https://www.jsdelivr.com/package/npm/properties-like)

> ### This module implements the Java [.properties specification](https://docs.oracle.com/javase/10/docs/api/java/util/Properties.html#load%28java.io.Reader%29)

---

## Installation

### CommonJS style with npm

```bash
npm install --save properties-like
```

In node env:

```js
const Properties = require('properties-like');
const props = new Properties(); // Properties.getProperties()
props.loadFrom('./jdbc.properties');
// or
props.load(fs.readFileSync('./jdbc.properties'));

```

In webpack env:

```js
{
  module: {
    rules: [{
      test: /\.properties$/,
      loader: 'properties-like/webpack-loader'
    }]
  }
}

```

### Load `properties-like` via classical `<script>` tag

```html
<script src="https://cdn.jsdelivr.net/npm/properties-like/umd.min.js"></script>
<script>
  var props = new Properties(); // Properties.getProperties()
  props.load('key=value\nkey2=value2');
  props.getProperty('key'); // ==> 'value'
  props.getProperty('key2'); // ==> 'value2'
</script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/properties-like/parse.umd.min.js"></script>
<script>
  var props = {};
  parseProperties('key=value\nkey2=value2', function(key, value) {
    props[key] = value;
  });
  console.log(props); // ==> { key: 'value', key2: 'value2' }
</script>
```

---

## API

### Instance Method Summary

实例方法

| Modifier and Type | Instance Methods | Description  |
| :------------- | :------------- | :----- |
| this | `clear()` | Clears this property list so that it contains no keys.<br />清空属性集合对象内的key和value。 |
| Properties | `clone()` | Creates a shallow copy of this property list.<br />浅克隆一个属性集合对象。 |
| Boolean | `containsKey​(key)`<br /><br />key: String | Tests if the specified object is a key in this property list.<br />检测是否包含指定key。 |
| Boolean | `containsValue​(value)`<br /><br />value: any | Returns true if this property list maps one or more keys to this value.<br />检测是否包含指定value。 |
| this | `forEach(callback)`<br /><br />callback: Function | Performs the given action for each entry in this map until all entries have been processed or the action throws an exception.<br />遍历属性集合，在回调函数中返回包含value和key的数组。 | 
| any | `get​(key [, defaultValue])`<br />`getProperty(key [, defaultValue])`<br /><br />key: String<br />defaultValue: any(optional) | Returns the value to which the specified key is mapped, or undefined if this map contains no mapping for the key.<br />根据指定的key返回对应的value，如果未匹配到就返回默认值或者undefined。 |
| Number | `getNumber(key [, defaultValue])`<br /><br />key: String<br />defaultValue: any(optional) | Returns the value to which the specified key is mapped, and convert it to Number.<br />根据指定的key返回对应的value，并转成数字。 |
| Number | `getBoolean(key [, defaultValue])`<br /><br />key: String<br />defaultValue: any(optional) | Returns the value to which the specified key is mapped, and convert it to Boolean.<br />根据指定的key返回对应的value，并转成bool值。 |
| Boolean | `isEmpty​()` | Tests if this property list maps no keys to values.<br />判断是否是空集合。 |
| Array\<String> | `keys​()`<br />`propertyNames()` | Returns an array of the keys in this property list.<br />返回所有的key |
| this | `load​(content)`<br /><br />content: String<br />transform: Function | Reads a property list (key and element pairs) from the content.<br />从字符串中提取出key和value。 |
| this | `loadFrom(filePath)`<br /><br />filePath: String<br />transform: Function | Loads all of the properties from a file.<br />从文件中提取出key和value。 |
| this | `put​(key, value)`<br />`set​(key, value)`<br />`setProperty​(key, value)`<br /><br />key: String<br />value: any | Maps the specified key to the specified value in this property list.<br />暂存key和value至属性集合。 |
| Number | `putAll​(t)`<br />`setProperties​(t)`<br /><br />t: Object \| Array | Copies all of the mappings from the specified map to this property list.<br />把数组或者对象浅拷贝至属性集合。 |
| Boolean | `remove​(key [, specifiedValue])`<br />`delete​(key [, specifiedValue])`<br /><br />key: String<br /> specifiedValue: any(optional) | Removes the entry for the specified key or even it is mapped to the specified value.<br />移除指定的key的映射或者也包含指定的value才被移除。 |
| Boolean | `replace​(key, newValue)`<br /><br />key: String<br /> newValue: any | Replaces the entry for the specified key only if it is currently mapped to some value.<br />替换已存在的指定的key的映射。 |
| Number | `size​()` | Returns the number of keys in this property list.<br />属性集合内key的数量 |
| this | `store​(filePath [, fsOptions])`<br /><br />filePath: String<br /> fsOptions: Object | Writes this property list (key and element pairs) in this Properties table to a file.<br />把key&value写入文件 |
| Array | `values​()` | Returns a Array of the values contained in this map.<br />返回所有的value |

### Static Method Summary

静态方法

| Modifier and Type | Static Method | Description  |
| :------------- | :------------- | :----- |
| void | parse(inCharBuf, callback)<br /><br /> inCharBuf: String \| Array<br />callback: Function | Try to parse out key and element pairs from a given String/Array<br/>尝试从字符串中解析出key和value |         

---

## Usage

#### Create a test.properties file

```
# backslash
jdbc.mysql.driver     = com.mysql.jdbc.Driver
jdbc.mysql.url        = jdbc\:mysql\://localhost\:3306/test?useUnicode\=true&characterEncoding\=gbk
jdbc .mysql\ .username= test\
123456789
jdbc\:mysql.password   = ~\ !@#$%^&*
jdbc.mysql\=maxActive  = \ \ 50\ 

# Unicode
username=\u7528 \u6237 \u540d
\u8d26 \u53f7=test123
\u6635 \u79f0=\u540a \u70b8 \u5929
p

int=1
bool=true

```

#### Read and parse the file

```javascript
const Properties = require('properties-like');
const props = new Properties();
props.loadFrom('./test.properties');

props.get('jdbc.mysql.driver'); // ==> 'com.mysql.jdbc.Driver'
props.getProperty('jdbc.mysql.driver     '); // ==> undefined
props.getProperty('jdbc.mysql.url'); // ==> 'jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=gbk'
props.getProperty('jdbc.mysql .username'); // ==> 'test123456789'
props.getProperty('jdbc:mysql.password'); // ==> '~ !@#$%^&*'
props.getProperty('jdbc.mysql=maxActive'); // ==> '  50 '
props.getProperty('username'); // ==> '用户名'
props.getProperty('账号'); // ==> 'test123'
props.getProperty('昵称'); // ==> '吊炸天'
props.getProperty('p'); // ==> ''
props.getNumber('int'); // ==> 1
props.getBoolean('bool'); // ==> true

props.forEach((value, key) => {

});

for (let [value, key, index] of props) {

}

```

---

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 9 ✔ |
