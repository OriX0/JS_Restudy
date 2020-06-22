// 用三种方法 实现数据的填充 生成类似1-100的数组

// fill方法
const arr1 = new Array(100).fill(0).map((item, index) => index + 1);

// Array.from 
const arr2 = Array.from(Array(100), (item, index) => index + 1);

// 展开操作符+array.keys()
const arr3 = [...Array(100).keys()];