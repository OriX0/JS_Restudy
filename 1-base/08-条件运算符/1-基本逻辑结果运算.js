alert(1 || 0); // 1
alert(true || 'no matter what'); // true
alert(null || 1); //  1
alert(null || 0 || 1); // 1
alert(undefined || null || 0); // 0
alert(null || 2 || undefined);//2
alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 先弹出1 再弹出2
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 均为undefined 均为假值 所以第一个值直接返回 先弹出1 再弹出undefined
alert( null || 2 && 3 || 4 ); //先&& 2和3 返回3 所以弹出3



