console.log(!{} == {});
console.log(!{} == []);
console.log(!{} == [0]);

//----------Segmentation(*^▽^*)----------
var b = {};
console.log(b + 1);
console.log(1 + b);
console.log(b + '');

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
console.log(b + '');
