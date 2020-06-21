var name = 'window';
var person = {
    name: 'person',
}
var doSth = function(){
    console.log(this.name);
    return function(){
        console.log('return:', this.name);
    }
}
var Student = {
    name: 'OriX',
    doSth: doSth,
}
// 普通函数调用
doSth(); // window
// 对象上的函数调用
Student.doSth(); // 'OriX'
// call、apply 调用
Student.doSth.call(person); // 'person'
new Student.doSth.call(person); // 结果是
/* 
  结果为报错 new的优先级低于.号 
  最终调用为 new (Student.doSth.call)(person)
  当使用new调用的时候 会调用函数的 [[Constructor]]方法  但是call没有这个方法
  故报错 Uncaught TypeError: Student.doSth.call is not a constructor
*/
