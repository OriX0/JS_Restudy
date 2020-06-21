/* 假设我们收到了一个用户数组，形式为：{ id:..., name:..., age... } 。
创建一个函数 groupById(arr) 从该数组创建对象，以 id 为键（key），数组项为值。
 */
let users = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
function groupById (users) {
  let result = {};
  for (let user of users) {
    result[user.id] = user;
  }
  return result;

  // 更优解
  /*   return users.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  },{}) */
}

/*
// 调用函数后，我们应该得到：

usersById = {
  john: {id: 'john', name: "John Smith", age: 20}
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/