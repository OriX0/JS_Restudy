/*
 * @Author: OriX
 * @Date: 2020-06-27 22:36:21
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-27 22:37:35
 * @FilePath: \JS_Restudy\03-数据类型详\08-解构赋值\01-解构赋值的使用.js
 */
/* 我们有一个对象：
写一个解构赋值语句使得：
name 属性赋值给变量 name。
years 属性赋值给变量 age。
isAdmin 属性赋值给变量 isAdmin（如果属性缺失则取默认值 false）。
下面是赋值完成后的值的情况： */

let user = { name: "John", years: 30 };

// 等号左侧是你的代码
let { name, years: age, isAdmin = false } = user

alert(name); // John
alert(age); // 30
alert(isAdmin); // false