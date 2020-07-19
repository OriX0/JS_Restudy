/*
 * @Author: OriX
 * @Date: 2020-07-19 17:06:02
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-19 17:07:37
 */
// 我们有一个正则表达式 /Java[^script]/。

// 它会和字符串 Java 中的任何一部分匹配吗？
// 会和字符串 JavaScript 任何一部分匹配吗？

alert("Java".match(/Java[^script]/));
//  匹配结果为 null  因为Java后无任何字符 故不满足式子

alert("JavaScript".match(/Java[^script]/));
// 匹配结果为 JavaS 因为正则表达式是大小写敏感的