/*
 * @Author: OriX
 * @Date: 2020-07-19 16:42:03
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-19 16:48:28
 */

/* 查找时间
时间的格式是：hours:minutes。小时和分钟都是两位数，如 09:00。
编写正则表达式在字符串 Breakfast at 09:00 in the room 123:456. 中查找时间。
P.S. 在这个任务里没必要校验时间的正确性，所以 25:99 也可算做有效的结果。
P.P.S. 正则表达式不能匹配 123:456。 */
const str = "reakfast at 09:00 in the room 123:456.";
const reg = /\b\d\d:\d\d\b/;
const timeStr = str.match(reg);
console.log("timeStr", timeStr)
