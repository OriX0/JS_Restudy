/*
 * @Author: OriX
 * @Date: 2020-07-04 22:54:33
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-04 23:03:45
 * @FilePath: \JS_Restudy\04-函数进阶\02-闭包\7-变量可见吗.js
 */
let x = 1;

function func () {
  console.log(x); // 错误 无法读取x在其未初始化前

  let x = 2;
}

func();
/* 变量暂时无法使用的区域（从代码块的开始到 let）有时被称为“死区”。*/