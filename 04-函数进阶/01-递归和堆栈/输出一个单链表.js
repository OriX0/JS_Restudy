/*
 * @Author: OriX
 * @Date: 2020-07-03 22:43:57
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-03 22:56:01
 * @FilePath: \JS_Restudy\04-函数进阶\01-递归和堆栈\输出一个单链表.js
 */
/* 假设我们有一个单链表（在 递归和堆栈 那章有讲过）：
编写一个可以逐个输出链表元素的函数 printList(list)。
使用两种方式实现：循环和递归。
哪个更好：用递归还是不用递归的？ */
// 循环  循环更有效
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
function printList (list) {
  let temp = list;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}
printList(list);
//递归 递归解法更简洁，有时更容易理解
function printList (list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}