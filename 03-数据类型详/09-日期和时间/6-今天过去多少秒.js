/*
 * @Author: OriX
 * @Date: 2020-06-29 23:17:48
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-29 23:28:10
 * @FilePath: \JS_Restudy\03-数据类型详\09-日期和时间\6-今天过去多少秒.js
 */
/* 写一个函数 getSecondsToday()，返回今天已经过去了多少秒？
例如：如果现在是 10:00 am，并且没有夏令时转换，那么：
getSecondsToday() == 36000 // (3600 * 10)
该函数应该在任意一天都能正确运行。那意味着，它不应具有“今天”的硬编码值。 */
function getSecondsToday () {
  // 方法1 获取 时分秒
  let now;
  now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}
function getSecondsToday2 () {
  // 方法2 以today的0:0分为基准 进行减法计算
  let now;
  now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000);
}