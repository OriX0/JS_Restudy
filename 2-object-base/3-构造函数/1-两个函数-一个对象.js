// 是否可以创建像 new A()==new B() 这样的函数 A 和 B？
let obj = {};
let fun = ()=>{};

function A() { return obj; }
function B() { return obj; }

let a = new A;
let b = new B;

alert( a == b ); // true

/*关于构造函数中的return  
  如果返回的是一个对象（函数 对象 或 null 均可）则返回对象 否则返回this*/