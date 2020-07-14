/*
 * @Author: OriX
 * @Date: 2020-07-14 18:34:34
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-14 18:35:30
 * @FilePath: \JS_Restudy\04-函数进阶\07-函数绑定\1-作为方法的绑定函数.js
 */
function f () {
  alert(this); // ?
}

let user = {
  g: f.bind(null)
};

user.g(); // null