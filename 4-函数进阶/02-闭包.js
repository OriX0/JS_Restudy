function makeCounter () {
  let count = 0;

  return function () {
    return count++;
  };
}
// 每次调用 都会创建一个新的词法环境
let counter = makeCounter();
let counter2 = makeCounter();
alert(counter()); // 0
alert(counter()); // 1
alert(counter2()); // 0
alert(counter2()); // 1

// 
function Counter () {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();
alert(counter.up()); // ?1
alert(counter.up()); // ?2
alert(counter.down()); // ?1

// 
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi () {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();// 错误  sayHi是在 if中创建的  外部无法访问

/*编写一个像 sum(a)(b) = a+b 这样工作的 sum 函数。
是的，就是这种通过双括号的方式（并不是错误）。
举个例子：*/
function sum (a) {
  return function (b) {
    return a + b;
  }
}

sum(1)(2) = 3
sum(5)(-1) = 4

/*数组中有个内建的 arr.filter(f) 方法。它通过函数 f 过滤元素。
如果元素返回 true 的，那么该元素会被返回到结果数组中。
制造一系列『马上能用』的过滤器：
inBetween(a, b) —— 在 a 和 b 之间或与它们相等（包括）。
inArray([...]) —— 包含在给定的数组中。*/
function inBetween (a, b) {
  return function (item) {
    return item >= a && item <= b;
  }
}
function inArray (arr) {
  return function (item) {
    return arr.includes(item);
  }
}

/*按字段排序
users.sort(byField('name'));
users.sort(byField('age'));*/
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
function byField (key) {
  return (a, b) => (a.key > b.key) ? 1 : -1;
}