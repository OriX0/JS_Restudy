/*  用？ 和|| 重写
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
*/
// ? 版本
function checkAge (age) {
  return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
}
// || 版本
function checkAge (age) {
  return (age > 18) || confirm('Do you have your parents permission to access this page?');
}

/*  写一个返回数字 a 和 b 中较小的那个数字的函数 min(a,b)。*/
function min (a, b) {
  return (a > b) ? b : a;
}

/*写一个函数 pow(x,n)，返回 x 的 n 次方。换句话说，将 x 与自身相乘 n 次，返回最终结果。*/
function pow (x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert(pow(x, n));
}