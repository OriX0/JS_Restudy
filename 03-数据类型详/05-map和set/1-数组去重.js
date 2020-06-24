/* 定义 arr 为一个数组。
创建一个函数 unique(arr)，该函数返回一个由 arr 中所有唯一元素所组成的数组。
例如： */

function unique (arr) {
  /* 你的代码 */
  // 方式1 return [...new Set(arr)];
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O