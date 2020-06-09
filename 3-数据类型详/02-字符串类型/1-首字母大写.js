// 写一个函数 ucFirst(str)，并返回首字母大写的字符串 
function ucFirst(str) {
  // 判断是否为空
  if (!str) return str;
  return str[0].toUpperCase()+str.slice(1);
}