var b = {
  toString() {
    console.log('toString');
    return { name: 'b' };
  },
  valueOf() {
    console.log('valueOf');
    return [1, 2];
  },
  [Symbol.toPrimitive]() {
    console.log('symbol');
    return '1';
  },
};
console.log(String(b));
// "1" 优先调用toPrimitive  返回 “1”  直接转换返回
console.log(Number(b)); // 1
// "1" 优先调用toPrimitive  返回 “1”  直接转换返回

var b = {
  toString() {
    console.log('b.toString');
    return { name: 'b' };
  },
  valueOf() {
    console.log('b.valueOf');
    return [1, 2];
  },
  [Symbol.toPrimitive]() {
    console.log('b.symbol');
  },
};
console.log(String(b));
// 返回的均为引用形 抛出错误 TypeError: Cannot convert object to primitive value at String
var c = {
  toString() {
    console.log('c.toString');
    return { name: 'c' };
  },
  valueOf() {
    console.log('c.valueOf');
    return [1, 2];
  },
  [Symbol.toPrimitive]() {
    console.log('c.symbol');
    return [1, 2];
  },
};

console.log(String(c));
//result:抛出错误   toPrimitive返回[1,2] toString返回[1,2] valueOf 返回[1,2] 均为引用类型 抛出错误

var b = {
  toString() {
    console.log('toString');
    return '1';
  },
  valueOf() {
    console.log('valueOf');
    return [1, 2];
  },
  [Symbol.toPrimitive](hint) {
    console.log('symbol');
    if (hint === 'string') {
      console.log('string');
      return '1';
    }
    if (hint === 'number') {
      console.log('number');
      return 1;
    }
    if (hint === 'default') {
      console.log('default');
      return 'default';
    }
  },
};
console.log(String(b));
//result:’1‘  调用toPrimitive hint 为string 返回原始类型‘1’ 结果为‘1‘
console.log(Number(b));
//result:1

class Person {
  constructor(name) {
    this.name = name;
  }
  [Symbol.toPrimitive](hint) {
    if (hint === 'default') {
      console.log('default');
      return 'default';
    }
    if (hint === 'string') {
      console.log('string');
      return '1';
    }
    if (hint === 'number') {
      console.log('number');
      return 1;
    }
  }
}
let p1 = new Person('p1');
let p2 = new Person('p2');
console.log(String(p1));
// result:'1'
console.log(Number(p2));
// result: 1
console.log(p1);
//  Person{name:'p1'}
console.log(p2);
// Person{'name':'p2'}
