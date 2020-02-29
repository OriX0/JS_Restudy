/*name 属性赋值给变量 name。
years 属性赋值给 age。
isAdmin 属性赋值给变量 isAdmin（如果属性缺失则赋值为 false）。*/

let user = { name: "John", years: 30 };
// 等号左侧是你的代码
let { name, years: age, isAdmin = false } = user

alert(name); // John
alert(age); // 30
alert(isAdmin); // false


/*以下是一个 salaries 对象：
新建一个函数 topSalary(salaries)，返回拥有最高薪资的人。
如果 salaries 是空的，函数应该返回 null。
如果有多个最高薪资的人，返回其中任意一个。
提示：使用 Object.entries 和解构语法来遍历键/值对。*/

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function topSalary (salaries) {
  let maxS = 0;
  let maxName = '';
  for (let [name, salary] of Object.entries(salaries)) {
    if (salaries > maxS) {
      maxS = salary;
      maxName = name;
    }
  }
  return maxName;
}
