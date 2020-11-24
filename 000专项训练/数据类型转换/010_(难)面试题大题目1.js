//----------Segmentation(*^▽^*)----------
//题目：你会几种让 if(a == 1 && a == 2 && a == 3) 条件成立的办法？

// value++的方法
// 1.重写valueOf方法
var a = {
  value: 0,
  valueOf() {
    return this.value++;
  },
};
// 2.重写valueOf和toString方法
var a = {
  value: 0,
  valueOf() {
    return {};
  },
  toString() {
    return this.value++;
  },
};
// 3.重写toPrimitive方法
var a = {
  value: 0,
  [Symbol.toPrimitive](hint) {
    if (hint === 'default') {
      this.value++;
    }
  },
};
// 4.定义class 并重写valueOf方法
class A {
  constructor() {
    this.value = 0;
  }
  valueOf() {
    return this.value++;
  }
}
var a = new A();
// 5.数组toString时会调用join方法
var a = [1, 2, 3];
a['join'] = function () {
  return this.shift();
};
// 6.定义calss继承于array 并重写join
class A extends Array {
  join = this.shift;
}
var a = new A(1, 2, 3);
