/*创建一个空的对象 user。
为这个对象增加一个属性，键是 name，值是 John。
再增加一个属性，键是 surname，值是 Smith。
把键为 name 的属性的值改成 Pete。
删除这个对象中键为 name 的属性。*/
let user = {};
user['name'] = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

/*写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false。*/
function isEmpty (obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

/*我们有一个保存着团队成员工资的对象：

写一段代码求出我们的工资总和，将计算结果保存到变量 sum。
如果 salaries 是一个空对象，那结果就为 0。*/
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum);

/*创建一个 multiplyNumeric(obj) 函数，把 obj 所有的数值属性都乘以 2。*/
function multiplyNumeric (obj) {
  for (let key in obj) {
    if (typeof (obj[key]) == 'number') {
      obj[key] *= 2;
    }
  }
}

