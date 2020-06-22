/* arr 是一个数组。
创建一个函数 unique(arr)，返回去除重复元素后的数组 arr。
例如： */

function unique (arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(strings)); // Hare, Krishna, :-O


// 结合Set结构 及展开操作符
function unique2 (arr) {
  return [...new Set(arr)];
}