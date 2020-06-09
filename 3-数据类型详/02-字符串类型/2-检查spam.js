/*写一个函数 checkSpam(str)，
如果 str 包含 viagra 或 XXX 就返回 true，否则返回 false。
函数必须不区分大小写：*/

function checkSpam(str){
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra')||lowerStr.includes('XXX');
}