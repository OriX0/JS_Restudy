/*比较下面两个代码片段。
用 finally 执行 try..catch 之后的代码：*/

try {
  // work work
} catch (e) {
  // handle errors
} finally {
  // cleanup the working space
}
// 第二个代码片段，把清空工作空间的代码放在 try..catch 之后，
// 但并不包裹在 finally 里面。

try {
  // work work
} catch (e) {
  // handle errors
}
/*
cleanup the working space
我们只是需要在代码执行完之后，清除工作空间，而不管是不是在执行的过程中遇到异常。
那么，是用 finally 好呢还是两种方式都一样？
如果哪种更好，请举例说明在什么情况下它会更好？ */

/*
使用finally更好  不管是遇到return 返回 或者是 throw抛出错误都能保证其中代码的运行
但是放于外面的话  遇到throw抛出错误 将无法执行*/