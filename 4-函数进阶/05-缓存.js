// 透明缓存  无对象类型
function slow (x) {
  // 这里可能会有重负载的CPU密集型工作
  alert(`Called with ${x}`);
  return x;
}
function cachingDecorator (func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  }

}

slow = cachingDecorator(slow);

alert(slow(1)); // slow(1) 被缓存起来了
alert("Again: " + slow(1)); // 一样的

alert(slow(2)); // slow(2) 被缓存起来了
alert("Again: " + slow(2)); // 也是一样


// 对象方法 缓存机制
let worker = {
  someMethod () {
    return 1;
  },

  slow (x) {
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator (func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // "this" 现在被正确的传递了
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // 现在让他缓存起来

alert(worker.slow(2)); // 生效了
alert(worker.slow(2)); // 生效了, 不会调用原始的函数了。被缓存起来了

// 对象方法多参数缓存
let worker = {
  slow (min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator (func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.apply(this, arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

function hash (args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5)); // works
alert("Again " + worker.slow(3, 5)); // same (cached)