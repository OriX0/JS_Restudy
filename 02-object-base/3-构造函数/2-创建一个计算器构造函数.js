/*
创建一个构造函数 Calculator，它创建的对象中有三个方法：

read() 使用 prompt 请求两个值并把它们记录在对象的属性中。
sum() 返回这些属性的总和。
mul() 返回这些属性的乘积。
*/

function Calculator() {
  this.read =function() {
    this.a=+prompt('input one number a',0);
    this.b=+prompt('input one number b',0);
  }
  this.sum = ()=>{
    return this.a+this.b;
  }
  this.mul=()=>{
    return this.a*this.b;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );