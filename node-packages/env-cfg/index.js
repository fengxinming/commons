'use strict';

const { readdirSync, statSync, readFileSync, existsSync } = require('fs');
const { join } = require('path');
const { relative } = require('kyla/path');
const Properties = require('kick-prop');
const merge = require('lodash.merge');
const { forEach } = require('celia');

function loadFile(filePath) {
  let config;
  if (existsSync(filePath)) {
    if (filePath.endsWith('.config.js')) {
      config = require(filePath);
    } else if (filePath.endsWith('.json')) {
      config = JSON.parse(readFileSync(filePath).toString());
    } else if (filePath.endsWith('.properties')) {
      const prop = new Properties();
      prop.loadFileSync(filePath);
      config = prop.cache;
    }
  }
  return config;
}

function matches(dir, filename) {
  let config;
  forEach(['.config.js', '.json', '.properties'], (extname) => {
    config = loadFile(join(dir, filename + extname));
    return !config;
  });
  return config;
}

class Configuration {

  constructor(options) {
    const {
      dir,
      env = 'development',
      filter,
      deep
    } = options;
    if (!dir) {
      throw new TypeError('option "dir" could not be found');
    }

    const cache = this.cache = {};

    const absDir = relative(dir);
    let modules = readdirSync(absDir);
    if (typeof filter === 'function') {
      modules = modules.filter(filter);
    }
    modules.forEach((file) => {
      const absFilePath = join(absDir, file);
      const stats = statSync(absFilePath);

      if (stats.isDirectory()) {
        // 找到默认配置
        let defaults = matches(absFilePath, 'default');

        // 按照环境变量找配置
        let config = matches(absFilePath, env);
        cache[file] = (deep ? merge : Object.assign)({}, defaults, config);
      } else {
        let config = loadFile(absFilePath);
        if (config) {
          const filename = file.replace(/\.config\.js|\.json|\.properties$/, '');
          cache[filename] = config;
        }
      }
    });
  }

  /**
   * 获取conf目录下的配置信息
   * @param {String} name
   */
  get(name) {
    return name ? this.cache[name] : this.cache;
  }

}

module.exports = Configuration;
