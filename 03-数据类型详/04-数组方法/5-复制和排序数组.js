/*
  我们有一个字符串数组 arr。我们希望有一个排序过的副本，但保持 arr 不变。
  创建一个函数 copySorted(arr) 返回这样一个副本。
*/
function copySorted (arr) {
  return arr.slice().sort();
}