/*创建一个函数 readNumber，它提示输入一个数字，直到访问者输入一个有效的数字为止。
结果值必须以数字形式返回。
访问者也可以通过输入空行或点击“取消”来停止该过程。
在这种情况下，函数应该返回 null*/


function readNumber(){
  let num;
  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );
  if (num === null || num === '') return null;
  return +num;
}