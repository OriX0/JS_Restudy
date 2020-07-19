/*
 * @Author: OriX
 * @Date: 2020-07-19 19:37:21
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-19 19:37:32
 */
// 创建一个正则表达式语句来寻找所有具有其属性的（闭合或非闭合）HTML 标签。
let reg = /你的正则表达式/g;

let str = '<> <a href="/"> <input type="radio" checked> <b>';

alert(str.match(reg)); // '<a href="/">', '<input type="radio" checked>', '<b>'