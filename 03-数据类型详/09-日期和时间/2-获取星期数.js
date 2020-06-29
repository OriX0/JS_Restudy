/*
 * @Author: OriX
 * @Date: 2020-06-29 22:32:09
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-29 22:37:04
 * @FilePath: \JS_Restudy\03-数据类型详\09-日期和时间\2-获取星期数.js
 */
/* 编写一个函数 getWeekDay(date) 以短格式来显示一个日期的星期数：
‘MO’，‘TU’，‘WE’，‘TH’，‘FR’，‘SA’，‘SU’。
例如： */

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert(getWeekDay(date));        // 应该输出 "TU"
function getWeekDay (date) {
  const dayWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return dayWeek[date.getDay()];
}