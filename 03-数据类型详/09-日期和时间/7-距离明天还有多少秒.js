/*
 * @Author: OriX
 * @Date: 2020-06-29 23:28:47
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-29 23:31:24
 * @FilePath: \JS_Restudy\03-数据类型详\09-日期和时间\7-距离明天还有多少秒.js
 */
// 写一个函数 getSecondsToTomorrow()，返回距离明天的秒数。

function getSecondsToTomorrow () {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}

function getSecondsToTomorrow2 () {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}