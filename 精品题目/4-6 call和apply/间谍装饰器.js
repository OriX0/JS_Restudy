/*
 * @Author: OriX
 * @Date: 2020-07-13 17:46:27
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-13 17:46:52
 * @FilePath: \JS_Restudy\精品题目\4-6 call和apply\间谍装饰器.js
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
// 分别用 call 和apply实现