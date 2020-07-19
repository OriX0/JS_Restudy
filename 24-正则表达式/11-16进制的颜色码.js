/*
 * @Author: OriX
 * @Date: 2020-07-20 00:31:26
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-20 00:32:17
 */
let regexp = /#([0-9a-f]{3}){1,2}/gi;

let str = "color: #3f3; background-color: #AA00ef; and: #abcd";

alert(str.match(regexp)); // #3f3 #AA00ef