/*
 * @Description:
 * @Version: 1.0
 * @Author: OriX
 * @Date: 2020-12-18 21:33:00
 * @LastEditors: OriX
 * @LastEditTime: 2020-12-18 21:56:10
 * @Copyright (C) 2020 OriX. All rights reserved.
 */
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(new Date(), i);
  }, 1000);
}

console.log(new Date(), i);

// 输出是 什么 请用 -- 隔开1秒以外的输入

//----------Segmentation(*^▽^*)---------- 将代码的输出改为 5--01234
// 建议多种方式

//----------Segmentation(*^▽^*)----------
/*
  的输出变成 0 -> 1 -> 2 -> 3 -> 4 -> 5，
  并且要求原有的代码块中的循环和两处 console.log 不变
*/
// 提示 用ES6 的promise 和ES7的async await 分别实现
