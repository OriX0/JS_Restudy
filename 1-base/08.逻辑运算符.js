alert(1 || 0); // 1
alert(true || 'no matter what'); // true
alert(null || 1); //  1
alert(null || 0 || 1); // 1
alert(undefined || null || 0); // 0
alert(null || 2 || undefined);//2
alert(alert(1) || 2 || alert(3));// 弹出 1 2
alert(1 && null && 2); //null
alert(alert(1) && alert(2));//1 undefined
alert(null || 2 && 3 || 4); // 3

/* 写一个“if”条件句来检查 age 是否位于 14 到 90 的闭区间。
“闭区间”意味着，age 的值可以取 14 或 90。*/
if (age >= 14 && age <= 90) {
  alert(true);
} else {
  alert(false);
}

/*写一个 if 条件句，检查 age 是否不位于 14 到 90 的闭区间。
创建两个表达式：第一个用非运算 !，第二个不用。*/
if (!(age >= 14 && age <= 90)) {
  alert(true);
}
if (age < 14 && age > 90) {
  alert(true);
}
if (age < 14 || age > 90) {
  alert(true);
}

if (-1 || 0) alert('first');//first
if (-1 && 0) alert('second');//
if (null || -1 && 1) alert('third');//third

/*实现使用 prompt 进行登陆校验的代码。
如果访问者输入 "Admin"，那么使用 prompt 引导获取密码，如果输入的用户名为空或者按下了 Esc 键 —— 显示 “Canceled”，如果是其他字符串 —— 显示 “I don’t know you”。
密码的校验规则如下：
如果输入的是 “TheMaster”，显示 “Welcome!”，
其他字符串 —— 显示 “Wrong password”，
空字符串或取消了输入，显示 “Canceled.”。*/
let userName = prompt("input you userName", "");
if (userName == "Admin") {
  let password = prompt("input you password", "");
  if (password == "TheMaster") {
    alert("“Welcome");
  } else if (password == "" || password == null) {
    alert("“Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName == "" || userName == null) {
  alert("“Canceled");
} else {
  alert("i don’t know you");
}