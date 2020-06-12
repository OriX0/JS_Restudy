let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?

/* 
  arr[2]()  arr是特殊的对象 所以可以理解为 obj[methods]()
  所以this=arr =
  最终输出为 a b function
*/