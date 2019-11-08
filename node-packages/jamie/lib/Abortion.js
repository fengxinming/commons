'use strict';

const { isObject } = require('celia');

class Abortion {

  constructor() {
    this.queue = new Map();
  }

  abort(anything) {
    const { queue } = this;
    if (!anything) {
      anything = { message: 'A request connection has been aborted' };
    } else if (!isObject(anything)) {
      anything = { message: anything };
    }
    queue.forEach(fn => fn(anything));
    return this.clear();
  }

  set(key, fn) {
    this.queue.set(key, fn);
    return this;
  }

  remove(key) {
    this.queue.delete(key);
    return this;
  }

  clear() {
    this.queue.clear();
    return this;
  }

}

module.exports = Abortion;
