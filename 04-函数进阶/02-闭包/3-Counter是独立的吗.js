/*
 * @Author: OriX
 * @Date: 2020-07-04 22:46:34
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-04 22:48:03
 * @FilePath: \JS_Restudy\04-函数进阶\02-闭包\3-Counter是独立的吗.js
 */
function makeCounter () {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); //0
alert(counter2()); // 1
/*
每一次makeCounter返回的都是新的词法作用域


*/
