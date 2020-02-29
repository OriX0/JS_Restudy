/* 输出将会是什么？ */
function f () {
  alert(this); // ?
}

let user = {
  g: f.bind(null)
};

user.g(); // null


/* 我们可以通过附加的 bind 改变 this 吗？
输出将会是什么？ */

function f () {
  alert(this.name);
}
f = f.bind({ name: "John" }).bind({ name: "Ann" });
f(); // John

/*
函数有一个包含某个值的属性。bind 之后它会改变吗？为什么，阐述一下？ */

function sayHi () {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert(bound.test); // 输出将会是什么？为什么？ undefined


// 
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

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(() => user.loginOk(), () => user.loginFail());

// 
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
// 向 askPassword 传入什么参数，使得 user.login(true) 结果是 ok，user.login(fasle) 结果是 fail
askPassword(() => user.login(true), () => user.login(false));
askPassword(user.login.bind(user, true), user.login.bind(user, false));

