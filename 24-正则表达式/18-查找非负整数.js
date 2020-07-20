/*
 * @Author: OriX
 * @Date: 2020-07-20 23:24:56
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-20 23:26:38
 */
let regexp = /(?<!-)\d+/g;
let str = "0 12 -5 123 -18";

alert(str.match(regexp)); // 0, 12, 123