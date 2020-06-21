/*
创建一个构造函数 Accumulator(startingValue)。
它创建的对象应该：
将“当前 value”存储在属性 value 中。起始值被设置到构造器 startingValue 的参数。
read() 方法应该使用 prompt 来读取一个新的数字，并将其添加到 value 中。
换句话说，value 属性是所有用户输入值与初始值 startingValue 的总和。

*/

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read=()=>{
    let inputValue= +prompt('input one number',0);
    this.value+=inputValue;
  }
}