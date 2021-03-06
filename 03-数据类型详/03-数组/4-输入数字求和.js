/*写出函数 sumInput()，要求如下：

使用 prompt 向用户索要值，并存在数组中。
当用户输入了非数字、空字符串或者点击“取消”按钮的时候，问询结束。
计算并返回数组所有项之和。
P.S. 0 是有效的数字，不要因为是 0 就停止问询。*/

function  sumInput() {
  let arr=[];
  while(true) {
    let value = prompt('input one number',0);
    if(value===null||value===""||!isFinite(value)) break;
    arr.push(+value);
  }
  let sum = 0;
  for(let v of arr) {
    sum+=v;
  }
  return sum;
}