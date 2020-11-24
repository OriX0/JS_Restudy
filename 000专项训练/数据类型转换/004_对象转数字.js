console.log(Number({}));
// “NaN”  调用valueOf 返回{} 再调用toString [object,object] 再转换为数字 NaN
console.log(Number([]));
// “0”  调用valueOf 返回[] 调用toString 返回“” 转换为数字0
console.log(Number([0]));
// "0"
console.log(Number([1, 2]));
// "NaN" 调用valueOf 返回[1,2] 调用toString 返回“1,2” 转换为数字NaN
console.log(Number(new Date()));
//  调用valueOf  返回当前时间戳 time  结果为 “time”
