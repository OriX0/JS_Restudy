// 应用场景 保存某个用户的访问次数 当他离开后就将对象变为null 接触占用
let visitsCountMap = new WeakMap();
function countUser (user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count++);
}
// 访问
let ori = { name: 'ori' };
countUser(ori);
countUser(ori);
// 当ori=null 就可解除占用
ori = null;
console.log(Array.from(visitsCountMap));