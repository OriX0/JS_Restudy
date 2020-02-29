// 是否可以创建像 new A()==new B() 这样的函数 A 和 B？
// 为了实现 a=b 返回this肯定不行 所以应该传入一个obj 
let obj = {};

function A () {
  return obj;
}
function B () {
  return obj;
}
let a = new A;
let b = new B;
alert(a == b); // true

/* 创建一个构造函数 Calculator，它创建的对象中有三个方法：

read() 使用 prompt 请求两个值并把它们记录在对象的属性中。
sum() 返回这些属性的总和。
mul() 返回这些属性的乘积。*/
function Calculator () {
  this.read = function () {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

/* 创建一个构造函数 Accumulator(startingValue)。
它创建的对象应该：
将“当前 value”存储在属性 value 中。起始值被设置到构造函数的 startingValue 参数。
read() 方法应该使用 prompt 来读取一个新的数字，并将其添加到 value 中。
换句话说，value 属性是所有用户输入值与初始值 startingValue 的总和 */
function Accumulator (startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +(prompt("Type number", 0));
  };
}