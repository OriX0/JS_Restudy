/*
 * @Author: OriX
 * @Date: 2020-06-29 23:31:42
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-29 23:32:59
 * @FilePath: \JS_Restudy\03-数据类型详\09-日期和时间\8-格式化相对日期.js
 */
/* 写一个函数 formatDate(date)，能够对 date 进行如下格式化：

如果 date 距离现在不到 1 秒，输出 "right now"。
否则，如果 date 距离现在不到 1 分钟，输出 "n sec. ago"。
否则，如果不到 1 小时，输出 "m min. ago"。
否则，以 "DD.MM.YY HH:mm" 格式输出完整日期。即："day.month.year hours:minutes"，全部以两位数格式表示，例如：31.12.16 10:00。 */

function formatDate (date) {
  let diff = new Date() - date; // 以毫秒表示的差值
  if (diff < 1000) { // 少于 1 秒
    return 'right now';
  }
  let sec = Math.floor(diff / 1000); // 将 diff 转换为秒
  if (sec < 60) {
    return sec + ' sec. ago';
  }
  let min = Math.floor(diff / 60000); // 将 diff 转换为分钟
  if (min < 60) {
    return min + ' min. ago';
  }
  // 格式化 date
  // 将前置 0 加到一位数 day/month/hours/minutes 前
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); // 得到每个组件的后两位

  // 将时间信息和日期组合在一起
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}