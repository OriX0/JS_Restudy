alert( 6.35.toFixed(1) ); // 6.3

/*
由于在二进制中的6.35为无限循环 6.3499999...;
故toFixed后为6.35
*/
//正确的舍入 将原数字尽可能的先整数化再进行操作

alert(Math.round(6.35*10)/10);
