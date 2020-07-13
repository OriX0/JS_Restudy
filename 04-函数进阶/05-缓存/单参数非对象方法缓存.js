/*
 * @Author: OriX
 * @Date: 2020-07-13 16:58:33
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-13 17:01:44
 * @FilePath: \JS_Restudy\04-函数进阶\05-缓存\单参数非对象方法缓存.js
 */
// 实现对slow计算结果的缓存
function slow (x) {
  // 这里可能会有重负载的 CPU 密集型工作
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

alert(slow(1)); // slow(1) 被缓存下来了
alert("Again: " + slow(1)); // 一样的

alert(slow(2)); // slow(2) 被缓存下来了
alert("Again: " + slow(2)); // 和前面一行结果相同
