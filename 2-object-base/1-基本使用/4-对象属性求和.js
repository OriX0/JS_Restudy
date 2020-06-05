/*我们有一个保存着团队成员工资的对象：
写一段代码求出我们的工资总和，将计算结果保存到变量 sum。
从所给的信息来看，结果应该是 390。
如果 salaries 是一个空对象，那结果就为 0。*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function getSalariesSum(obj) {
  let sum=0;
  for(let name in obj){
    sum+=obj[name];
  }
  return sum;
}