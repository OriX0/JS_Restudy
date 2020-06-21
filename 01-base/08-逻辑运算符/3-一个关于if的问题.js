
if (-1 || 0) alert('first');
// -1为真返回-1 if（-1） 执行 故而弹出first
if (-1 && 0) alert('second');
// 0 为假值 返回0 if(0) 不执行
if (null || -1 && 1) alert('third');
//-1&&1 返回1 null||1 返回1 if(1) 执行 弹出third