// 实现sumSalaries 
function sumSalaries (salaries) {
  return Object.values(salaries).reduce((sum, item) => sum + item, 0);
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(sumSalaries(salaries)); // 650

// 写一个可以返回对象的属性数量的函数 count(obj) ：
let user = {
  name: 'John',
  age: 30
};
function count (obj) {
  return Object.keys(obj).length;
}

alert(count(user)); // 2