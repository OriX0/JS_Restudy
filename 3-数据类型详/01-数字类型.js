// 创建一个脚本，提示访问者输入两个数字，然后显示它们的总和。
let num1 = +prompt("Type Number", "");
let num2 = +prompt("Type Number", "");
if (isFinite(num1) && isFinite(num2)) {
  let result = num1 + num2;
  alert(result);
}

// 为什么 6.35.toFixed(1) == 6.3？
alert(6.35.toFixed(20));// 6.34999999999999964473
// 正确的方式四舍五入
alert(Math.round(6.35 * 10) / 10);

/* 创建一个函数 readNumber，它提示输入一个数字，直到访问者输入一个有效的数字。
结果值必须作为数字返回。
访问者也可以通过输入空行或按“取消”来停止该过程。在这种情况下，函数应该返回 null。*/
function readNumber () {
  let num;
  do {
    num = +prompt("Type Number", "");
  } while (!isFinite(num));
  if (num === null || num === '') return null;
  return num;
}
readNumber();

// 这个循环是无限的。它永远不会结束。为什么？
let i = 0;
while (i != 10) {
  i += 0.2;
  console.log(i.toFixed(20));
  // alert(i.toFixed(20)); 
}
// 因为精度问题 无法整等于10

/* 用内置函数Math.random() 创建一个从 0 到 1 的随机值（不包括 1 ）。
编写随机函数（min，max）以生成从最小到最大（不包括最大值）的随机浮点数。*/
function getRandom (min, max) {
  alert(Math.random() * (max - min) + min);
}
getRandom(1, 10);

/* 创建一个函数 randomInteger(min，max)，该函数从 min 到 max 生成随机整数，
包括 min 和 max 作为可能值。
来自间隔 min..max 的任何数字必须以相同的概率出现。*/
function randomInteger (min, max) {
  let num = Math.random() * (max - min + 1) + min - 0.5
  return (Math.round(num));
}

function randomInteger2 (min, max) {
  let num = Math.random() * (max - min + 1)
  return (Math.floor(num));
}