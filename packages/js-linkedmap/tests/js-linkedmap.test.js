import LinkedMap from '../src/index';

describe('测试 LinkedMap', () => {
  const map = new LinkedMap();

  it('测试暂存数据', () => {
    map.put('key', 'value');
    map.putAll({
      key2: 'value2',
      key3: 'value3'
    });
    map.putAll([
      ['key4', 'value4'],
      ['key5', 'value5']
    ]);
  });

  it('检测集合', () => {
    expect(map.containsKey('key')).toBe(true);
    expect(map.containsKey('key 2')).toBe(false);

    expect(map.containsValue('value')).toBe(true);
    expect(map.containsValue('value 2')).toBe(false);

    expect(map.isEmpty()).toBe(false);
    expect(map + '').toBe('[object LinkedMap]');
  });

  it('测试遍历', () => {
    expect(map.keys().length).toBe(map.values().length);
    let i = map.size();
    map.forEach(() => {
      i--;
    });
    expect(i).toBe(0);

    const keys = map.keys();
    const values = map.values();
    expect(values.length).toBe(keys.length);

    const keys2 = [];
    const values2 = [];
    map.keys((key) => {
      keys2.push(key);
    });
    map.values((val) => {
      values2.push(val);
    });
    expect(keys).toEqual(keys2);
    expect(values).toEqual(values2);

    const clone = map.clone();
    expect(clone.size()).toBe(map.size());
    clone.forEach((value, key) => {
      expect(value).toBe(map.get(key));
    });

    const keys3 = [];
    const values3 = [];
    for (let [k, v, index] of map) {
      expect(k).not.toBe(undefined);
      expect(v).toBe(map.get(k));
      expect(index < map.size()).toBe(true);
      keys3.push(k);
      values3.push(v);
    }
    expect(keys).toEqual(keys3);
    expect(values).toEqual(values3);
  });

  it('测试操作', () => {
    expect(map.get('key4')).toBe('value4');
    expect(map.get('key6', 'value4')).toBe('value4');

    expect(map.replace('key', 'newKey')).toBe(true);
    expect(map.replace('key', '123', 'newKey')).toBe(false);
    expect(map.replace('key5', 'value5', 'newvalue5')).toBe(true);
    expect(map.replace('key 2', 'newValue2')).toBe(false);

    expect(map.remove('key')).toBe(true);
    expect(map.remove('key ')).toBe(false);
    expect(map.remove('key2', 'value2')).toBe(true);
    expect(map.remove('key ', 'value ')).toBe(false);
    expect(map.remove()).toBe(false);

    expect(map.clear().size()).toBe(0);
  });

});
