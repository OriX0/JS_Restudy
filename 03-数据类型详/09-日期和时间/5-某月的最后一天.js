/*
 * @Author: OriX
 * @Date: 2020-06-29 23:13:45
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-29 23:17:28
 * @FilePath: \JS_Restudy\03-数据类型详\09-日期和时间\5-某月的最后一天.js
 */
/* 写一个函数 getLastDayOfMonth(year, month) 返回 month 月的最后一天。有时候是 30，有时是 31，甚至在二月的时候会是 28/29。
参数：
year —— 四位数的年份，比如 2012。
month —— 月份，从 0 到 11。
举个例子，getLastDayOfMonth(2012, 1) = 29（闰年，二月） */
function getLastDayOfMonth (year, month) {
  // const nextMonth = (month + 1 === 12) ? 0 : month + 1;
  // const day = new Date(year, nextMonth, 0);
  const day = new Date(year, month + 1, 0);
  return day.getDate();

}