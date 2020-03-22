// 获取文档的元素坐标   窗口坐标+滚动长度
function getCoords (elem) {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + pageXOffset,
    left: box.left + pageXOffset
  }
}