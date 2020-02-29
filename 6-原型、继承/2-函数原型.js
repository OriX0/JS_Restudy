function Rabbit () { }
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();
// 情况1
Rabbit.prototype = {};

alert(rabbit.eats); // ?true
// 情况2

Rabbit.prototype.eats = false;

alert(rabbit.eats); // false 
function Rabbit () { }
// 情况3
delete rabbit.eats;

alert(rabbit.eats); // true
// 情况4
delete Rabbit.prototype.eats;

alert(rabbit.eats); // undefined


/*
let obj2 = new obj.constructor();
给出一个代码可以正常工作的 obj 的构造函数的例子。再给出一个会导致错误的例子。*/
// 正常
function User (name) {
  this.name = name;
}
let user1 = new User('John');
let user2 = new User.constructor('O');
// 错误
function User (name) {
  this.name = name;
}
User.prototype = {};

let user1 = new User('John');
let user2 = new User.constructor('O');