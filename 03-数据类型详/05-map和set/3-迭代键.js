/* 我们期望使用 map.keys() 得到一个数组，然后使用特定的方法例如.push 等，对其进行处理。
但是运行不了：
为什么？我们应该如何修改代码让 keys.push 工作？ */

let map = new Map();

map.set("name", "John");

// 代码修改  let keys = map.keys();
let keys = Array.from(map.keys());
// Error: keys.push is not a function
keys.push("more");

// 因为map.keys返回的是可迭代对象而非数组