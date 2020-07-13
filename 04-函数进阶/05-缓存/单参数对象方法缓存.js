/*
 * @Author: OriX
 * @Date: 2020-07-13 16:58:43
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-13 17:13:50
 * @FilePath: \JS_Restudy\04-函数进阶\05-缓存\单参数对象方法缓存.js
 */
// 实现对对象方法的缓存
let worker = {
  someMethod () {
    return 1;
  },

  slow (x) {
    // 可怕的 CPU 过载任务
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
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  }
}
worker.slow = cachingDecorator(worker.slow);
alert(worker.slow(2));
alert(worker.slow(2)); 