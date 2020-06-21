/*
  将 border-left-width 转换成 borderLeftWidth
  编写函数 camelize(str) 将诸如 “my-short-string” 之类的由短划线分隔的单词变成骆驼式的 “myShortString”。
  即：删除所有短横线，并将短横线后的每一个单词的首字母变为大写。
*/
function camelize(str) {
  if(!str.includes('-')) return false;
  return str
    .split('-')
    .map(
      (item,index)=>index===0?item:item[0].toUpperCase()+item.slice(1)
    )
    .join('')
}
camelize( "background-color" )