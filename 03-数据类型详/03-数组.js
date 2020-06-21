let fruits = ["Apples", "Pear", "Orange"];
// 在“副本”里 push 了一个新的值
let shoppingCart = fruits;
shoppingCart.push("Banana");
// fruits 里面是什么？
alert(fruits.length); // ？ 输出4

/*我们试试下面的 5 个数组操作。
创建一个数组 styles，里面存储有 “Jazz” 和 “Blues”。
将 “Rock-n-Roll” 从数组末端添加进去。
用 “Classics” 替换掉数组最中间的元素。查找数组最中间的元素的代码应该适用于任何奇数长度的数组。
去掉数组的第一个值并显示它。
在数组前面添加 Rap 和 Reggae。*/
let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert(styles.shift());
styles.unshift('Rap', 'Reggae');

// 
let arr = ["a", "b"];
arr.push(function () {
  alert(this);
})
arr[2](); // ? this = arr alert arr的内容 'a','b',function;

/*写出函数 sumInput()，要求如下：
使用 prompt 向用户索要值，并存在数组中。
当用户输入了非数字、空字符串或者点击“取消”按钮的时候，问询结束。
计算并返回数组所有项之和。
P.S. 0 是有效的数字，不要因为是 0 就停止问询。*/
function sumInput () {
  let numArr = [];
  let num;
  do {
    num = +prompt('type number', 0);
    numArr.push(num);
  } while (isFinite(num));
  alert(numArr);
  numArr.pop();
  let sum = 0;
  for (let temp of numArr) {
    sum += temp;
  }
  alert(sum);
}

function sumInput1 () {
  let numArr = [];
  while (true) {
    let value = +prompt('type number', 0);
    if (value == '' || value == null || !isFinite(value)) break;
    numArr.push(numArr);
  }
  let sum = 0;
  for (let temp of numArr) {
    sum += temp;
  }
  return sum;
}
/*输入是以数字组成的数组，例如 arr = [1, -2, 3, 4, -9, 6].
任务是：找出所有项的和最大的 arr 数组的连续子数组。
写出函数 getMaxSubSum(arr)，用其找出并返回最大和。 
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
*/

// O(n)解决方案
function getMaxSubSum (arr) {
  let maxSum = 0;
  let tempSum = 0;
  for (let num of arr) {
    tempSum += num;
    console.log('tempSum', tempSum);
    maxSum = Math.max(maxSum, tempSum);
    console.log('maxSum', maxSum);
    if (tempSum < 0) tempSum = 0;
  }
  return maxSum;
}