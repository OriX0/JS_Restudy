var b = {
  toString() {
    console.log('toString');
    return 1;
  },
  valueOf() {
    console.log('valueOf');
    return [1, 2];
  },
};
console.log(Number(b));
// result:1  valueOf返回 [1,2] toString返回1

var b = {
  toString() {
    console.log('toString');
    return { name: 'b' };
  },
  valueOf() {
    console.log('valueOf');
    return [1, 2];
  },
};
console.log(String(b));
// result:Cannot convert object to primitive value at String toString返回{ name: 'b' } 再调用valueOf 返回[1, 2] 均为引用类型 抛出异常
