function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();
// console.log(user);

alert( user.ref.name ); 
// 结果是什么？
/* 
  结果为Error  无法从undefined中读取到一个name属性
    严格模式下 this为undefined 
    makeUser函数中的this指向undefined
    故为Error
  如果为非严格模式下 
    let user = window.makeUser() 此时this就指向window
    user.ref.name 为空 没有这个属性 非严格模式下会自动新建该变量
*/