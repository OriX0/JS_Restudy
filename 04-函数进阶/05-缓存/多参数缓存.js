/*
 * @Author: OriX
 * @Date: 2020-07-13 16:58:51
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-13 17:22:59
 * @FilePath: \JS_Restudy\04-函数进阶\05-缓存\多参数缓存.js
 */
let worker = {
  slow (min, max) {
    return min + max; // scary CPU-hogger is assumed
  }
};
function cachingDecorator (func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }
    let result = func.call(this, ...arguments);
    cache.set(key, result);
    return result;
  }

}
function hash () {
  return [].join.call(arguments);
}
// 应该记住相同参数的调用
worker.slow = cachingDecorator(worker.slow);