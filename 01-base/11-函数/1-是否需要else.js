/*
如果参数 age 大于 18，那么下面的函数将返回 true。
否则它将会要求进行确认，并返回确认结果：*/

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
//如果 else 被删除，函数的工作方式会不同吗？--- 没有区别
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}