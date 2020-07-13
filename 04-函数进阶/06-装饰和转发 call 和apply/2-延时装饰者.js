/*
 * @Author: OriX
 * @Date: 2020-07-13 17:47:17
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-13 18:04:02
 * @FilePath: \JS_Restudy\04-函数进阶\06-装饰和转发 call 和apply\2-延时装饰者.js
 */

/* 创建一个装饰者 delay(f, ms)，该装饰者将 f 的每次调用延时 ms 毫秒。
例如：
换句话说，delay(f, ms) 返回的是延迟 ms 后的 f 的变体。
在上面的代码中，f 是单个参数的函数，但是你的解决方案应该传递所有参数和上下文 this。 */
function f (x) {
  console.log(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // 在 1000ms 后显示 "test"
f1500("test"); // 在 1500ms 后显示 "test"
// 箭头函数
function delay (f, ms) {
  return function () {
    setTimeout(() => { f.apply(this, arguments) }, ms)
  }
}
// 非箭头函数
function delayNoArrow (f, ms) {
  return function (...args) {
    let thisSaved = this;
    setTimeout(function () {
      f.apply(thisSaved, args);
    }, ms)
  }
}