/*
 * @Author: OriX
 * @Date: 2020-06-27 22:37:53
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-27 22:41:09
 * @FilePath: \JS_Restudy\03-数据类型详\08-解构赋值\02-最高薪资.js
 */
/* 这儿有一个 salaries 对象：
新建一个函数 topSalary(salaries) ，返回收入最高的人的姓名。
如果 salaries 是空的，函数应该返回 null。
如果有多个收入最高的人，返回其中任意一个即可。
P.S.使用 Object.entries 和解构语法来遍历键 / 值对。 */
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary (salaries) {
  let max = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}