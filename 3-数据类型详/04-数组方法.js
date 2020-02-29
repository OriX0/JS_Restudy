/*将 border-left-width 转换成 borderLeftWidth
写函数 camelize(str) 将诸如 “my-short-string” 之类的由短划线分隔的单词变成骆驼式的 “myShortString”。
即：删除所有短横线，短横线后的每一个单词变为首字母大写。
*/
function camelize (str) {
  let arr = str.split('-');
  arr = arr.map((item, index) => index == 0 ? word : item[0].toUpperCase() + item.slice(1));
  str = arr.join('');
  alert(str);
  return str;
}

/*写一个函数 filterRange(arr, a, b) 获取一个数组 arr，
查找 a 和 b 之间的元素并返回它们的数组*/
function filterRange (arr, a, b) {
  return arr.filter((item) => (item >= a && item <= b));
}

/*写一个函数 filterRangeInPlace(arr, a, b) 获取一个数组 arr，
并从中除去 a 和 b 区间以外的所有值。测试：a ≤ arr[i] ≤ b。*/
function filterRangeInPlace (arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    console.log('nowLength:', arr.length);
    let val = arr[i];
    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
/* let arr = [5, 2, 1, -10, 8];
// ……你的代码以降序对其进行排序
alert( arr ); // 8, 5, 2, 1, -10 */
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr);

/*我们有一个字符串数组 arr。我们希望有一个排序过的副本，但保持 arr 不变。
创建一个函数 copySorted(arr) 返回这样一个副本。*/
let arr = ["HTML", "JavaScript", "CSS"];
// 使用 slice() 来创建一个副本并对其进行排序
function copySorted (arr) {
  return arr.slice().sort();
}
let sorted = copySorted(arr);
alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)


/*创建一个构造函数 Calculator，以创建“可扩展”的 calculator 对象。
该任务由两部分组成。
首先，实现 calculate(str) 方法，该方法接受像 "1 + 2" 
这样格式为“数字 运算符 数字”（以空格分隔）的字符串，并返回结果。
该方法需要能够理解加号 + 和减号 -。
然后添加方法 addMethod(name, func)，该方法教 calculator 进行新操作。
它需要运算符 name 和实现它的双参数函数 func(a,b)。*/
function Calculator () {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };
  this.Calculator = function (str) {
    let tempArr = str.split(" ");
    let a = +tempArr[0];
    let method = tempArr[1];
    let b = +tempArr[2];
    if (!this.methods[method] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[method](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
let cal = new Calculator();

//
function getAllName (arr) {
  let result = [];
  arr.map(item => result.push(arr.name));
  return result;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];
// let names = getAllName(users);
let names = users.map(item => item.name);
alert(names); // John, Pete, Mary

//
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, pete, mary];
let usersMapped = users.map(item => (
  {
    fullName: `${name} ${surname}`,
    // fullName: item.name + " " + item.surname,
    id: item.id
  })
);
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
alert(usersMapped[0].id) // 1
alert(usersMapped[0].fullName) // John Smith

// 编写函数 sortByAge(users) 获得对象数组的 age 属性，
//并根据 age 对这些对象数组进行排序。
function sortByAge (arr) {
  arr.sort((a, b) => a.age - b.age);
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

// 编写函数 shuffle(array) 来随机排列数组的元素。
// 无法达到完全的随机
function shuffle2 (arr) {
  arr.sort(Math.random() - 0.5);
}
// 使用算法实现 算法叫作 Fisher-Yates shuffle。
function shuffle1 (array) {
  array.forEach((element, index) => {
    let randomNum = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomNum]] = [array[randomNum], array[index]];
  });
}

// 其思路是：逆向遍历数组，并将每个元素与其前面的随机的一个元素互换位置：
function shuffle (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 从 0 到 i 的随机索引
    // 可以写成：
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}


// 编写 getAverageAge(users) 函数
function getAverageAge (users) {
  return users.reduce((sum, user) => sum + user.agr, 0) / users.length;
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// 创建一个函数 unique(arr)，返回去除重复元素后的数组 arr。
function unique (arr) {
  let result = [];
  arr.forEach(item => (result.includes(item) ? false : result.push(item)));
  return result;
}

//  从数组创建键（值）对象
function groupById1 (arr) {
  let result = {};
  arr.forEach(item => {
    result[item.id] = item;
  })
  console.log(result);
  return result;
}
function groupById (arr) {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {})
}
let users = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
alert(usersById);
