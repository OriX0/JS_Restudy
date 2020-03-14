/*
数组
输入是以数字组成的数组，例如 arr = [1, -2, 3, 4, -9, 6].
任务是：找出所有项的和最大的 arr 数组的连续子数组。
写出函数 getMaxSubSum(arr)，用其找出并返回最大和。
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
*/

/*递归
1.使用递归和非递归实现斐波那契数列  非循环注意计算重复 使用自下而上的模式进行计算节省内存
2.正向及反向输出链表*/

//闭包
/*
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // shooter 函数
      alert( i ); // 应该显示它自己的数字
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 第 0 号 shooter 显示 10
army[5](); // 第 5 号也输出 10...
// ... 所有的 shooters 都显示 10 而不是它们的 0, 1, 2, 3... */


/* 多个括号求值  实现
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15 */


// 原生的原型 装饰器
/*添加方法 defer(ms) 到所有的函数原型，它返回一个包装函数，延迟 ms 毫秒调用函数。
这里是它应该如何执行的例子： */
function f (a, b) {
  alert(a + b);
}
f.defer(1000)(1, 2); // 1 秒钟后显示 3


// promises错误处理 
// 你怎么看？.catch 会触发么？解释你的答案。
new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);


// 手动实现 将普通函数包装 并返回promise 考虑多参数的状况


/*2
创建一个函数 clear(elem) 用来移除元素里的内容。
 <ol id="elem">
  <li>Hello</li>
  <li>World</li>
</ol>
<script>
  function clear(elem)
  clear(elem); // 清除列表
</script>
*/