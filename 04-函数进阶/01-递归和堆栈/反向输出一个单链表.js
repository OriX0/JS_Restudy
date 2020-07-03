/*
 * @Author: OriX
 * @Date: 2020-07-03 22:55:51
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-03 23:00:28
 * @FilePath: \JS_Restudy\04-函数进阶\01-递归和堆栈\反向输出一个单链表.js
 */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printReverseList (list) {
  let temp = list;
  let arr = []
  while (temp) {
    temp = temp.next;
    arr.push(temp.value);
  }
  arr.reverse()
  arr.map((item) => console.log(item))
}
printReverseList(list);
//递归 递归解法更简洁，有时更容易理解
function printReverseList (list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}