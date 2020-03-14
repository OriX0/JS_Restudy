// 1--- 编写代码从文档中获取一个包含 data-widget-name 特性的元素，并且读取它的值。
/*<!DOCTYPE html>
<html>
<body>
  <div data-widget-name="menu">Choose the genre</div>

  <script>
  </script>
</body>
</html>*/
let ele = document.querySelector('[data-[data-widget-name]]')
ele.dataset.widgetName;
ele.getAttribute('data-widget-name');

//2---
/*
改变所有外来链接的 style 属性，使链接变橙色。
如果一个链接是外来的：
这个 href 包含有 ://
但不是以 http://internal.com 开头。
例如：

 <a name="list">the list</a>
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>
<script>
  // 简单地为这些链接设置样式
  let link = document.querySelector('a');
  link.style.color = 'orange';
</script>*/

let links = document.querySelectorAll('a');
for (link of links) {
  let href = link.getAttribute('href');
  if (href.includes('//') && !href.startsWith('http://internal.com')) {
    link.style.color = 'orange'
  }
}
