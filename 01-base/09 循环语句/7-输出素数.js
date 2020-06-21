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