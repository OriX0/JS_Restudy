/*
 * @Author: OriX
 * @Date: 2020-07-19 17:07:47
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-19 17:11:10
 */
/* 时间可以通过 hours:minutes 或者 hours-minutes 格式来表示。
小时和分钟都有两个数字：09:00 或者 21-30。

写一个正则表达式来找到时间： */

const str = "Breakfast at 09:00. Dinner at 21-30";
const reg = /\b\d\d[-:]\d\d\b/g;
const timeStr = str.match(reg);
