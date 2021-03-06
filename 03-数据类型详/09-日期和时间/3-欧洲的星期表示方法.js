/*
 * @Author: OriX
 * @Date: 2020-06-29 22:38:42
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-29 22:40:35
 * @FilePath: \JS_Restudy\03-数据类型详\09-日期和时间\3-欧洲的星期表示方法.js
 */
/* 欧洲国家的星期计算是从星期一（数字 1）开始的，然后是星期二（数字 2），
直到星期日（数字 7）。编写一个函数 getLocalDay(date)，并返回日期的欧洲式星期数。 */

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert(getLocalDay(date));       // 星期二，应该显示 2
function getLocalDay (date) {
  const dayInWeek = date.getDay();
  (dayInWeek === 0) ? 7 : dayInWeek;
}