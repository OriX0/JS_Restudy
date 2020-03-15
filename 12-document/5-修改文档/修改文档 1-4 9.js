// 1---以下这三个命令行的结果是一样的吗？
elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text
// 1和3一样 但是2不一定 当text中包含 元素标签 则结果会与其他的不同

//2---
/*创建一个函数 clear(elem) 用来移除元素里的内容。

 <ol id="elem">
  <li>Hello</li>
  <li>World</li>
</ol>

<script>
  function clear(elem)
  clear(elem); // 清除列表
</script>*/
function clear (elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}
function clear (elem) {
  elem.innerHTML = '';
}

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
// aaa的位置是有问题的 浏览器会自动修复到table外部  所以aaa继续留存


/*4---
编写一个接口，根据用户输入生成一个列表。
每一个列表项：
使用 prompt 询问用户输入的内容。
创建 <li> 并添加到 <ul>。
重复以上两步，直到用户输入取消指令（按下 Esc 或者 prompt 的 CANCEL）。
所有元素应该都是动态创建的。
如果把用户输入了 HTML 标签，就应该将其视为文本。 */
let ul = document.createElement('ul');
document.body.append(ul);
function promptToList () {
  while (true) {
    let data = prompt('please input text', '');
    if (!data) break;
    let li = document.createElement(li);
    li.textContent = data;
    ul.append(li);
  }
}

/*9---
编写需要插入的文本代码 <li>2</li><li>3</li>，插入到两个 <li> 之中：

<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>
*/
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');