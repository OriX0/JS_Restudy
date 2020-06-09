/*
创建函数 truncate(str, maxlength) 来检查 str 的长度，
如果超过 maxlength —— 应使用 "…" 来代替 str 的结尾部分，长度仍然等于 maxlength。
函数的结果应该是截断后的文本（如果需要的话）。
*/
function truncate(str,maxlength) {
  return (str.length>maxlength)?str.slice(0,maxlength-1)+'...':str;
}