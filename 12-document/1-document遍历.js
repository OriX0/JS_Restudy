/*1--对于这个页面：
<html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>
？*/
// <div> DOM 节点？
document.body.firstChild[0]
document.body.childNodes[1]
// <ul> DOM 节点？
document.body.children[1]
document.body.lastElementChild
//第二个 <li> 节点（即包含 Pete 的节点）
document.body.children[1].children[1]
document.body.lastElementChild.lastElementChild

//2---
//如果 elem 是任意一个 DOM 元素节点……
// 值一直都是 null 这个判定是不是真的？
elem.lastChild.nextSibling  //正确  因为lastChild已经是最后一个了 nextSibling肯定是没有的
elem.children[0].previousSibling// 不正确 因为children只获取了元素接地那 previousSibling可能存在 如文本节点回车

