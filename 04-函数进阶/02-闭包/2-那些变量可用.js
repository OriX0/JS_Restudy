/*
 * @Author: OriX
 * @Date: 2020-07-04 22:43:58
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-04 22:46:21
 * @FilePath: \JS_Restudy\04-函数进阶\02-闭包\2-那些变量可用.js
 */
/* 下面的 makeWorker 函数创建了另一个函数并返回该函数。可以在其他地方调用这个新函数。
它是否可以从它被创建的位置或调用位置（或两者）访问外部变量？
会显示哪个值？“Pete” 还是 “John”？ */

function makeWorker () {
  let name = "Pete";

  return function () {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // 会显示什么？
/*
显示Pete
work在其被创建的位置通过外部词法环境引用获取 name
*/
