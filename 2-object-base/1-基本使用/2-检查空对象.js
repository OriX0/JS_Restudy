/*写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false。*/
function isEmpty (obj) {
  // 一旦进入遍历 则不为空
  for (let key in obj) {
    return false;
  }
  return true;
}