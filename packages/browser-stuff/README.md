# browser-stuff
> A browser utilities package.

[![NPM version](https://img.shields.io/npm/v/browser-stuff.svg?style=flat)](https://npmjs.org/package/browser-stuff)
[![NPM Downloads](https://img.shields.io/npm/dm/browser-stuff.svg?style=flat)](https://npmjs.org/package/browser-stuff)
[![](https://data.jsdelivr.com/v1/package/npm/browser-stuff/badge)](https://www.jsdelivr.com/package/npm/browser-stuff)

---

## Installation

### Load `browser-stuff` via classical `<script>` tag

```html
<script src="https://cdn.jsdelivr.net/npm/browser-stuff/iife.min.js"></script>
<script>
  // window.browserStuff
  browserStuff.os
</script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/browser-stuff/defined.iife.min"></script>
<script>
  // window.browserStuffDefined
  browserStuffDefined.inBrowser
  browserStuffDefined.msie
  browserStuffDefined.supportsPushState
</script>
```

### CommonJS style with npm

```bash
npm install browser-stuff --save
```

```javascript

// es6
import { os } from 'browser-stuff';

// modularity
import os from 'browser-stuff/os';
import defined from 'browser-stuff/defined';
defined.inBrowser
defined.msie
defined.supportsPushState

// node
const { os } = require('browser-stuff');
// or
const os = require('browser-stuff/os');
const defined = require('browser-stuff/defined');
defined.inBrowser
defined.msie
defined.supportsPushState

```

## Example

  - [Jest]('tests')
