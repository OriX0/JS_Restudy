// 1----
// 脚本会显示什么？
<html>
  <body>
    <script>
      alert(document.body.lastChild.nodeType); //1 script是元素
  </script>
  </body>
</html>


//2---
let body = document.body;
body.innerHTML = "<!--" + body.tagName + "-->";
alert(body.firstChild.data); // what's here? BODY


//3---
/*
document 属于哪一类？
DOM 层次中它的位置又如何？
它继承自 Node 或 Element，还是 HTMLElement？*/
alert(document); // [object HTMLDocument]
alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node