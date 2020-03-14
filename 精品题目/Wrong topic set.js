/*1
如果 elem 是任意一个 DOM 元素节点……
elem.lastChild.nextSibling 值一直都是 null 这个判定是不是真的？
elem.children[0].previousSibling 值一直都是 null 这个判定是不是真的？*/


/*2
创建一个函数 clear(elem) 用来移除元素里的内容。
 <ol id="elem">
  <li>Hello</li>
  <li>World</li>
</ol>
<script>
  function clear(elem)
  clear(elem); // 清除列表
</script>
*/

/*3----
<table id="table">
  aaa
  <tr>
    <td>Test</td>
  </tr>
</table>

<script>
  alert(table); // table 应该显示出的样子

  table.remove();
  // 为什么 aaa 依旧在文档中
</script> */