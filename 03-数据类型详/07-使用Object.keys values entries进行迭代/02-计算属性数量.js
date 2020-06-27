/*
 * @Author: OriX
 * @Date: 2020-06-27 22:14:11
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-27 22:17:16
 * @FilePath: \JS_Restudy\03-数据类型详\07-使用Object.keys values entries进行迭代\02-计算属性数量.js
 */
// 写一个函数 count(obj) ，该函数返回对象中的属性的数量：

let user = {
  name: 'John',
  age: 30
};

alert(count(user)); // 2
function count (obj) {
  return Object.keys(obj).length;
}