const sourceArr = [2, 3, 4, 5];
//方法1 ...操作符
const arrClone1 = [...sourceArr];

// 方法2 slice
const arrClone2 = sourceArr.slice(0);

// 方法3 Array.from
const arrClone3 = Array.from(sourceArr);