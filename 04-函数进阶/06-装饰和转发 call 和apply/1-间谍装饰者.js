/*
 * @Author: OriX
 * @Date: 2020-07-13 17:28:14
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-13 17:45:56
 * @FilePath: \JS_Restudy\04-函数进阶\06-装饰和转发 call 和apply\1-间谍装饰者.js
 */
/* 创建一个装饰者 spy(func)，
它应该返回一个包装器，该包装器将所有对函数的调用保存在其 calls 属性中。
每个调用都保存为一个参数数组。
P.S. 该装饰者有时对于单元测试很有用。它的高级形式是 Sinon.JS 库中的 sinon.spy。
例如： */

function work (a, b) {
  console.log(a + b); // work 是一个任意的函数或方法
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
// call 实现
function spyCall (func) {
  function decorator () {
    decorator.calls.push(Array.from(arguments))
    return func.call(this, ...arguments);
  }
  decorator.calls = [];
  return decorator;
}
// apply 实现
function spyApply (func) {

  function wrapper (...args) {
    console.log("wrapper -> args", args)
    console.log("arguments", ...arguments);
    // using ...args instead of arguments to store "real" array in wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}