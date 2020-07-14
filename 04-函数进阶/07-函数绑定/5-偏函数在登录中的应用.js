/*
 * @Author: OriX
 * @Date: 2020-07-14 18:45:08
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-14 18:47:40
 * @FilePath: \JS_Restudy\04-函数进阶\07-函数绑定\5-偏函数在登录中的应用.js
 */
/* 这个任务是比 修复丢失了 "this" 的函数 略微复杂的变体。
user 对象被修改了。现在不是两个函数 loginOk/loginFail，现在只有一个函数 user.login(true/false)。
在下面的代码中，我们应该向 askPassword 传入什么参数，以使得 user.login(true) 结果是 ok，user.login(fasle) 结果是 fail？
 */
function askPassword (ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login (result) {
    alert(this.name + (result ? ' logged in' : ' failed to log in'));
  }
};

// askPassword(?, ?); // ?
askPassword(user.login.bind(user, true), user.login.bind(user, false));
askPassword(() => user.login(true), () => user.login(false));
