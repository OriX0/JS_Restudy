/*
 * @Author: OriX
 * @Date: 2020-06-29 23:58:07
 * @LastEditors: OriX
 * @LastEditTime: 2020-06-30 00:00:21
 * @FilePath: \JS_Restudy\03-数据类型详\10-JSON\2-排除反向引用.js
 */
/* 在简单循环引用的情况下，我们可以通过名称排除序列化中违规的属性。
但是，有时我们不能只使用名称，因为它既可能在循环引用中也可能在常规属性中使用。因此，我们可以通过属性值来检查属性。
编写 replacer 函数，移除引用 meetup 的属性，并将其他所有属性序列化： */

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room
};

// 循环引用
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer (key, value) {
  return (key != "" && value === 'meetup') ? undefined : value;
}))