/* 编写函数 shuffle(array) 来随机排列数组的元素。
多次运行 shuffle 可能导致元素顺序的不同。例如：
所有元素顺序应该具有相等的概率。例如，可以将
 [1,2,3] 重新排序为 [1,2,3] 或 [1,3,2] 或 [3,1,2] 等，每种情况的概率相等 */
function shuffle (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() & (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}