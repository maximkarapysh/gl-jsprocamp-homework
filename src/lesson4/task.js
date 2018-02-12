/*
  Write a function that creates custom set object. Function
  accepts single optional parameter (array) do define initial
  set content.
  Set should have add(), has(), delete(), forEach(), clear() methods
  and size property. Should not use es6 objects Set, WeakSet,
  but work in similar way. Set should preserve addition order
  in forEach() method.
  mySet = createSet(['a', 'b', 'c'])
*/

class CustomSet {
  constructor(arr = []) {
    this.value = arr;
  }

  get size() {
    return this.value.length;
  }

  add(item) {
    return this.has(item) ? this.value : this.value.push(item);
  }

  clear() {
    return this.value = [];
  }

  has(item) {
    return this.value.includes(item);
  }

  ['delete'](item) {
    if (this.has(item)) {
      this.value = this.value.filter(currentVal => currentVal != item);
      return true;
    } else {
      return false;
    }
  }

  forEach(cb, thisArg = this) {
    thisArg.value.forEach((value, index, array) => {
      cb(value, value, array);
    });
  }
}

export function createSet(arr) {
  return new CustomSet(arr);
}

/*
  Write a function that creates custom map object. Function
  accepts single optional parameter (array) do define initial
  map content.
  Map should have set(), get(), has(), delete(), forEach(), clear()
  methods and size property. Should not use es6 objects Map, WeakMap,
  but work in similar way. Map should preserve addition order
  in forEach() method.
  myMap = createMap([['a', 1], ['b', 2], ['c', 3]])
*/


class CustomMap {
  constructor(arr = []) {
    this.value = arr;
  }

  get size() {
    return this.value.length;
  }

  set(key, value) {
    if (this.has(key)) {
      this.value.forEach(item => {
        if (item.includes(key)) {
          item[1] = value;
        };
      });
      return this.value;
    } else {
      return this.value.push([key, value]);
    }
  }

  clear() {
    return this.value = [];
  }

  has(key) {
    return this.value.some(item => item.includes(key));
  }

  get(key) {
    let result = this.value.find(item => item[0] === key);
    return result ? result[1] : false;
  }

  ['delete'](key) {
    if (this.has(key)) {
      this.value = this.value.filter(item => !(item[0] === key));
      return true;
    }
    return false;

  }

  forEach(cb, thisArg = this) {
    thisArg.value.forEach((element, index, arr) => {
      let [key, value] = element;
      cb(value, key, arr);
    })
  }
}

export function createMap(arr) {
  return new CustomMap(arr);
}

export default {
  createSet,
  createMap
};
