let user = {
  name: "John",
  go: function () { alert(this.name) }
}// 错误 这里少了分号

  (user.go)()

//
let obj, method;

obj = {
  go: function () { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();
// (3) undefined 前面只是单纯的  变量method = obj.go（这个函数）
// 非获取其引用  故 为undefind method=obj.go  method()

(obj.go || obj.stop)();
// (4) undefined 同3


// 
function makeUser () {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert(user.ref.name); // 结果是什么？
// this只在调用的时候 进行赋值  调用时为函数 this为undefind undefind.name等于error

/*创建一个有三个方法的 calculator 对象：

read() 提示输入两个值，并将其保存为对象属性。
sum() 返回保存的值的和。
mul() 将保存的值相乘并返回计算结果。*/
let calculator = {
  read () {
    this.a = +prompt("The first value", 0);
    this.b = +prompt("The second value", 0);
  },
  sum () {
    return this.a + this.b;
  },
  mul () {
    return this.a * this.b;
  }
}