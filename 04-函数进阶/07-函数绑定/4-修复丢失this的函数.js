/*
 * @Author: OriX
 * @Date: 2020-07-14 18:43:33
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-14 18:44:53
 * @FilePath: \JS_Restudy\04-函数进阶\07-函数绑定\4-修复丢失this的函数.js
 */
/* 下面代码中对 askPassword() 的调用将会检查 password，然后基于结果调用 user.loginOk/loginFail。
但是它导致了一个错误。为什么？
修改高亮的行，以使所有内容都能正常工作（其它行不用修改）。 */

function askPassword (ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk () {
    alert(`${this.name} logged in`);
  },

  loginFail () {
    alert(`${this.name} failed to log in`);
  },

};
// 原code
// askPassword(user.loginOk, user.loginFail);
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
// 解决方案2 箭头函数
askPassword(() => user.loginOk(), () => user.loginFail());