/*
 * @Author: OriX
 * @Date: 2020-06-27 22:10:06
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-27 22:13:46
 * @FilePath: \JS_Restudy\03-数据类型详\07-使用Object.keys values entries进行迭代\01-属性求和.js
 */
/* 有一个带有任意数量薪水的 salaries 对象。
编写函数 sumSalaries(salaries)，该函数使用 Object.values 和 for..of 循环返回所有薪水的总和。
如果 salaries 是空对象，那么结果必须是 0。
举个例子： */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(sumSalaries(salaries)); // 650
function sumSalaries (salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

function sumSalaries (salaries) {
  return Object.values(salaries).reduce((preSum, item) => preSum + item, 0)
}