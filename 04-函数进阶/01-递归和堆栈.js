// 编写一个函数 sumTo(n) 计算 1 + 2 + ... + n 的和。

//循环方式
function sumTo1 (n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
// 递归方式
function sumTo2 (n) {
  return (n == 1) ? 1 : n + sumTo2(n - 1);
}

function sumTo3 (n) {
  return (n + 1) * n / 2;
}

// 计算阶乘 
// factorial(n) 使用递归调用计算 n
function factorial (n) {
  return (n == 1) ? 1 : n * factorial(n - 1);
}

// 斐波那契数
function fib (n) {
  return (n <= 1) ? n : fib(n - 2) + fib(n - 1);
}

// 非递归 自下而上
function fib1 (n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// 输出一个单链表
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
  alert(list.value);
  if (list.next) {
    printList(list.next);
  }
}
function printList1 (list) {
  let temp = list;
  if (temp) {
    alert(list.value);
    temp = list.next;
  }
}
printList(list)

/*反向输出单链表
反向输出前一个任务 输出一个单链表 中的单链表。
使用两种解法：循环和递归。*/
function reversePrintList (list) {
  if (list.next) {
    reversePrintList(list.next);
  }
  alert(list.value);
}

function reversePrintList2 (list) {
  let arr = [];
  let temp = list;
  if (temp) {
    arr.push(temp.value);
    temp = list.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}