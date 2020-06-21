// 创建一个 Date 对象，日期是：Feb 20, 2012, 3:12am。时区是当地时区。
// 月份从0开始
alert(new Date(2012, 1, 20, 3, 12));

// 写一个函数 getWeekDay(date) 来显示一个日期的星期数，
// 用简写表示：‘MO’、‘TU’、‘WE’、‘TH’、‘FR’、‘SA’、‘SU’。 // 存于数组 快速取出

function getWeekDay (date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[date.getDay()];
}
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert(getWeekDay(date));        // 应该输出 "TU"

/* 欧洲国家的星期计算是从星期一（数字 1）开始，然后星期二（数字 2），
直到星期日（数字 7）。
写一个函数 getLocalDay(date)，返回日期的欧洲式星期数。*/
function getLocalDay (date) {
  return (date.getDay() == 0) ? 7 : date.getDay();
}
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert(getLocalDay(date));       // 星期二，应该返回 2

/*写一个函数 getDateAgo(date, days)，返回特定日期 date 往前 days 天数后，
是当月的哪一天。
举个例子，今天是 20 号，那么 getDateAgo(new Date(), 1) 应该是 19 号，
getDateAgo(new Date(), 2) 应该是 18 号。
跨月、年也应该是正确输出： */
function getDateAgo (date, days) {
  let copyDate = new Date(date);
  copyDate.setDate(copyDate.getDate() - days);
  return copyDate.getDate();
}
/* 写一个函数 getLastDayOfMonth(year, month)，
返回某月的最后一天，有时候是 30，有时是31，甚至是二月的 28/29。
参数：
year —— 四位数的年份，比如 2012。
month —— 月份，从 0 到 11。
举个例子，getLastDayOfMonth(2012, 1) = 29 */
function getLastDayOfMonth (year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/*写一个函数 getSecondsToday()，返回今天已经过去了多少秒？
举个例子：如果现在是10:00 am，并且没有夏令时转移，那么：
getSecondsToday() == 36000 // (3600 * 10)
该函数应该在任意一天都能正确运行。那意味着，它不应具有「今天」的硬编码值。 */
// 方法1
function getSecondsToday () {
  let now = new Date();
  return now.getHours() * 60 * 360 + now.getMinutes() * 360 + now.getSeconds();
}
// 方法2
function getSecondsToday () {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return (now - today) / 1000;
}
console.log(getSecondsToday());

/*距离明天还有多少秒？
重要程度: 5
写一个函数 getSecondsToTomorrow()，返回距离明天的秒数。
举个例子，现在是 23:00，那么：

getSecondsToTomorrow() == 3600 */
function getSecondsToTomorrow () {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return (tomorrow - now) / 1000;
}

/*写一个函数 formatDate(date)，能够将 date 格式化如下：
如果 date 距离现在少于 1 秒，输出 "刚刚"。
否则，如果少于 1 分钟，输出 "n 秒之前"。
否则，如果少于 1 小时，输出 "n 分钟之前"。
否则，输出完整日期，用格式"DD.MM.YY HH:mm"。
即："day.month.year hours:minutes"，所有的数都用两位数表示，
例如：31.12.16 10:00。 */
function formatDate (date) {
  let diff = new Date() - date; // 差值用毫秒表示

  if (diff < 1000) { // 少于一秒
    return 'right now';
  }

  let sec = Math.floor(diff / 1000); // 将间隔转化为秒

  if (sec < 60) {
    return sec + ' sec. ago';
  }

  let min = Math.floor(diff / 60000); // 将间隔转化为分钟
  if (min < 60) {
    return min + ' min. ago';
  }

  // 格式化日期
  // 在单个数值之前加 0 日/月/小时/分钟
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


