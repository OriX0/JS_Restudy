/* 写一个函数 ucFirst(str)，并返回首字母大写的字符串 str，例如：
ucFirst("john") == "John"; */
function ucFirst (str) {
  // 先做错误判断  是否为空
  if (!str) return str;
  // return str.slice(0, 1).toUpperCase() + str.slice(1);
  return str[0].toUpperCase() + str.slice(1);
}

/* 写一个函数 checkSpam(str)，
如果 str 包含 viagra 或 XXX 就返回 true，否则返回 false。 */
function checkSpam (str) {
  str = str.toLowerCase();
  // (str.includes('viagra') || str.includes('XXX')) ? true : false;
  return str.includes('viagra') || str.includes('XXX');
}

/* 创建函数 truncate(str, maxlength) 来检查 str 的长度，
如果超过 maxlength —— 应使用 "…" 来代替 str 的结尾部分，长度仍然等于 maxlength。
函数的结果应该是截断后的文本（如果需要的话） */
function truncate (str, maxlength) {
  /* if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '...';
  }
   return str; */
  return (str.length > maxlength) ? str.slice(0, maxlength - 1) : str;

}

/* 我们有以 "$120" 这样的格式表示的花销。意味着：先是美元符号，然后才是数值。
创建函数 extractCurrencyValue(str) 从字符串中提取数值并返回。*/
function extractCurrencyValue (str) {
  return +str.slice(1);
}
alert( extractCurrencyValue('$120') === 120 ); // true