/*每秒输出一次
重要程度: 5
编写一个函数 printNumbers(from, to)，使其每秒输出一个数字，数字在 from 到 to 范围内。
使用以下两种方法来实现。
使用 setInterval。
使用递归 setTimeout。*/
// setInterval
function printNumbers (from, to) {
  let current = from;
  let timeID = setInterval(function () {
    alert(current);
    (current == to) ? clearInterval(timeID) : false;
    current++;
  }, 1000)
}
// 递归setTimeout
function printNumbers2 (form, to) {
  let current = from;
  setTimeout(function go () {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// 用 setInterval 重写 setTimeout
/*let i = 0;
let start = Date.now();
function count() {
  if (i == 1000000000) {
    alert("Done in " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count, 0);
  }
  // 任务的一部分
  for(let j = 0; j < 1000000; j++) {
    i++;
  }
}
count(); */
let i = 0;
let start = Date.now();
let timeID = setInterval(count, 0);
function count () {
  // 任务的一部分
  for (let j = 0; j < 1000000; j++) {
    i++;
  }
  if (i == 1000000000) {
    clearInterval(timeID);
    alert("Done in " + (Date.now() - start) + 'ms');
  }
}

//setTimeout只在当前代码快代码结束后调用

let i = 0;
setTimeout(() => alert(i), 100); // 100000000 这里输出几

// 假设这段代码运行时间超过 100 毫秒 （n） 这里循环到几
for (let j = 0; j < 100000000; j++) {
  i++;
} 