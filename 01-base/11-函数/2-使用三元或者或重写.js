function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
/*
重写这个函数并保证效果相同，不使用 if，且只需一行代码。
编写 checkAge 的两个变体：
  */
// 使用问号运算符 ?
{
  function checkAge(age) {
    (age>18)?true:confirm('Do you have your parents permission to access this page?');
  }
}
// 使用或运算符 ||
{
  function checkAge(age) {
    return age>18||confirm('Do you have your parents permission to access this page?');
  }
}
