/*
 * @Description:
 * @Version: 1.0
 * @Author: OriX
 * @Date: 2020-11-19 14:12:43
 * @LastEditors: OriX
 * @LastEditTime: 2021-01-07 16:15:02
 * @Copyright (C) 2021 OriX. All rights reserved.
 */
//
function f() {
  alert('Hello!');
}
Function.prototype.defer = function (ms) {
  setTimeout(f, ms);
};
f.defer(1000); // 1 秒后显示 “Hello!”

/*添加方法 defer(ms) 到所有的函数原型，它返回一个包装函数，延迟 ms 毫秒调用函数。
这里是它应该如何执行的例子： */

function f(a, b) {
  alert(a + b);
}
Function.prototype.defer = function (ms) {
  let f = this;
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
};
f.defer(1000)(1, 2); // 1 秒钟后显示 3
