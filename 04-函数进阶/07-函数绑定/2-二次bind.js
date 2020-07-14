/*
 * @Author: OriX
 * @Date: 2020-07-14 18:37:07
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-14 18:39:41
 * @FilePath: \JS_Restudy\04-函数进阶\07-函数绑定\2-二次bind.js
 */
/* 我们可以通过额外的绑定改变 this 吗？
输出将会是什么？ */

function f () {
  alert(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f();// John