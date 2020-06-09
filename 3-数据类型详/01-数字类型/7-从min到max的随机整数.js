/*创建一个函数 randomInteger(min，max)，
该函数会生成一个范围在 min 到 max 中的随机整数，包括 min 和 max。
在 min..max 范围中的所有数字的出现概率必须相同。*/

// 调整取值范围的边界
function randomInteger(min,max) {
  let rand = min-0.5+Math.random()*(max-min+1);
  return Math.round(rand);
}
// 使用Math.floor 来处理min-max+1的整数
function randomInteger2(min,max) {
  let rand = min+Math.random()*(max-min+1);
  return Math.floor(rand);
}