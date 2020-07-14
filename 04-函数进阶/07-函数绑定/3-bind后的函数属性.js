/*
 * @Author: OriX
 * @Date: 2020-07-14 18:41:50
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-14 18:43:13
 * @FilePath: \JS_Restudy\04-函数进阶\07-函数绑定\3-bind后的函数属性.js
 */
// 函数的属性中有一个值。bind 之后它会改变吗？为什么，阐述一下？

function sayHi () {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert(bound.test); // 输出将会是什么？为什么？ 
/* undefined 因为bind已经将this指向 {name:'john'} 没有test属性*/