// 后缀形式：

for (let i = 0; i < 5; i++) alert( i );
// 前缀形式：
for (let i = 0; i < 5; ++i) alert( i );

/*
均为0-4 
因为作为step 不管是i++ 还是++i  
都与检查语句i<5分开 故无影响
*/