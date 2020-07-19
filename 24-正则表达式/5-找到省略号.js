/*
 * @Author: OriX
 * @Date: 2020-07-19 17:23:01
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-19 17:24:30
 */
// 创建一个正则表达式来查找省略号：连续 3（或更多）个点。
const str = "Hello!... How goes?.....";
const reg = /\.{3,}/g;
const resultMatch = str.match(reg);
