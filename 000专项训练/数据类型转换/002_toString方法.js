/*  
  基本类型
    把原始值转换为字符串 
      原理 1.创建Object转换为基本类型包装类 2.调用toString方法 3.用后销毁
  引用类型
    数组          子项+逗号连接的字符串
    普通对象      “[object object]”
    函数 正则      源代码字符串
    日期          本地时区时间
    原始值包装对象   原始值
    weak/map set  promise---》 object+类型
*/

console.log([].toString()); // ""
console.log(new Date().toString()); // 以本地时区为准的值
console.log((1).toString()); // 避免引擎将.和1连接在一起看做一个值
console.log(new Map().toString()); // "[object Map]"
console.log(new Set().toString());
console.log(new Promise().toString());
