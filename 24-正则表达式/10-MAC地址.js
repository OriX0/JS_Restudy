/*
 * @Author: OriX
 * @Date: 2020-07-20 00:26:54
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-20 00:30:09
 */
let regexp = /[0-9a-f]{2}(:[0-9a-f]{2}){5}/;

alert(regexp.test('01:32:54:67:89:AB')); // true

alert(regexp.test('0132546789AB')); // false (no colons)

alert(regexp.test('01:32:54:67:89')); // false (5 numbers, must be 6)

alert(regexp.test('01:32:54:67:89:ZZ')) // false (ZZ ad the end)