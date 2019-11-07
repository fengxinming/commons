import isArrayLike from 'celia/isArrayLike';
import _forEach from 'celia/_forEach';
import forOwn from 'celia/forOwn';
import append from 'celia/_append';
import alias from 'celia/alias';

class LinkedMap {

  constructor(iterator) {
    this
      .clear()
      .putAll(iterator);
  }

  _clone(copy) {
    copy._link = this._link.slice(0);

    const copyMap = Object.create(null);
    forOwn(this._map, (val, key) => {
      copyMap[key] = val;
    });
    copy._map = copyMap;
    return copy;
  }

  /**
   * 自定义扩展获取 hash 值的方法
   * @param {any} key
   */
  _getHash(key) {
    return String(key);
  }

  clear() {
    this._link = [];
    this._map = Object.create(null);
    return this;
  }

  clone() {
    return this._clone(new LinkedMap());
  }

  containsKey(key) {
    return (key in this._map);
  }

  containsValue(value) {
    const { _link, _map } = this;
    return _link.some(key => _map[key] === value);
  }

  forEach(callback) {
    const { _link, _map } = this;
    _forEach(_link, (key) => {
      return callback(_map[key], key);
    });
    return this;
  }

  get(key, defaultValue) {
    key = this._getHash(key);
    const value = this._map[key];
    return value === undefined
      ? defaultValue
      : value;
  }

  isEmpty() {
    return this._link.length === 0;
  }

  keys(callback) {
    return callback
      ? _forEach(this._link, callback)
      : this._link.slice(0);
  }

  put(key, value) {
    key = this._getHash(key);
    const { _link, _map } = this;
    !(key in _map) && append(_link, key);
    _map[key] = value;
    return this;
  }

  putAll(iterator) {
    let i = 0;

    isArrayLike(iterator)
      ? _forEach(iterator, ([key, value]) => {
        this.put(key, value);
        i++;
      })
      : forOwn(iterator, (value, key) => {
        this.put(key, value);
        i++;
      });
    return i;
  }

  remove(key, specifiedValue) {
    const len = arguments.length;
    let result = false;
    const map = this._map;

    switch (len) {
      case 1:
        key = this._getHash(key);
        if (key in map) {
          delete map[key];
          result = true;
        }
        break;
      case 2:
        key = this._getHash(key);
        if ((key in map) && map[key] === specifiedValue) {
          delete map[key];
          result = true;
        }
        break;
      default:
        return false;
    }

    // 联动删除下标集合
    if (result) {
      const { _link } = this;
      _link.splice(_link.indexOf(key), 1);
    }
    return result;
  }

  replace(key, oldValue, newValue) {
    const len = arguments.length;
    const map = this._map;

    switch (len) {
      case 2:
        key = this._getHash(key);
        if ((key in map)) {
          map[key] = oldValue;
          return true;
        }
        break;
      case 3:
        key = this._getHash(key);
        if ((key in map) && map[key] === oldValue) {
          map[key] = newValue;
          return true;
        }
        break;
    }

    return false;
  }

  size() {
    return this._link.length;
  }

  toString() {
    return '[object LinkedMap]';
  }

  values(callback) {
    const { _link, _map } = this;
    return callback
      ? _forEach(_link, (key, i) => {
        return callback(_map[key], i);
      })
      : _link.map(key => _map[key]);
  }

}

const proto = LinkedMap.prototype;

if (Symbol && Symbol.iterator) {
  proto[Symbol.iterator] = function () {
    const { _link, _map } = this;
    let i = 0;
    const len = _link.length;
    return {
      next() {
        const key = _link[i];
        return { value: [key, _map[key], i], done: ++i > len };
      }
    };
  };
}

alias(proto, {
  keys: 'keySet',
  put: 'set',
  remove: 'delete'
});

export default LinkedMap;
