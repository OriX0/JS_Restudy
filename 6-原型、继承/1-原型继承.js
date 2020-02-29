// 
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert(rabbit.jumps); // true(1)
delete rabbit.jumps;
alert(rabbit.jumps); // null(2)
delete animal.jumps;
alert(rabbit.jumps); // undefined(3)

/*1.使用 __proto__ 来分配原型的方式，任何查找都会遵循路径：pockets → bed → table → head。
例如，pockets.pen 应该是 3（在 table 中找到）， bed.glasses 应该是 1 （在 head 中找到）。

回答问题：如果需要检测的话，将 glasses 作为 pockets.glasses 更快还是作为 head.glasses 更快？
速度没有差别  使用记录缓存机制*/
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};
let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};
let pockets = {
  money: 2000,
  __proto__: bed
};

// 哪一个对象会接收到 full 属性：animal 还是 rabbit？
// rabbit  因为this不受原型继承的营销
let animal = {
  eat () {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();


// 当我们喂一只的同时，另一只也吃饱了。为什么？如何修复这件事？
let hamster = {
  stomach: [],

  eat (food) {
    this.stomach.push(food);
  }
  // 修复方法2
  /*
    eat (food) {
    this.stomach=[food];
  }
  */
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// This one also has it, why? fix please.
alert(lazy.stomach); // apple