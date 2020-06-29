/*
 * @Author: OriX
 * @Date: 2020-06-29 22:37:36
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-29 22:38:16
 * @FilePath: \JS_Restudy\精品题目\3-9日期与时间\获取星期数.js
 */
/* 编写一个函数 getWeekDay(date) 以短格式来显示一个日期的星期数：
‘MO’，‘TU’，‘WE’，‘TH’，‘FR’，‘SA’，‘SU’。
例如： 
ps:不要使用循环 switch for等来判断对应日期应该输出那个文字*/

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert(getWeekDay(date));        // 应该输出 "TU"