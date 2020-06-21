/*创建一个 multiplyNumeric(obj) 函数，把 obj 所有的数值属性都乘以 2。*/
function multiplyNumeric (obj) {
  for (let key in obj) {
    if (typeof (obj[key]) == 'number') {
      obj[key] *= 2;
    }
  }
}
