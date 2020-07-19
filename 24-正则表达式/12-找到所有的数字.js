/*
 * @Author: OriX
 * @Date: 2020-07-20 00:33:04
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-20 00:35:06
 */
let regexp = /-?\d+(\.\d+)?/g;

let str = "-1.5 0 2 -123.4.";

alert(str.match(regexp)); // -1.5, 0, 2, -123.4