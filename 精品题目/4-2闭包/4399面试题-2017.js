/*
 * @Description:
 * @Version: 1.0
 * @Author: OriX
 * @Date: 2021-01-15 15:26:43
 * @LastEditors: OriX
 * @LastEditTime: 2021-01-15 15:28:25
 * @Copyright (C) 2021 OriX. All rights reserved.
 */
function test() {
  var n = 4399;
  function add() {
    n++;
    console.log(n);
  }
  return { n: n, add: add };
}
var result = test();
var result2 = test();
result.add();
result.add();
console.log(result.n);
result2.add();
