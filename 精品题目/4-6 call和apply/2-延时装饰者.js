/*
 * @Author: OriX
 * @Date: 2020-07-13 17:47:17
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-13 17:54:56
 * @FilePath: \JS_Restudy\精品题目\4-6 call和apply\2-延时装饰者.js
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
// 分别用箭头函数和非箭头函数实现