var b = {};
console.log(b - '2');
// NaN -2   NaN
console.log(b * '2');
console.log(b / '2');
console.log(b % '2');
console.log(b - []);
console.log(b - {});
// {} 转换全部为NaN NaN 进行数学计算结果均为NaN

var b = {
  valueOf() {
    console.log('valueOf');
    return {};
  },
  toString() {
    console.log('toString');
    return 1;
  },
};
// b先进行valueOf 转换为{} 再进行toString  转换为1 b=1
console.log(b - '2');
// -1  1-2 = -1
console.log(b * '2');
// 2
console.log(b / '2');
// 0.5
console.log(b % '2');
// 1
console.log(b - []);
//NaN
console.log(b - {});
//NaN

//----------Segmentation(*^▽^*)----------
var b = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'default') {
      console.log('default');
      return 'default';
    }
    if (hint === 'number') {
      console.log('number');
      return 1;
    }
    if (hint === 'string') {
      console.log('string');
      return '2';
    }
  },
};
// b=1 由于用这几个运算符进行连接 所以b会转换为number类型 即hint为number 所以b=1
console.log(b - '2');
// -1
console.log(b * '2');
// 2
console.log(b / '2');
// 0.5
console.log(b % '2');
// 1
console.log(b - []);
//NaN
console.log(b - {});
// NaN

//----------Segmentation(*^▽^*)----------
var b = {};
console.log(+b);
//NaN
console.log(b + 1);
// [object,object1]优先进行toString
console.log(1 + b);
// [1object,object]
console.log(b + '');
// "[object,object] "

//----------Segmentation(*^▽^*)----------
var b = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'default') {
      console.log('default');
      return '我是默认';
    }
    if (hint === 'number') {
      console.log('number');
      return 1;
    }
    if (hint === 'string') {
      console.log('string');
      return '2';
    }
  },
};
console.log(+b);
// 1 number类型
console.log(b + 1);
// "我是默认1" default
console.log(1 + b);
// "1我是默认" default
console.log(b + '');
// "我是默认 "
console.log(String(b));
// "2"

//----------Segmentation(*^▽^*)----------
var b = {
  valueOf() {
    console.log('valueOf');
    return {};
  },
  toString() {
    console.log('toString');
    return 1;
  },
};
console.log(+b); // number  1
console.log(b + 1); // default 2
console.log(String(b)); // string "1"

//----------Segmentation(*^▽^*)----------
var date = new Date();

console.log(date.valueOf()); //时间戳
console.log(date.toString()); // 本地时区的

console.log(+date); // 时间戳
console.log('' + date); // 空格+本地时区文字
