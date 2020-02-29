/*定义 arr 为一个数组。
创建一个函数 unique(arr)，函数将返回一个数组，
包含 arr 中所有元素且元素均唯一。
*/

function unique (arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O

/*Anagrams 是有相同数量相同字母但是顺序不同的单词。
例如：
nap - pan
ear - are - era
cheaters - hectares - teachers
写一个函数 aclean(arr)，它返回的数组中 anagrams 被删除。*/
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean (arr) {
  let map = new Map();
  for (let value of arr) {
    let sorted = value.toLowerCase().split('').sort().join('');
    map.set(sorted, value);
  }
  return Array.from(map.values());
}
alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

/*我们希望得到 map.keys() 的数组然后继续对它进行处理（脱离开 map 本身）。

但是有这样一个问题*/


let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
// 错误：.push 不是一个函数 因为map.keys返回的是迭代器 可以用for of调用 
keys.push("more");