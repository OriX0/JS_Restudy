/*不同点：CSS 宽度与 clientWidth
重要程度: 5
getComputedStyle(elem).width 与 elem.clientWidth 之间的差别在哪？

指出至少三种不同点，越多越好。*/

/* 1. getComputedStyle(elem).width 的结果会带px
  2.getComputedStyle(elem).width 获取的值可能为auto
  3.elem.clientWidth的值是  内容+内间距 而css标准宽度只是元素内容的宽度
  4.当有滚动条的时候 clientWidth 会去掉滚动条的宽度 getComputedStyle 一般浏览器会保留滚动条的长度 部分浏览器会忽略
*/