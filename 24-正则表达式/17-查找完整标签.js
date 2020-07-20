/*
 * @Author: OriX
 * @Date: 2020-07-20 23:08:52
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-20 23:12:15
 */
/* 写出一个正则表达式，用于查找 <style...> 标签。它应该匹配完整的标签：该标签可能是没有属性的标签 <style> 或是有很多属性的标签 <style type="..." id="...">。
…同时正则表达式不应该匹配 <styler>！
举例如下：
 */
let reg = /<style(>|\s.*?>)/g;
/* 
  共同的 就是前面的style
  不同是的 > 或 一个空格后跟着任意内容 ＋ >

*/

alert('<style> <styler> <style test="...">'.match(reg)); // <style>, <style test="...">