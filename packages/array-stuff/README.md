# celia.array

[![npm package](https://nodei.co/npm/celia.array.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/celia.array)

> Note:  A modern JavaScript Array utility library delivering modularity, performance, and extras.

---

[![NPM version](https://img.shields.io/npm/v/celia.array.svg?style=flat)](https://npmjs.org/package/celia.array) 
[![NPM Downloads](https://img.shields.io/npm/dm/celia.array.svg?style=flat)](https://npmjs.org/package/celia.array)
[![](https://data.jsdelivr.com/v1/package/npm/celia.array/badge)](https://www.jsdelivr.com/package/npm/celia.array)

---

## Table of contents

  - [Installation](#Installation)
  - [Usage](#Usage)
    - [API](#API)

---

## Installation

### Load `celia.array` via classical `<script>` tag

```html
<script src="https://cdn.jsdelivr.net/npm/celia.array/iife.min.js"></script>
<script>
  // window.celiaArray
  celiaArray.append
  celiaArray.binarySearch
  celiaArray.bubbleSort
  celiaArray.combine
  celiaArray.flatten
  celiaArray.flattenDeep
  celiaArray.forEach
  celiaArray.forSlice
  celiaArray.grep
  celiaArray.includes
  celiaArray.indexOf
  celiaArray.mapFilter
  celiaArray.remove
  celiaArray.removeAt
  celiaArray.removeDuplicates
  celiaArray.removeSortedDuplicates
  celiaArray.rotate
  celiaArray.toArray
  celiaArray.twoSum
</script>
```

### CommonJS style with npm

```bash
npm install celia.array --save
```

```javascript

// es6
import { append, binarySearch, bubbleSort, combine, flatten, flattenDeep, forEach, forSlice, grep, includes, indexOf, mapFilter, remove, removeAt, removeDuplicates, removeSortedDuplicates, rotate, toArray, twoSum } from 'celia.array';
import { append, binarySearch, bubbleSort, combine, flatten, flattenDeep, forEach, forSlice, grep, includes, indexOf, mapFilter, remove, removeAt, removeDuplicates, removeSortedDuplicates, rotate, toArray, twoSum } from 'celia.array/es';

// modularity
import binarySearch from 'celia.array/es/binarySearch';
import combine from 'celia.array/es/combine';
import flatten from 'celia.array/es/flatten';
import forSlice from 'celia.array/es/forSlice';
import remove from 'celia.array/es/remove';
import removeDuplicates from 'celia.array/es/removeDuplicates';
// ...
// ...

// node
const { append, binarySearch, bubbleSort, combine, flatten, flattenDeep, forEach, forSlice, grep, includes, indexOf, mapFilter, remove, removeAt, removeDuplicates, removeSortedDuplicates, rotate, toArray, twoSum } = require('celia.array');
// or
import binarySearch from 'celia.array/binarySearch';
import combine from 'celia.array/combine';
import flatten from 'celia.array/flatten';
import forSlice from 'celia.array/forSlice';
import remove from 'celia.array/remove';
import removeDuplicates from 'celia.array/removeDuplicates';
// ...
// ...

```

## Usage

### API

  - append
  - binarySearch
  - bubbleSort
  - combine
  - flatten
  - flattenDeep
  - forEach
  - forSlice
  - grep
  - includes
  - indexOf
  - mapFilter
  - remove
  - removeAt
  - removeDuplicates
  - removeSortedDuplicates
  - rotate
  - toArray
  - twoSum
