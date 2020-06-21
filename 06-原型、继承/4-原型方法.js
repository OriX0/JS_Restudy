/*有一个对象 dictionary，通过 Object.create(null) 创建，用来存储任意键值对。
为该对象添加方法 dictionary.toString()，返回所有键的列表，用逗号隔开。
你的 toString 方法不能对该对象使用 for...in。即实现不可枚举
以下是它的运行例子：*/

let dictionary = Object.create(null);
// 添加 dictionary.toString 方法的代码
Object.defineProperty(dictionary, "toString",
  {
    //取值的是一个函数
    value () { // value 是一个函数
      return Object.keys(this).join();
    }
  });

/*  创建的时候直接加
let dictionary = Object.create(null, {
    toString: { // 定义 toString 方法
      value() { // value 是一个函数
        return Object.keys(this).join();
      }
    }
  });*/
// 添加一些数据
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ 在这里是正常参数

// 只有 apple 和 __proto__ 在循环内
for (let key in dictionary) {
  alert(key); // "apple"，然后 "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"

//
//让我们创建一个新的 rabbit 对象：

function Rabbit (name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
//以下调用得到的结果是否相同？

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); //undefined
Object.getPrototypeOf(rabbit).sayHi();//undefined
rabbit.__proto__.sayHi(); //undefined