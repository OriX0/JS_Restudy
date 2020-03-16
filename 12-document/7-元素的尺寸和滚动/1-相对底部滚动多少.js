/*
elem.scrollTop 属性是从顶部滚动出来的部分的大小，如何获得 scrollBottom —— 从底部滚动的尺寸？
编写适用于任意元素的代码。
P.S. 请检查您的代码：如果没有滚动条或元素完全向下滚动，那么它应该返回 “0”。*/

let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight
// 底部滚动 = 全体滚动长度-顶部滚动长度 -内容高度
