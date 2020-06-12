/*
  1.创建一个数组 styles，里面存储有 “Jazz” 和 “Blues”。
  2.将 “Rock-n-Roll” 从数组末端添加进去。
  3.用 “Classics” 替换掉数组最中间的元素。查找数组最中间的元素的代码应该适用于任何奇数长度的数组。
  4.去掉数组的第一个值并显示它。
  5.在数组前面添加 Rap 和 Reggae。*/

// 1
let styles = ['Jazz','Blues'];
//2 
styles.push('Rock-n-Roll');
//3 
styles[Math.floor((styles.length - 1) / 2)]='Classics';
//4 
alert(styles.shift());
//5
styles.unshift('Rap','Reggae');
