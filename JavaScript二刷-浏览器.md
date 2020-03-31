

# Document

## 浏览器环境 规格

浏览器在 JavaScript 中运行时的一个鸟瞰图

![image-20200313215231937](C:\Project\WEB\js enhance\JavaScript二刷-浏览器.assets\image-20200313215231937.png)

### windows根对象的角色

1.它是 JavaScript 代码的全局对象

2.代表浏览器窗口并提供控制它的方法

### 标准

DOM 标准

描述文档的结构、操作和事件，参见 [https://dom.spec.whatwg.org](https://dom.spec.whatwg.org/)。

CSSOM 标准

介绍样式表和样式规则，对它们的操作及其对文档的绑定，参见 https://www.w3.org/TR/cssom-1/.

HTML 标准

介绍 HTML 语言（例如标签）以及 BOM（浏览器对象模型）—— 各种浏览器函数：`setTimeout`、`alert`、`location`等等，请参阅https://html.spec.whatwg.org。它采用了 DOM 规范并为其扩展了许多属性和方法。

## DOM树

### 关于空格和换行符

空格和换行符是完全有效的字符，它们形成文本节点并成为 DOM 的一部分。

- 换行符：`↵`（在 JavaScript 中称为`\n`）
- 一个空格：`␣`

#### 特殊

1. 由于历史原因，`<head>` 之前的空格和换行符被忽略，
2. 如果我们在 `<body>` 之后放置了一些东西，那么它会自动移动到 `body` 内部，因为 HTML 规范要求所有内容必须位于  内。所以  后面可能没有空格。

### 自动修正

如果浏览器遇到格式不正确的 HTML，它会在形成 DOM 时自动修正它。

#### 自动补充

- 顶部标签 `<html>,<body>` 即使没有声明也会自动进行创建
- 表格中的 `<tbody> `按照 DOM 规范，它们必须具 有`<tbody> ` ，但 HTML 文本可能（官方的）忽略它。然后浏览器自动在 DOM 中创建 。
- 无效文档  浏览器会读取标签并恢复丢失的部分

```markup
<p>Hello
<li>Mom
<li>and
<li>Dad
```
###节点类型
总共12种节点类型
实际上，我们通常用到的是其中的 4 个：
- document—— DOM 中的“入口点”。
- 元素节点 —— HTML 标签，树构建块。
- 文本节点 —— 包含文本。
- 注释 —— 有时我们可以将内容放入其中，它不会显示，但 JS 可以从 DOM 中读取它。

## 遍历DOM

### 最上面的树节点使用document属性使用

`<html>=document.documentElement	`

`<body>=document.body`

`<head>=document.head`

### 元素是否能在script中获取 得看此时元素渲染

比如将script写在head标签中 则此时docment.body的值为null

### 子元素

- childNodes--**集合提供了对所有子节点包括其中文本节点的访问**
- firstChild--获取第一个元素
- lastChild--获取最后一个元素

概念

- **子节点（或者叫做子）** —— 对应的是直系的子元素。换句话说它们会完全嵌套在指定的一个元素中。举个例子，``和 `` 就是 `` 元素的子元素。
- **子系元素** —— 对应的是所有嵌套在一个指定元素中的元素，包括这些元素的子元素，以此类推得到的所有元素。

### 兄弟节点和父节点

下一个节点（下一个兄弟节点）可以通过 `nextSibling` 访问

上一个节点可以通过 `previousSibling` 访问。





### DOM集合

`childNodes` 看起来就像一个数组。但是它实际上并不是一个数组，而是一个**集合**

这个性质会导致两个重要的结果：

1. 我们可以使用 `for..of` 语法来迭代它：

2. 并不能使用数组的方法，因为它并不是一个数组：

   如果我们想调用数组的方法的话可以通过 `Array.from` 方法来从集合中创建一个“真”的数组

#### 特性

**1.DOM 集合是只读的**

DOM 集合甚至可以说本章中列出的**所有**导航属性都是只读的。

我们不能通过类似 `childNodes[i] = ...` 的操作来替换一个子节点。

2.**DOM 集合是实时的**

除小部分例外之外几乎所有的 DOM 集合都是**实时**的。换句话说，它们都反映的是 DOM 的实时状态。

如果我们保留一个对 `elem.childNodes` 的引用，然后在 DOM 中添加/移除节点，那么这些新加的节点就会自动出现在这个集合中。

3.**不要使用** `for..in` **来循环遍历集合**

`for..in` 循环遍历的是所有列举的属性。集合会有一些“额外”很少用到的属性，这些属性我们通常不会获取到：



### 只获取元素节点

- `children` —— 只获取类型为元素节点的子节点。
- `firstElementChild`，`lastElementChild` —— 第一个和最后一个子元素。
- `previousElementSibling`，`nextElementSibling` —— 兄弟元素。
- `parentElement` —— 父元素。



#### 特例**parentElement**为空 正常来说均为同一个属性

```javascript
alert( document.documentElement.parentNode ); // document
alert( document.documentElement.parentElement ); // null
```

### 表 table中的元素额外提供的方法

#### table元素 

- `table.rows` — 用于表示表中`<tr>` 元素的集合。
- `table.caption/tHead/tFoot` — 用于访问元素 `<caption>、<thead>、<tfoot>`。
- `table.tBodies` —`<tbody>` 元素的集合（根据标准该元素数量可以很多）。

#### thead tfoot tbody  元素提供了 `rows` 属性

- `tbody.rows` — 表内部`<tr>` 元素的集合。

#### tr

- `tr.cells` — 在给定`<tr>` 元素下 `<td>` 和 ` <th>`单元格的集合。
- `tr.sectionRowIndex` — 给定`<tr>`在封闭的`<thead>/<tbody>/<tfoot>` 中 的编号。
- `tr.rowIndex` — 在表中`<tr>` 元素的编号。

#### td和th

- `td.cellIndex` — 在封闭的 tr中单元格的编号。

## 搜索getElement 和querySelector

| Method                   | Searches by... | Can call on an element? | Live? |
| ------------------------ | -------------- | ----------------------- | ----- |
| `getElementById`         | `id`           | -                       | -     |
| `getElementsByName`      | `name`         | -                       | ✔     |
| `getElementsByTagName`   | tag or `'*'`   | ✔                       | ✔     |
| `getElementsByClassName` | class          | ✔                       | ✔     |
| `querySelector`          | CSS-selector   | ✔                       | -     |
| `querySelectorAll`       | CSS-selector   | ✔                       | -     |

### document.getElementById或只用Id

#### 如果元素有 `id` 属性，那么该 `id` 也会有一个同名全局变量。

除非我们声明同名变量

`id` 必须唯一，文档中给定的 `id` 只能有唯一一个元素。

使用 `id` 来直接引用属性，但这仅仅是为了简化。实际开发中，使用 `document.getElementById` 才是最佳选择。

```html
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  alert(elem); // DOM-element with id="elem"
  alert(window.elem); // accessing global variable like this also works
  // 因为里面有破折号，所以不是一个变量名
  alert(window['elem-content']); // ...但可以使用方括号 [...]
</script>
```

### 其他getElementsBy* 使用较少 仅为完整性

- `elem.getElementsByTagName(tag)` 用给定的标签来查找元素，并返回它们的集合。`tag` 参数也可以是“任何标签”的 `"*"`。
- `elem.getElementsByClassName(className)` 返回具有给定 CSS 类的元素。元素也可能含有其他的类。
- `document.getElementsByName(name)` 返回具有给定 `name` 属性的元素，文档范围。因为历史原因而很少使用。在这里提出，只是考虑到了完整性。

### querySelectorAll(css选择器语句) 常用 有力

`elem.querySelectorAll(css)` 的调用将返回与给定 CSS 选择器匹配 `elem` 中的所有元素。

CSS 选择器的伪类，如 `:hover` 和 `:active` 都是被支持的。例如，`document.querySelectorAll(':hover')`将会返回指针现在已经结束的集合

### querySelector

调用 `elem.querySelector(css)` 后，它会返回给定 CSS 选择器的第一个元素。

换句话说，结果与 `elem.querySelectorAll(css)[0]` 相同，但是后者会从**所有**找到的元素中选取一个，而 `elem.querySelector` 只会查找一个。因此编写会更快更简洁。

### matches 理解为正则的验证

[elem.matches(css)](http://dom.spec.whatwg.org/#dom-element-matches) 不会查找任何内容，它只会检查 `elem` 是否匹配给定的 CSS 选择器。它返回 `true` 或者 `false`。

当我们迭代元素（例如数组或者一些其他内容）并试图过滤那些我们感兴趣的元素时，这个方法会很方便。

例如：

```markup
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // 不一定是 document.body.children，也可以是任何集合
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("The archive reference: " + elem.href );
    }
  }
</script>
```

### closest 搜索祖先

祖先是：父类，父类的父类，它的父类等。祖先们一起组成了从元素到顶端的父类链。

`elem.closest(css)` 方法会查找与 CSS 选择器匹配的最接近的祖先。`elem` 自己也会被搜索。

### document.getxx和querySelect的区别

 `"getElementsBy*"` 方法都会返回 **live** 集合。这类集合总是可以反映出文档的当前状态而且在文档变化时，可以自动更新。

`querySelectorAll` 会返回一个**static**集合。就像一个固定的元素数字。

## 节点属性

### DOM节点类

![image-20200315000445392](C:\Project\WEB\js enhance\JavaScript二刷-浏览器.assets\image-20200315000445392.png)

- [EventTarget](https://dom.spec.whatwg.org/#eventtarget) —— 是根的“抽象”类。该类的对象从未被创建。它作为一个基础，为了让所有 DOM 节点都支持所谓的“事件”，

- [Node](http://dom.spec.whatwg.org/#interface-node) —— 也是一个“抽象”类，充当 DOM 节点的基础。它提供了树的核心功能：`parentNode`、`nextSibling`、`childNodes` 等（它们都是 getter）。`Node` 类的对象从未被创建。但是一些具体的节点类却继承自它，例如：`Text` 表示文本节点，`Element` 用于元素节点，以及更多外来的类（如注释节点 `Comment`）。

- [Element](http://dom.spec.whatwg.org/#interface-element) —— 是 DOM 元素的基类。它提供了元素级的导航，比如 `nextElementSibling`、`children` 以及像 `getElementsByTagName`、`querySelector` 这样的搜索方法。浏览器中不仅有 HTML，还会有 XML 和SVG 文档。`Element` 类充当以下更具体类的基类：`SVGElement`、`XMLElement` 和 `HTMLElement`。

- HTMLElement

  —— 最终会成为所有 HTML 元素的基类。由各种 HTML 元素继承：

  - [HTMLInputElement](https://html.spec.whatwg.org/multipage/forms.html#htmlinputelement) —— `` 元素的类，
  - [HTMLBodyElement](https://html.spec.whatwg.org/multipage/semantics.html#htmlbodyelement) —— `` 元素的类，
  - [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/semantics.html#htmlanchorelement) —— `` 元素的类，
  - 等等，每个标记都有可以为自己提供特定属性和方法的类。

### nodeType 属性

- `elem.nodeType == 1` 是元素节点，
- `elem.nodeType == 3` 是文本节点，
- `elem.nodeType == 9` 是 document 对象，

### nodeNmae 和tagName

- `tagName` 属性仅用于 `Element` 节点。

- `nodeName`是为任意Node定义的
  - 对于元素，它的意义与 `tagName` 相同。
  - 对其他节点类型（text、comment 等），则是拥有一个字符串的节点类型。

```javascript
alert( document.body.nodeName ); // BODY
alert( document.body.tagName ); // BODY

<!-- comment -->
    alert( document.body.firstChild.tagName ); // undefined (no element)
    alert( document.body.firstChild.nodeName ); // #comment
    alert( document.tagName ); // undefined (not element)
    alert( document.nodeName ); // #document
```

### innerHTML

用来读取或者修改元素中的HTML

```markup
    alert( document.body.innerHTML ); // read the current contents
    document.body.innerHTML = 'The new BODY!'; // replace it
```

#### 自动修复机制

我们可以尝试插入无效的 HTML，因为浏览器会为我们修复错误：

```markup
    document.body.innerHTML = '<b>test'; // forgot to close the tag
    alert( document.body.innerHTML ); // <b>test</b> (fixed)
```

#### 插入script不会执行

#### innerHTML+= 相当于原来元素重写 

换句话说，`innerHTML+=` 做了以下内容：

1. 移除旧的内容。
2. 新的 `innerHTML` 被书写（旧的和新的相连接）。

**因为内容“零输出”而且被从头重写，所有的图片和其他资源都会被重写加载。**

### outerHTML

`outerHTML` 属性包含元素的完整 HTML。就像是 `innerHTML` 加上元素本身。

**注意：与 `innerHTML`不同，写入到 `outerHTML` 后，不会改变元素。相反，它在外部环境中作为一个整体取代了它。**

我们取出 `<div>...</div>` 的完整 HTML，用 `<p>...</p>` 将其替换。在外部文档中，我们可以看到新的内容而不是 ``<div>。但是旧的 `div` 变量仍然是相同的。

`outerHTML` 赋值时不会修改 DOM 元素。而是从外部上下文中提取它，并插入一个新的 HTML 片段来替代它。

### nodeValue/data

`odeValue` 和 `data` 属性。这两个在实际开发中作用几乎相同，只有细微的差异。所以我们使用 `data`，因为它更短。

```html
<body>
  Hello
  <!-- Comment -->
  <script>
    let text = document.body.firstChild;
    alert(text.data); // Hello

    let comment = text.nextSibling;
    alert(comment.data); // Comment
  </script>
</body>
```

### textContent:纯文本

`textContent` 提供对元素中的 *text* 的访问权限：只提供文本，去掉所有的 `<tag>`。

```markup
<div id="news">
  <h1>Headline!</h1>
  <p>Martians attack people!</p>
</div>

<script>
  // Headline! Martians attack people!
  alert(news.textContent);
</script>
```

- 使用 `innerHTML`，我们将其“作为 HTML” 插入，包含所有 HTML标记。
- 在 `textContent`中，我们将其“作为文本”插入，所有字符都当做字面量处理。

### hidden属性 写法更简洁

```markup
elem.hidden = true;
等同于
style="display:none" 
```

## 特效和属性

|      | 属性                                     | 特性             |
| :--- | :--------------------------------------- | :--------------- |
| 类型 | 一些值，标准化的属性值在规范中有类型描述 | 字符串           |
| 名字 | 键名大小写敏感                           | 键名大小写不敏感 |

### DOM属性 是一个标准对象

- 它可以有很多值。
- 它是大小写敏感的（要写成 `elem.nodeType`，而不是 `elem.NoDeTyPe`）。

```javascript
// 添加属性
document.body.myData = {
  name: 'Caesar',
  title: 'Imperator'
};

alert(document.body.myData.title); // Imperator
// 添加方法
document.body.sayTagName = function() {
  alert(this.tagName);
};

document.body.sayTagName(); // BODY（这个方法中的 "this" 指 document.body）

// 修改原型
Element.prototype.sayHi = function() {
  alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY
```

### HTML特性

当浏览器读取 HTML 文本并根据标签生成 DOM 对象，它会辨别**标准化**特性然后以此创建 DOM 属性,但是非**标准化**的特性则会被忽略

#### 获取标准化的 直接.xx获取

#### 通用获取 可标准化和非标准化

- `elem.hasAttribute(name)` —— 检验是否拥这个特性。
- `elem.getAttribute(name)` —— 获取到这个特性值。
- `elem.setAttribute(name, value)` —— 设置这个特性值。
- `elem.removeAttribute(name)` —— 移除这个特性。

### 属性 和 特性的同步

```html
<script>
  let input = document.querySelector('input');

  // 特性 => 属性
  input.setAttribute('id', 'id');
  alert(input.id); // id（更新了）

  // 属性 => 特性
  input.id = 'newId';
  alert(input.getAttribute('id')); // newId（更新了）
</script>
```

#### 特例 `input.value` 只能从特性同步到属性 反之不行

```js
  let input = document.querySelector('input');

  // 特性 => 属性
  input.setAttribute('value', 'text');
  alert(input.value); // text

  // 这操作无效 属性 => 特性
  input.value = 'newValue';
  alert(input.getAttribute('value')); // text（没有更新！）
```

### 特殊 href属性和特性

`href` DOM 属性总是一个绝对路径的，而特性值只包含相对路径或者只包含 `#hash` 这一部分。

```html
<a id="a" href="#hello">link</a>
<script>
  // 特性
  alert(a.getAttribute('href')); // #hello

  // 属性
  alert(a.href ); // 绝对路径 http://site.com/page#hello
</script>
```

### 非标准化的特性dataset

**所有以 “data-” 开头的特性值可以给编程人员正常使用，同时它还是 `dataset` 合法值。**

例如, 如果一个 `elem` 有一个键名是 `"data-about"` 的特性，那么可以通过 `elem.dataset.about` 取到这个合法值。

像这样：

```markup
<body data-about="Elephants">
<script>
  alert(document.body.dataset.about); // Elephants
</script>
```

## 修改文档

### 生成元素

```
document.createElement(tag)
```

用给定的标签创建一个新*元素节点（element node）*：

```
document.createTextNode(text)
```

用给定的文本创建一个**文本节点**

### 插值

#### 从父元素插值 

**所有这些插入节点的操作都会返回节点。**

```
parentElem.appendChild(node)
```

将 `node` 作为 `parentElem` 最后一个子元素。

```
parentElem.insertBefore(node, nextSibling)
```

在 `parentElem` 的 `nextSibling` 插入 `node`。

```
parentElem.replaceChild(node, oldChild)
```

将 `parentElem` 的 `oldChild` 替换为 `node`。

#### 元素插入

- `node.append(...nodes or strings)` —— 在 `node` 末尾插入节点或者字符串，
- `node.prepend(...nodes or strings)` —— 在 `node` 开头插入节点或者字符串，
- `node.before(...nodes or strings)` —— 在 `node` 前面插入节点或者字符串，
- `node.after(...nodes or strings)` —— 在 `node` 后面插入节点或者字符串，
- `node.replaceWith(...nodes or strings)` —— 将 `node` 替换为节点或者字符串。

所有这些方法都接受 DOM 节点或者文本字符串列表形式。如果给定的是一个字符串，那么它将以文本节点（text node）形式插入。

#### 相邻插入

`elem.insertAdjacentHTML(where, html)`。

**该方法第一个参数是代码字符串，指定相对于 `elem` 的插入位置**，必须是以下四个值之一：

- `"beforebegin"` —— 在 `elem` 开头位置前插入 `html`，
- `"afterbegin"` —— 在 `elem` 开头位置后插入 `html`（译注：即 `elem` 元素内部的第一个子节点之前），
- `"beforeend"` —— 在 `elem` 结束位置前插入 `html`（译注：即 `elem` 元素内部的最后一个子节点之后），
- `"afterend"` —— 在 `elem` 结束位置后插入 `html`。

**第二个参数是 HTML 字符串，会以 HTML 的形式插入到页面中。**

##### 变种

- `elem.insertAdjacentText(where, text)` —— 一样的语法，只不过把 `text` 作为“文本”直接插入到 HTML 中，
- `elem.insertAdjacentElement(where, elem)` —— 一样的语法，只不过插入的是一个元素。

### 克隆节点

- `elem.cloneNode(true)` 方法用来对一个元素进行“深”克隆 —— 包括所有特性和子元素。
- `elem.cloneNode(false)` 方法只克隆该元素本身，不对子元素进行克隆。



例子

```markup
<script>
  let div2 = div.cloneNode(true); // 克隆信息
  div2.querySelector('strong').innerHTML = 'Bye there!'; // 改变克隆信息

  div.after(div2); // 显示克隆信息在已经存在的 div 后
</script>
```

### 移除

从 `parentElem` 中移除 `node`（假设它是元素中的子元素）。

```
parentElem.removeChild(node)
```

从当前位置移除 `node`。

```
node.remove() 
```

**所有插入操作都会从节点原来的位置把节点移除掉。**

### document.write

**只能在页面加载的时候调用 `document.write`**

如果在加载完成以后，渲染好的页面会被擦除。

例子

```markup
<p>Somewhere in the page...</p>
<script>
  document.write('<b>Hello from JS</b>');
</script>
<p>The end</p>
```

### 文档片段 很少明确用

`DocumentFragment` 是一个特殊的 DOM 节点，用于传递节点列表的包装器。 

我们可以将其他节点附加到它上面，但是当我们将其插入到某个地方的时候，会以其内容的形式插入。

```html
<ul id="ul"></ul>

<script>
function getListContent() {
  let fragment = new DocumentFragment();

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }

  return fragment;
}

ul.append(getListContent()); // (*)
</script>
```

## 样式和类

### className  全部替换

 `elem.className` 对应于 `"class"` 特性

如果我们为 `elem.className` 分配一些东西，它将替换所有的类字符串

### classList  像list一样灵活操作

`elem.classList` 是一个特殊对象，它拥有 `add/remove/toggle` 的类方法。

- `elem.classList.add/remove("class")` —— 添加/移除类。
- `elem.classList.toggle("class")` —— 如果类存在就移除，否则添加。
- `elem.classList.contains("class")` —— 返回 `true/false`，检查给定类。

此外，`classList` 是可迭代的，因此我们可以像下述方法一样列出所有类：

```html
<body class="main page">
  <script>
    for (let name of document.body.classList) {
      alert(name); // main, and then page
    }
  </script>
</body>
```

### 元素样式

对于多单词，使用 camelCase：

```javascript
background-color  => elem.style.backgroundColor
z-index           => elem.style.zIndex
border-left-width => elem.style.borderLeftWidth
```

像 `-moz-border-radius`，`-webkit-border-radius` 这样的浏览器前缀，也遵循同样的规则，比如：

```javascript
button.style.MozBorderRadius = '5px';
button.style.WebkitBorderRadius = '5px';
```

### 重置样式属性

```javascript
// if we run this code, the <body> "blinks"
document.body.style.display = "none"; // hide

setTimeout(() => document.body.style.display = "", 1000); // 恢复正常
```

### 以字符串的形式分配样式

`style.cssText`

```html
<div id="div">Button</div>

<script>
  // we can set special style flags like "important" here
  div.style.cssText=`color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
  `;

  alert(div.style.cssText);
</script>
```

通过设置属性：`div.setAttribute('style', 'color: red...')` 也可以实现同样的目的。

### 在js中修改css必须带上单位

### 计算样式 读取样式

**`style` 属性仅对 `"style"` 属性值进行操作，而不是任何 CSS 级联 无法读取css中部署的css。**



```javascript
getComputedStyle(element[, pseudo])
```

element

用来读取样式值的的元素。

pseudo

假如给定一个伪元素，例如：`::before`。空字符串或无参意味着元素本身。

```html
<head>
  <style> body { color: red; margin: 5px } </style>
</head>
<body>

  <script>
    let computedStyle = getComputedStyle(document.body);

    // 现在我们可以读出页边距和颜色了

    alert( computedStyle.marginTop ); // 5px
    alert( computedStyle.color ); // rgb(255, 0, 0)
  </script>

</body>
```

#### 读取时必须使用完整的属性名 

##### 奇怪的特性

比如，一些浏览器（Chrome）在下述文档中显示 `10px`，一些浏览器（Firefox）—— 则效果不同：

```html
<style>
  body {
    margin: 10px;
  }
</style>
<script>
  let style = getComputedStyle(document.body);
  alert(style.margin); // 在 Firefox 中是空字符串
</script>
```

### **“Visited” links styles are hidden!**

CSS 中也有一个限制，禁止在 `:visited` 中应用更改几何的样式。这是为了保证一个不好的页面没有办法来测试是否访问了链接，从而窥探隐私。



## 元素的尺寸和滚动

### 几何学

![image-20200317003822432](C:\Project\WEB\js enhance\JavaScript二刷-浏览器.assets\image-20200317003822432.png)

### 最外层的几何属性

#### offsetParent

`offsetParent` 是最近的祖先元素:

1. CSS 定位（`position` 为 `absolute`、`relative` 或 `fixed`），
2. 或者 `<td>`、`<th>` `<table>`，
3. 或者 `body`

##### offsetnull的值为空的情况

1. 未显示的元素（`display:none` 或者不在文档中）。
2. `<body>` 与 `<html>`。
3. `position:fixed` 的元素。

#### offsetLeft/Top 内部元素和外部的差

```HTML
<main style="position: relative" id="main">
  <article>
    <div id="example" style="position: absolute; left: 180px; top: 180px">...</div>
  </article>
</main>
<script>
  alert(example.offsetParent.id); // main
  alert(example.offsetLeft); // 180 (note: a number, not a string "180px")
  alert(example.offsetTop); // 180
</script>
```

### 外部的高度和宽度

#### offsetWidth

外部宽度 = 边框x2+内边距x2+内容+滚动条

`offsetWidth = border*2+padding*2+content+scoll`

#### offsetHeight

外部高度= 边框x2+内边距x2+内容 +[滚动条]（如果是横向）

#### 未显示的几何元素的属性值为0/null

用它来检查一个元素是否被隐藏，像这样：

```javascript
function isHidden(elem) {
  return !elem.offsetWidth && !elem.offsetHeight;
}
```

### 内边框获取 非单border还要考虑滚动条

- `clientLeft = 25` ——————左边框宽度+【滚动条宽度】
- `clientTop = 25` —————— 上边框宽度+【滚动条宽度】

### 元素边框内区域大小

区域宽度 = 内容+paddingx2+[滚动条]

`clienWidth = conent+padding*2+[scoll]`

区域高度= 内容+paddingx2+[滚动条]

### 可滚动区域大小

`scrollWidth/scrollHeight` 包括滚动（隐藏）部分：



```javascript
// 扩展元素高度到完全高度
element.style.height = `${element.scrollHeight}px`;
```

### 已滚动区域

`scrollTop` 就是 “竖直滚动了多少” 的意思。

`scrollLeft` 就是 “横向滚动了多少” 的意思。



### `getComputedStyle(elem).width` 与 `elem.clientWidth` 之间的差别

不同点：

1. `clientWidth` 值是数值，然而 `getComputedStyle(elem).width` 返回一个包含 `px` 的字符串。
2. `getComputedStyle` 可能返回非数值的结果，例如内联元素的 `"auto"`。
3. `clientWidth` 是元素的内部内容区域加上内间距，而 CSS 宽度（具有标准的 `box-sizing`）是内部**不包括内间距**的空间区域。
4. 如果有一个滚动条，一般浏览器保留它的空间，有的浏览器从 CSS 宽度中减去这个空间（因为它不再用于内容），而有些则不这样做。`clientWidth` 属性总是相同的：如果保留了滚动条，那么它的宽度将被删去。

## window的尺寸和滚动

### 窗口的宽度/高度

`document.documentElement.clientHeight/clientWidh `返回文档可见部分（可用内容）的宽高

`window.innerWidth/innerHeight` 是忽略滚动条。

### 文档的高度/宽度

#### 文档元素的宽高是 

`documentElement.clientWidth/Height`

#### 可靠的窗口大小

```javascript
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
```

### 得到当前滚动

#### 竖直方向的滚动

`window.pageYOffset`

#### 水平方向的滚动

`window.pageXOffset`

### 通用的滚动解决方案

#### scrollBy

 `scrollBy(x,y)` 滚动页面至相对于现在位置的 (x, y) 位置。

例如，`scrollBy(0,10)` 页面向下滚动 `10px`。

#### scrollTo

 `scrollTo(pageX,pageY)` 滚动页面至相对于文档的左上角的 (pageX, pageY) 位置。就好像设置 `scrollLeft/scrollTop`。

### 滚动到视图

以元素位置为基准作为顶部或底部

`elem.scrollIntoView(top)` 会使 `elem` 滚动到可视范围。它有一个结论：

- 如果 `top=true`（默认值），页面滚动使 `elem` 会出现到窗口顶部。元素的上边缘与窗口顶部对齐。
- 如果 `top=false`，则页面滚动使 `elem` 会出现在窗口底部。元素的下边缘与窗口底部对齐。

### 滚动的禁止和恢复 

禁止

`document.body.style.overflow = "hidden"`

恢复

`document.body.style.overflow = ''`

## 坐标

### 获取元素坐标对象

`elem.getBoundingClientRect()` 方法返回一个 `elem` 的窗口坐标对象

- `top` — 元素顶部边缘的 Y 坐标
- `left` — 元素左边边缘的 X 坐标
- `right` — 元素右边边缘的 X 坐标
- `bottom` — 元素底部边缘的 Y 坐标

### 基于坐标返回顶层元素

调用 `document.elementFromPoint(x, y)` 方法返回窗口坐标 `(x, y)` 中最顶层的元素。

```javascript
let elem = document.elementFromPoint(x, y);
```

#### 如果坐标为负数或者超出 则返回null

### 文档坐标 

- `pageY` = `clientY` + 文档垂直部分滚动的高度。
- `pageX` = `clientX` + 文档水平部分滚动的宽度。

```javascript
// 获取元素的文档坐标
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
```

# 事件

## 浏览器事件

**鼠标事件：**

- `click` —— 当鼠标点击一个元素时（触摸屏设备在 tap 时生成）。
- `contextmenu` —— 当鼠标右击一个元素时。
- `mouseover` / `mouseout` —— 当鼠标光标移入或移出一个元素时。
- `mousedown` / `mouseup` —— 当鼠标按下/释放一个元素时。
- `mousemove` —— 当鼠标移出时。

**表单元素事件**：

- `submit` —— 当访问者提交了一个 `` 时。
- `focus` —— 当访问者聚焦一个元素时，例如 ``。

**键盘事件**：

- `keydown` and `keyup` —— 当访问者按下然后松开按钮时。

**Document 事件**：

- `DOMContentLoaded` —— 当加载和处理 HTML 时，DOM 将会被完整地构建。

**CSS 事件**：

- `transitionend` —— 当 CSS 动画完成时。



### 事件处理器

#### HTML 属性分发

处理器可以设置在 HTML 名为 `on<event>` 的属性中

```html
<input value="Click me" onclick="alert('Click!')" type="button">
```

#### DOM 属性分发 

 `on<event>` 来分发处理器

```html
<input id="elem" type="button" value="Click me">
<script>
  elem.onclick = function() {
    alert('Thank you');
  };
</script>
```



**处理器总是在 DOM 属性中：HTML 属性只是初始化它的方法之一**

移除处理器 —— 分发 `elem.onclick = null`

### 处理器中的`this`的值就是元素

### 事件分发需要注意的

#### 是否带括号

```javascript
// DOM 
button.onclick = sayThanks;

//HTML
<input type="button" id="button" onclick="sayThanks()">
```

#### **不要为处理器使用 `setAttribute`**。

这样的调用会失效：

```javascript
// 单击 <body> 将产生错误,
// 因为属性总是字符串，函数就变成了字符串。
document.body.setAttribute('onclick', function() { alert(1) });
```

#### DOM属性大小写敏感

### addEventistener 分发多个处理器

语法：

```javascript
element.addEventListener(event, handler[, phase]);
// event:事件名
// handler：处理器函数
// phase:参数
```

#### 添加多个事件

```html
<input id="elem" type="button" value="Click me"/>

<script>
  function handler1() {
    alert('Thanks!');
  };

  function handler2() {
    alert('Thanks again!');
  }

  elem.onclick = () => alert("Hello");
  elem.addEventListener("click", handler1); // Thanks!
  elem.addEventListener("click", handler2); // Thanks again!
</script>
```

#### 移除处理器

使用 `removeEventListener` 移除处理器 并且要将函数存储在一个变量中：

```javascript
function handler() {
  alert( 'Thanks!' );
}

input.addEventListener("click", handler);
// ....
input.removeEventListener("click", handler);
```

#### 有些事件只能通过addEventListener 来监听

有些事件不能通过 DOM 属性分配。必须使用 `addEventListener`。

事件 `transitionend`（CSS 动画完成）就是如此。

##### 例子

```html
<style>
  input {
    transition: width 1s;
    width: 100px;
  }

  .wide {
    width: 300px;
  }
</style>

<input type="button" id="elem" onclick="this.classList.toggle('wide')" value="Click me">

<script>
  elem.ontransitionend = function() {
    alert("DOM property"); // doesn't work
  };

  elem.addEventListener("transitionend", function() {
    alert("addEventListener"); // 动画完成时显示
  });
</script>
```

### 事件对象

当事件发生时，浏览器会创建一个**事件对象**，将信息放入其中，并将其作为参数传入处理器。

#### 属性

`event` 对象的一些属性 还有很多其他属性 取决于事件类型：

- `event.type`

  事件类型，这里是 `"click"`。

- `event.currentTarget`

  处理事件的元素。这与 `this` 相同，除非你将 `this` 绑定到其他东西上，之后 `event.currentTarget` 就会有效了。

- `event.clientX / event.clientY`

  鼠标事件中光标相对于窗口的坐标。

#### 可通过HTML访问

如果我们在 HTML 中分发一个处理器，我们也可以使用 `event` 对象，如下所示：

```html
<input type="button" onclick="alert(event.type)" value="Event type">
```

### 对象处理器

使用 `addEventListener` 将对象赋值为事件处理器

当 `addEventListener` 接收一个对象作为处理器时候，就会调用 `object.handleEvent(event)` 来处理事件

#### 使用一个类进行包装

```html
<button id="elem">Click me</button>

<script>
  class Menu {
    handleEvent(event) {
      switch(event.type) {
        case 'mousedown':
          elem.innerHTML = "Mouse button pressed";
          break;
        case 'mouseup':
          elem.innerHTML += "...and released.";
          break;
      }
    }
  }

  let menu = new Menu();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);
</script>
```

## 冒泡和捕获

### 冒泡

**当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序。**

#### 几乎所有的事件都会冒泡 

大部分事件都会冒泡  但比如`focus`事件是不会冒泡的

### 目标元素

**引发事件的那个嵌套层级最深的元素被称为目标元素,可以通过 `event.target` 访问。**

**目标元素的名称：`event.target.tagName`** 

**注意结果的均为大写 **

注意与 `this`（=`event.currentTarget`）之间的区别：

- `event.target` —— 是引发事件的“目标”元素，它在冒泡过程中不会发生变化。
- `this` —— 是“当前”元素，其中有一个当前正在运行的处理程序。

### 停止冒泡  慎用

用于停止冒泡的方法是 `event.stopPropagation()`

```html
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

#### 阻止多个处理程序

如果一个元素在一个事件上有多个处理程序，即使其中一个停止冒泡，其他处理程序仍会执行。

换句话说，`event.stopPropagation()` 停止向上移动，但是当前元素上的其他处理程序都会继续运行。

有一个 `event.stopImmediatePropagation()` 方法，可以用于停止冒泡，并阻止当前元素上的处理程序运行。使用该方法之后，其他处理程序就不会被执行。

### 获取当前的阶段

- `event.eventPhase` —— 当前阶段（capturing=1，target=2，bubbling=3）。

### 捕获 很少用

[DOM 事件](http://www.w3.org/TR/DOM-Level-3-Events/)标准描述了事件传播的 3 个阶段：

1. 捕获阶段（Capturing phase）—— 事件（从 Window）向下走近元素。
2. 目标阶段（Target phase）—— 事件到达目标元素。
3. 冒泡阶段（Bubbling phase）—— 事件从元素上开始冒泡。



![image-20200326232042841](C:\Project\WEB\js enhance\JavaScript二刷-浏览器.assets\image-20200326232042841.png)

点击 `td`，事件首先通过祖先链向下到达元素（捕获阶段），然后到达目标（目标阶段），最后上升（冒泡阶段），在途中调用处理程序。



实现捕获阶段捕获事件，我们需要将处理程序的 `capture` 选项设置为 `true`：

```javascript
elem.addEventListener(..., {capture: true})
// 或者，用 {capture: true} 的别名 "true"
elem.addEventListener(..., true)
```

## 事件委托

它通常用于为许多相似的元素添加相同的处理，但不仅限于此。

算法：

1. 在容器（container）上放一个处理程序。
2. 在处理程序中 —— 检查源元素 `event.target`。
3. 如果事件发生在我们感兴趣的元素内，那么处理该事件。

好处：

- 简化初始化并节省内存：无需添加许多处理程序。
- 更少的代码：添加或移除元素时，无需添加/移除处理程序。
- DOM 修改 ：我们可以使用 `innerHTML` 等，来批量添加/移除元素。

事件委托也有其局限性：

- 首先，事件必须冒泡。而有些事件不会冒泡。此外，低级别的处理程序不应该使用 `event.stopPropagation()`。
- 其次，委托可能会增加 CPU 负载，因为容器级别的处理程序会对容器中任意位置的事件做出反应，而不管我们是否对该事件感兴趣。但是，通常负载可以忽略不计，所以我们不考虑它。

#### 对于文档级别的委托 **使用的是 `addEventListener`**

当我们将事件处理程序分配给 `document` 对象时，我们应该始终使用 `addEventListener`，而不是 `document.on`，因为后者会引起冲突：新的处理程序会覆盖旧的处理程序。

#### 行为模式

我们还可以使用事件委托将“行为（behavior）”以 **声明方式** 添加到具有特殊特性（attribute）和类的元素中。

行为模式分为两个部分：

1. 我们将自定义特性添加到描述其行为的元素。
2. 用文档范围级的处理程序追踪事件，如果事件发生在具有特定特性的元素上 —— 则执行行为（action）。

## 浏览器默认行为

### 默认行为举例

有很多默认的浏览器行为：

- `mousedown` —— 开始选择（移动鼠标进行选择）。
- 在 `` 上的 `click` —— 选中/取消选中的 `input`。
- `submit` —— 点击 `` 或者在表单字段中按下 Enter 键会触发该事件，之后浏览器将提交表单。
- `keydown` —— 按下一个按键可能会导致将字符添加到字段，或者触发其他行为。
- `contextmenu` —— 事件发生在鼠标右键单击时，触发的行为是显示浏览器上下文菜单。
- ……还有更多……

### 阻止浏览器行为

有两种方式来告诉浏览器我们不希望它执行默认行为：

- 主流的方式是使用 `event` 对象。有一个 `event.preventDefault()` 方法。
- 如果处理程序是使用 `on<event>`（而不是 `addEventListener`）分配的，那返回 `false` 也同样有效,唯一返回值有意义的事件处理程序



#### 行为是个链 一旦阻止 后续事件将不会运行

某些事件会相互转化。如果我们阻止了第一个事件，那就没有第二个事件了。

例如，在 `<input>` 字段上的 `mousedown` 会导致在其中获得焦点，以及 `focus` 事件。如果我们阻止 `mousedown`事件，在这就没有焦点了。

```html
// 这里点击第二个没有任何效果
<input value="Focus works" onfocus="this.value=''">
<input onmousedown="return false" onfocus="this.value=''" value="Click me">
```

因为浏览器行为在 `mousedown` 上被取消



### 告诉浏览器该行为不会被阻止 提升交互流畅度

`addEventListener` 的可选项 `passive: true` 向浏览器发出信号，表明处理程序将不会调用 `preventDefault()`。

如未声明 则页面的交互会有一断事件的判断期  加上这个选项后  提高了指定交互动作的流畅程度‘

### 浏览器记录默认行为是否被阻止的属性

如果默认行为被阻止，那么 `event.defaultPrevented` 属性为 `true`，否则为 `false`。

#### 替代 停止冒泡一种方法

使用 `event.defaultPrevented` 来代替，来通知其他事件处理程序，该事件已经被处理。

```html
<p>Right-click for the document menu (added a check for event.defaultPrevented)</p>
<button id="elem">Right-click for the button menu</button>

<script>
  elem.oncontextmenu = function(event) {
    event.preventDefault();
    alert("Button context menu");
  };

  document.oncontextmenu = function(event) {
    if (event.defaultPrevented) return;

    event.preventDefault();
    alert("Document context menu");
  };
</script>
```



## 生成自定义事件

### 事件构造器

```javascript
let event = new Event(event type[, options]);
```

参数：

- **event type** —— 可以是任何字符串，比如 `"click"` 或者我们自己喜欢的 `"hey-ho!"`。

- **options** —— 具有两个可选属性的对象：

  - `bubbles: true/false` —— 如果是 `true`，那么事件冒泡。
  - `cancelable: true/false` —— 如果 `true`，那么“默认动作”就会被阻止。之后我们会看到对于自定义事件，这些意味着什么。

  默认情况下，它们都是 false：`{bubbles: false, cancelable: false}`

### 事件派遣

事件对象被创建后，我们应该调用 `elem.dispatchEvent(event)` 在元素上“运行”它。

```html
<button id="elem" onclick="alert('Click!');">Autoclick</button>

<script>
  let event = new Event("click");
  elem.dispatchEvent(event);
</script>
```

### 区分是用户行为还是js生成

`event.isTrusted` 属性为 `true`，则事件来自真实用户的动作，为 `false` ，则说明事件由脚本生成。

### 鼠标事件 键盘事件 和其他内置

- `UIEvent`（UI 事件）
- `FocusEvent`（焦点事件）
- `MouseEvent`（鼠标事件）
- `WheelEvent`（滚轮事件）
- `KeyboardEvent`（键盘事件）
- ...

如果我们想要创建这样的事件，我们应该使用它们而不是“新事件”。例如，`new MouseEvent("click")`。

#### 正确的构造函数允许为该类型的事件指定标准属性

```javascript
let event = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 100
});

alert(event.clientX); // 100
```

### new CustomEvent 可附加属性的自定义事件

从技术上来说，CustomEvent和 `Event` 一样。除了一点不同之外。

在第二个参数（对象）中，我们可以在事件中为我们想要传递的任何自定义信息添加一个附加的属性 `detail`。  

`detail` 属性可以有任何数据 可以避免与其他事件冲突 

```html
<h1 id="elem">Hello for John!</h1>

<script>
  // additional details come with the event to the handler
  elem.addEventListener("hello", function(event) {
    alert(event.detail.name);
  });

  elem.dispatchEvent(new CustomEvent("hello", {
    detail: { name: "John" }
  });
</script>
```

### 调用阻止默认行为

如果 `cancelable:true` 被指定，那么我们可以在脚本生成的事件上调用 `event.preventDefault()`。



如果事件有一个非标准的名称，那么浏览器就不知道它，而且它也没有“默认浏览器动作”。

但是事件生成代码可能会在 `dispatchEvent` 之后安排一些动作。

调用 `event.preventDefault()` 是处理器发送不应该执行这些操作的信号的一种方法

### 事件是同步形式执行的

事件通常都是同步处理的。也就是说：如果浏览器正在处理 `onclick`，而且在处理过程中发生了一个新的事件，那么它将等待，直到 `onclick` 处理完成。



# 事件细节

## 鼠标事件基础

### 鼠标事件类型

#### 简单事件

常用的简单事件是：

- `mousedown/mouseup`

  在元素上单击/释放鼠标按钮。

- `mouseover/mouseout`

  鼠标指针从一个元素上移入/出。

- `mousemove`

  鼠标每次移动到元素上时都会触发事件。

#### 复杂事件 由简单构成 提高便利性

- `click`

  如果使用鼠标左键，则在 `mousedown` 及 `mouseup` 相继触发后触发该事件。

- `contextmenu`

  如果使用鼠标右键，则在 `mousedown` 后触发。

- `dblclick`

  在对元素进行双击后触发。

#### 事件顺序

在单个动作触发多个事件时，它们的顺序是固定的

比如，在按下鼠标按钮时，单击会首先触发 `mousedown`，然后释放鼠标按钮时，会触发 `mouseup` 和 `click`。即遵循 `mousedown` → `mouseup` → `click` 的顺序



### 获取按钮 which

`which` 允许区分 “right-mousedown” 和 “left-mousedown”

有三个可能的值：

- `event.which == 1` —— 左按钮
- `event.which == 2` —— 中间按钮
- `event.which == 3` —— 右按钮

### 组合键

所有的鼠标事件都包含有关按下的组合键信息。

属性：

- `shiftKey`
- `altKey`
- `ctrlKey`
- `metaKey` (Cmd for Mac)



例子

```html
<button id="button">Alt+Shift+Click on me!</button>

<script>
  button.onclick = function(event) {
    if (event.altKey && event.shiftKey) {
      alert('Hooray!');
    }
  };
</script>
```

#### mac 上**通常使用** `Cmd` **而不是** `Ctrl`

在 Windows 和 Linux 上修改键是 Alt、Shift 和 Ctrl。在 Mac 上还有：Cmd，它对应于属性 `metaKey`。

在大多数情况下，当 Windows/Linux 使用 Ctrl 时，Mac 的用户会使用 Cmd。

### 事件坐标 

所有的鼠标事件都有两种形式的坐标：

1. 对于窗口而言：`clientX` 和 `clientY`。
2. 对于文档而言：`pageX` 和 `pageY`。

### Mousedown 双击不选择文本

鼠标点击有一个让人不安的副作用。双击可以选择文本。

文本选择是 `mousedown` 事件的默认浏览器操作。因此比较好的解决方案是处理 `mousedown` 并阻止它发生

```html

<div ondblclick="alert('Click!')" onmousedown="return false">
  Double-click me
</div>
```

#### 防止选择 css解决方案

无法选择该文本

```html
<style>
  b {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>

Before...
<b ondblclick="alert('Test')">
  Unselectable
</b>
...After
```

#### 取消选择

```html
Before...
<b ondblclick="getSelection().removeAllRanges()">
  Double-click me
</b>
...After
```

#### 防止复制

复制事件 oncopy

```html
<div oncopy="alert('Copying forbidden!');return false">
  Dear user,
  The copying is forbidden for you.
  If you know JS or HTML, then you can get everything from the page source though.
</div>
```

## 移动

### relatedTarget

对于 `mouseover`：

- `event.target` —— 是鼠标经过的那个元素。
- `event.relatedTarget` —— 是鼠标上一次经过的元素。

`mouseout` 则与之相反：

- `event.target` —— 是鼠标离开的元素。
- `event.relatedTarget` —— 是当前指针位置下的（鼠标进入的）元素。

#### 可能为null

当鼠标不是来源于另一个元素，而是窗口以外,或者是离开了窗口 此时 relatedTarget的值为null

### 事件频率

浏览器一直检查鼠标的位置。如果它注意到鼠标变化了，那么就会触发相应的事件。

这意味着如果访问者非常快地移动鼠标，那么 DOM 元素就会被跳过

### 进入子元素 时额外的mouseout

**根据浏览器逻辑，鼠标光标在任意时间只会位于单个元素上 —— 嵌套最多的那个（而且是 z-index 最大的那个）。**

因此如果它转到另一个元素（甚至是一个子代），那么它将离开先前的那个。就这么简单。

### 忽略元素内部的移入移出

`mouseenter/mouseleave` 事件类似于 `mouseover/mouseout`。当鼠标指针移入/移出元素时，它们也会被触发。

但有两个不同之处：

1. 元素内部的转换不会有影响。
2. `mouseenter/mouseleave` 事件不会冒泡。

#### 由于无法冒泡 所以无法使用事件委托



