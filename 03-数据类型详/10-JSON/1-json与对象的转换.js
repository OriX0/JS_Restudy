/*
 * @Author: OriX
 * @Date: 2020-06-29 23:57:00
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-29 23:57:54
 * @FilePath: \JS_Restudy\03-数据类型详\10-JSON\1-json与对象的转换.js
 */
// 将 user 转换为 JSON，然后将其转换回到另一个变量。

let user = {
  name: "John Smith",
  age: 35
};
let jsonUser = JSON.stringify(user);
let cloneUser = JSON.parse(jsonUser);