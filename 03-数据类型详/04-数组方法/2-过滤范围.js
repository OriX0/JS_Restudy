/*写一个函数 filterRange(arr, a, b)，
该函数获取一个数组 arr，在其中查找数值大小在 a 和 b 之间的元素，并返回它们的数组。
该函数不应该修改原数组。它应该返回新的数组。*/
function filterRange (arr, a, b) {
  return arr.filter(item => (item <= b && item >= a))
}
