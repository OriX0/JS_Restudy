// null and undefined

// false
console.log(1 == 2);
console.log(null == 0);
console.log(null == false);
console.log(null == {});
console.log(undefined == 0);
console.log(undefined == false);
console.log(undefined == {});
// true
console.log(1 == 1);
console.log(null == null);
console.log(undefined == undefined);
console.log(undefined == null);

// string and number
console.log('11' == 11); //1
console.log('1a' == 11); // 0
console.log('11n' == 11); // 0

console.log('0x11' == 17); // true 会先进行进制转换
console.log('false' == 0); // 1
console.log('NaN' == NaN); // NaN不与任何相等

// Boolean
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true == '1'); // true
console.log(false == '0'); // true

console.log(true == '0'); // false
console.log(true == 'false'); // false
console.log(false == null); //false

// object and other
var b = {
  valueOf: function () {
    console.log('b.valueOf');
    return '1';
  },
  toString: function () {
    console.log('b.toString');
    return '2';
  },
};
var c = {
  valueOf: function () {
    console.log('c.valueOf');
    return {};
  },
  toString: function () {
    console.log('c.toString');
    return '2';
  },
};
console.log(b == 1); // true
console.log(c == 2); // true  返回{}  再使用toString

// 非数组对象
console.log({} == true);
console.log({} == false);
console.log({} == 1);
console.log({} == '1');
console.log({} == 0);
console.log({} == Symbol(1));
console.log({} == null);
console.log({} == {});
// 最终均为[object,object] ===>NaN   右侧转换为数字类型 NaN不与任何数字相等 结果全为false

// 一方为数组
console.log([] == 0); // true [] ==>""==>0
console.log([1] == 1); // true
console.log(['1'] == 1); // false

console.log([] == 1); //false
console.log(['1', '2'] == 1); // false  NaN 不等于1
console.log(['1', '2'] == ['1', '2']); //false NaN 引用地址不同

console.log([{}, {}] == '[object Object],[object Object]'); // true
console.log([] == true); // false
console.log([] == Symbol('1')); // false

// 加上!运算符 优先转换为布尔值
var b = {
  valueOf: function () {
    console.log('b.valueOf');
    return '1';
  },
  toString: function () {
    console.log('b.toString');
    return '2';
  },
};
console.log(!b == 1); // false
console.log(!b == 0); // true

//
console.log(!null == !0); // true  null =0 ==>true
console.log(!undefined == !0); // true !NaN==true
console.log(!!null == !!0); // true

console.log(!{} == {});
// false 1.转换!{}= false  2.false=={}  3.0=={}  4.0==NaN
console.log(!{} == []);
// true 1.转换!{}=false 2.false==[] 3. 0==[] 4.0==0
console.log(!{} == [0]);
//true 1.转换!{}=false 2.false==[] 3. 0==[] 4.0==0

var b = {
  valueOf() {
    console.log('valueOf');
    return [];
  },
  toString() {
    console.log('toString');
    return false;
  },
};
console.log(![] == []);
// True 转换![]=false  flase=[]  0=[] 0='' 0=0
console.log(![] == b);
// True ![] =false  false==b  0 == false  true

var b = {
  [Symbol.toPrimitive](hint) {
    console.log(hint);
    if (hint === 'default') {
      return 2;
    }
  },
};
console.log(b == 2);
// 在默认情况下 先走toPrimitive 返回2
console.log(b == '2');

function f() {
  var inner = function () {
    return 1;
  };
  inner.valueOf = function () {
    console.log('valueOf');
    return 2;
  };
  inner.toString = function () {
    console.log('toString');
    return 3;
  };
  return inner;
}
console.log(f() == 1);
//False f() 返回 inner inner.valueOf = 2  2==1 False
console.log(f()() == 1);
//True     f()() ===>innner()=1 >> 1==1 True
