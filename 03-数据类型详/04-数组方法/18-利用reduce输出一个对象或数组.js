const arr = [1, 2, 3, 4, 5]
// 快速输出
const value = arr.reduce((prev, curr) => {
  return curr % 2 === 0 ? [...prev, curr] : prev
}, [])
console.log(value);