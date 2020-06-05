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