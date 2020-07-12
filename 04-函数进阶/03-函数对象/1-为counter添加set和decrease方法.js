/*
 * @Author: OriX
 * @Date: 2020-07-12 22:54:03
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-12 23:02:34
 * @FilePath: \JS_Restudy\04-函数进阶\03-函数对象\1-为counter添加set和decrease方法.js
 */
/* 修改 makeCounter() 代码，使得 counter 可以进行减一和设置值的操作：
counter() 应该返回下一个数字（与之前的逻辑相同）。
counter.set(value) 应该将 count 设置为 value。
counter.decrease(value) 应该把 count 减 1。 */

function makeCounter () {
  let count = 0;
  function counter () {
    return count++;
  }
  counter.set = value => count = value;
  counter.decrease = () => count--;
  return counter;
}



let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

counter.set(10); // set the new count

alert(counter()); // 10

counter.decrease(); // decrease the count by 1

alert(counter()); // 10 (instead of 11)