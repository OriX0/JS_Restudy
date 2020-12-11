/*
 * @Description:
 * @Version: 1.0
 * @Author: OriX
 * @Date: 2020-12-11 16:08:46
 * @LastEditors: OriX
 * @LastEditTime: 2020-12-11 16:09:48
 * @Copyright (C) 2020 OriX. All rights reserved.
 */
/*
修复以下代码让其可以正常运行
let map = new Map();
map.set("name", "John");
let keys = map.keys();
// Error: keys.push is not a function
keys.push("more");

*/
let map = new Map();
map.set('name', 'John');
let keys = Array.from(map.keys());
// Error: keys.push is not a function
keys.push('more');
