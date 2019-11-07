import fs from 'fs';
import Properties from '../src/index';

const { join } = require('path');
const filePath = join(__dirname, 'test.properties');

describe('测试资源文件解析', () => {
  const props = new Properties();
  const prop2 = Properties.getProperties();

  it('加载内容', () => {
    prop2.load(fs.readFileSync(filePath, 'utf8'));
    props.loadFrom(filePath);
  });

  it('读取数据', () => {
    expect(props.get('jdbc.mysql.driver')).toBe('com.mysql.jdbc.Driver');
    expect(props.get('jdbc.mysql.driver', 'name')).toBe('com.mysql.jdbc.Driver');
    expect(props.getProperty('unknownKey')).toBe(undefined);
    expect(props.getProperty('unknownKey', 'key')).toBe('key');
    expect(props.getProperty('jdbc.mysql .username')).toBe('test123456789');
    expect(props.getNumber('int')).toBe(1);
    expect(props.getNumber('int2')).toBe(NaN);
    expect(props.getNumber('int2', 2)).toBe(2);
    expect(props.getNumber('float')).toBe(3.1415926);
    expect(props.getBoolean('false')).toBe(false);
    expect(props.getBoolean('false2')).toBe(false);
    expect(props.getBoolean('bool')).toBe(true);
    expect(props.getBoolean('true2', false)).toBe(false);

    let i = props.size();
    props.forEach(() => {
      i--;
    });
    expect(i).toBe(0);

    const keys = props.keys();
    const values = props.values();
    expect(values.length).toBe(keys.length);

    const clone = props.clone();
    expect(clone.size()).toBe(props.size());
    clone.forEach((value, key) => {
      expect(value).toBe(props.get(key));
    });

    for (const [key, value, index] of clone) {
      expect(value).toBe(props.get(key));
      expect(index < clone.size()).toBe(true);
    }
  });

  it('检测集合', () => {
    expect(props.containsKey('jdbc.mysql=maxActive')).toBe(true);
    expect(props.containsKey('账 号')).toBe(false);

    expect(props.containsValue('用户名')).toBe(true);
    expect(props.containsValue('50')).toBe(false);

    expect(props.isEmpty()).toBe(false);
    expect(props + '').toBe('[object Properties]');
  });

  it('操作集合', () => {
    props.setProperty('newKey', 'newValue');
    props.put(null, 'newValue');
    props.put({}, '{}');
    expect(props.get(null)).toBe('newValue');
    expect(props.get('newKey')).toBe('newValue');

    expect(props.replace('newKey', 'newValue2')).toBe(true);
    expect(props.replace('newKey2', 'newValue2')).toBe(false);

    expect(props.putAll({ newKey2: 'newValue123' })).toBe(1);
    expect(props.putAll([['newKey3', 'newValue3'], ['newKey4', 'newValue4']])).toBe(2);

    expect(props.remove('jdbc.mysql .username')).toBe(true);
    expect(props.get('jdbc.mysql .username')).toBe(undefined);

    expect(props.remove('jdbc.mysql.username')).toBe(false);
    expect(props.remove(null)).toBe(true);
    expect(props.remove()).toBe(false);
    expect(props.remove('jdbc.mysql.driver', '123')).toBe(false);
    expect(props.remove('jdbc .mysql.driver', '123')).toBe(false);
    expect(props.remove('newKey3', 'newValue3')).toBe(true);

    props.clear();
    expect(props.size()).toBe(0);
    expect(props.keys().length).toBe(0);
  });
});
