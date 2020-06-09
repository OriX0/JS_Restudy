/*
内建函数 Math.random() 
  会创建一个在 0 到 1 之间（不包括 1）的随机数。
编写一个 random(min, max) 函数，
  用以生成一个在 min 到 max 之间的随机浮点数（不包括 max)）。
*/
function random(min,max) {
  return min+Math.random()*(max-min);
}