/* 拖放实现
  1.在mousedown上 ---根据需要准备移动的元素
  2.在mousemove上  通过更改left/top和 position来移动它
  3.在mouseup上 执行与完成拖放相关的行为
*/
elem.onmousedown = function (event) {
  // 获取鼠标和元素的偏移量
  let shiftX = event.clientX - elem.getBoundingClientRect().left;
  let shiftY = event.clientY - elem.getBoundingClientRect().top;
  //确保absolute 
  elem.style.position = 'absolute';
  // 改变index 保证在顶部
  elem.style.zIndex = 1000;
  // 将元素脱离原父元素 直接移动到body中 作为body子元素 且 absolute是相对于body
  document.body.append(elem);
  moveAt(event.pageX, event.pageY);

  function moveAt (pageX, pageY) {
    elem.style.left = pageX - shiftX + 'px';
    elem.style.top = pageY - shiftY + 'px';

  }
  function onMouseMove (event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);
  elem.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    elem.onmouseup = null;
  }
}
elem.ondragstart = function () {
  return false;
}