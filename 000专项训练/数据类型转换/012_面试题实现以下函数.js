//----------Segmentation(*^▽^*)----------
// 书写f函数代码实现以下输出
function f() {
  let args = [...arguments];
  var add = function () {
    args.push(...arguments);
    return add;
  };
  add.valueOf = function () {
    return args.reduce((cur, pre) => {
      return cur + pre;
    });
  };
  return add;
}

console.log(f(1) == 1);
console.log(f(1)(2) == 3);
console.log(f(1)(2)(3) == 6);
