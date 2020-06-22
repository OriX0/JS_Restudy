const arrA = [0, 1, 2, 3, 4, 5];
const arrB = [3, 4, 5, 8, 9, 6];
// 取交集
const duplicatedValues = [...new Set(arrA)].filter(item => arrB.includes(item));

// 取差集
const diffValues = [...new Set([...arrA, ...arrB])].filter(item => !arrB.includes(item) && !arrA.includes(item));

