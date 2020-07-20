/*
 * @Author: OriX
 * @Date: 2020-07-20 22:50:01
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-20 22:58:25
 */
/* “bb - tag” 形如[tag]...[/tag]，tag 匹配 b、url 或 quote 其中之一。
例如：
  [b]text[/b]
  [url]http://google.com[/url]
  BB - tags 可以嵌套。但标签不能自嵌套，比如：
  可行：
  [url][b]http://google.com[/b] [/url]
  [quote][b]text[/b] [/quote]

不可行：
  [b][b]text[/b][/b]
标签可以包含换行，通常为以下形式：

  [quote]
  [b]text[/b]
  [/quote]
构造一个正则式用于查找所有 BB - tags 和其内容。

  举例：
  如果标签嵌套，那么我们需要记录匹配的外层标签（如果希望继续查找匹配的标签内容的话）：
 */
let reg = /\[(b|url|quote)\][\s\S]*?\[\/\1\]/g;
/*
  [] 外部需要转义 \[  \]
  开头：匹配 b、url 或 quote 其中之一   (b|url|quote)
  中间：是任意字符  但是应该是非贪婪模式  因为结束部分也属于任意字符
  结束：/ 开头匹配的字符  \/\1
*/

let str = "..[url]http://google.com[/url]..";
alert(str.match(reg)); // [url]http://google.com[/url]
let strNest = "..[url][b]http://google.com[/b][/url]..";
alert(str.match(reg)); // [url][b]http://google.com[/b][/url]