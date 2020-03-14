

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

- `table.rows` — 用于表示表中 元素的集合。
- `table.caption/tHead/tFoot` — 用于访问元素 `、、。
- `table.tBodies` — 元素的集合（根据标准该元素数量可以很多）。

#### thead tfoot tbody  元素提供了 `rows` 属性

- `tbody.rows` — 表内部 元素的集合。

#### tr

- `tr.cells` — 在给定 元素下 ` 和 ` 单元格的集合。
- `tr.sectionRowIndex` — 在封闭的 中 的编号。
- `tr.rowIndex` — 在表中 元素的编号。

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