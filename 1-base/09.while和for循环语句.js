let i = 3;

while (i) {
  alert(i--);
}
// 输出 3 2 1

let i = 0;
while (++i < 5) alert(i);
// 1 2 3 4
let i = 0;
while (i++ < 5) alert(i);
// 1 2 3 4 5

for (let i = 0; i < 5; i++) alert(i);
for (let i = 0; i < 5; ++i) alert(i);
// 0 1 2 3 4 因为i++是在单次迭代结束后运行的

/*使用 for 循环输出从 2 到 10 的偶数。*/
for (let j = 2; i <= 10; i++) {
  if (j % 2 == 1) continue;
  alert(j);
}

/*重写代码，在保证不改变其行为的情况下，
将 for 循环更改为 while（输出应保持不变）。

 for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}*/
let i = 0;
while (i < 5) {
  alert(`number ${i}!`);
  i++;
}

/* 编写一个提示用户输入大于 100 的数字的循环。如果用户输入其他数值 —— 请他重新输入。
循环一直在请求一个数字，直到用户输入了一个大于 100 的数字、取消输入或输入了一个空行为止。
在这我们假设用户只会输入数字。在本题目中，不需要对非数值输入进行特殊处理。*/
let num;
do {
  num = +(prompt("Enter a number greater than 100?", 0))
} while (num <= 100 && num);

/*大于 1 且不能被除了 1 和它本身以外的任何数整除的整数叫做素数。
换句话说，n > 1 且不能被 1 和 n 以外的任何数整除的整数，被称为素数。
例如，5 是素数，因为它不能被 2、3 和 4 整除，会产生余数。
写一个可以输出 2 到 n 之间的所有素数的代码。
当 n = 10，结果输出 2、3、5、7。*/

let lastNum = 10;
nextPrime:
for (let n = 2; n < lastNum; n++) {
  for (let j = 2; j < n; j++) {
    if (n % j == 0) continue nextPrime;
  }
  alert(n);
}