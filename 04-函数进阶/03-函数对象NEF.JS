/*修改 makeCounter() 代码，使得 counter 可以减一和赋值：

counter() 应该返回下一个数字（同以前逻辑）。
counter.set(value) 应该设置 count 为 value。
counter.decrease(value) 应该把 count 减 1。 */
function makeCounter () {
  let count = 0;
  // you code
  function counter () {
    return count++;
  }
  counter.set = value => count = value;
  counter.decrease = () => count--;
  return counter;
}
let counter = makeCounter();
alert(counter());//0
alert(counter());//1
counter.set(10);// set 
alert(counter()); //10
counter.decrease();// counter--
alert(counter());// 10 


/* 多个括号求值  */
function sum (a) {
  let currentSum = a;
  function f (b) {
    currentSum += b;
    return f;
  }
  f.toString = function () {
    alert(currentSum);
  }
  return f;
}
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15 
