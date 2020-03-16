/*编写返回标准滚动条宽度的代码。
对于Windows，它通常在 12px 和 20px 之间变化。
如果浏览器不为它保留任何空间，那么它可能是 0px。*/

// 滚动条宽度 =offsetWidth-clientWidth
let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// 必须添加到文档中，否则尺寸为 0
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth);