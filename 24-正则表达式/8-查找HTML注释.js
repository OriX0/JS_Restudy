/*
 * @Author: OriX
 * @Date: 2020-07-19 18:02:52
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-19 19:34:06
 */
let reg = /<!--[/s/S]*?-->/g;

let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

alert(str.match(reg)); // '<!-- My -- comment \n test -->', '<!---->'