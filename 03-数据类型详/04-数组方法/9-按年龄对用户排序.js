/* 编写函数 sortByAge(users)
获得对象数组的 age 属性，并根据 age 对这些对象数组进行排序。 */
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

function sortByAge (arr) {
  arr.sort((a, b) => a.age - b.age);
}