// 使用算法实现的数组随机 达到完全的随机
// 其思路是：逆向遍历数组，并将每个元素与其前面的随机的一个元素互换位置：
function shuffle (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 从 0 到 i 的随机索引
    // 可以写成：
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}