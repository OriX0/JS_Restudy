# Frame和window

## 弹窗和window方法

有一些任务在使用弹窗，例如进行 OAuth 授权（使用 Google/Facebook/… 登陆），因为：

1. 弹窗是一个独立的窗口，具有自己的独立 JavaScript 环境。因此，使用弹窗打开一个不信任的第三方网站是安全的。
2. 打开弹窗非常容易。
3. 弹窗可以导航（修改 URL），并将消息发送到 opener 窗口（译注：即打开弹窗的窗口）。

### 阻止弹窗

**为了杜绝弹窗的滥用  如果弹窗是在用户触发的事件处理程序（如 `onclick`）之外调用的，大多数浏览器都会阻止此类弹窗。**

```javascript
// 弹窗被阻止
window.open('https://javascript.info');

// 弹窗被允许
button.onclick = () => {
  window.open('https://javascript.info');
};
```

#### 带有延迟的弹窗可能被接受

谷歌可正常打开

Firefox 可以接受 2000ms 或更短的延迟，但是超过这个时间 —— 则移除“信任”

```javascript
// 3 秒后打开弹窗
setTimeout(() => window.open('http://google.com'), 3000);
```

### 打开一个窗口

#### 语法

```js
window.open(url, name, params)
```

##### url

要在新窗口中加载的 URL。

##### name

新窗口的名称。每个窗口都有一个 `window.name`，在这里我们可以指定哪个窗口用于弹窗。

如果已经有一个这样名字的窗口 —— 将在该窗口打开给定的 URL，否则会打开一个新窗口。

##### params 如果为空 则使用默认配置

`params` 的设置项：

- 位置:
  - `left/top`（数字）—— 屏幕上窗口的左上角的坐标。这有一个限制：不能将新窗口置于屏幕外（offscreen）。
  - `width/height`（数字）—— 新窗口的宽度和高度。宽度/高度的最小值是有限制的，因此不可能创建一个不可见的窗口。
- 窗口功能： 如果为空则为假no
  - `menubar`（yes/no）—— 显示或隐藏新窗口的浏览器菜单。
  - `toolbar`（yes/no）—— 显示或隐藏新窗口的浏览器导航栏（后退，前进，重新加载等）。
  - `location`（yes/no）—— 显示或隐藏新窗口的 URL 字段。Firefox 和 IE 浏览器不允许默认隐藏它。
  - `status`（yes/no）—— 显示或隐藏状态栏。同样，大多数浏览器都强制显示它。
  - `resizable`（yes/no）—— 允许禁用新窗口大小调整。不建议使用。
  - `scrollbars`（yes/no）—— 允许禁用新窗口的滚动条。不建议使用。

### 窗口访问弹窗 

```javascript
let newWindow = open('/', 'example', 'width=300,height=300')
newWindow.focus();

alert(newWindow.location.href); // (*) about:blank，加载尚未开始 新窗口尚未加载完毕

newWindow.onload = function() {
  let html = `<div style="font-size:30px">Welcome!</div>`;
  newWindow.document.body.insertAdjacentHTML('afterbegin', html);
};
```

### 弹窗访问窗口

弹窗也可以使用 `window.opener` 来访问 opener 窗口。

**除了弹窗之外，对其他所有窗口来说，`window.opener` 均为 `null`。**

```javascript
// 使用test替换当前窗口的内容
let newWin = window.open("about:blank", "hello", "width=200,height=200");

newWin.document.write(
  "<script>window.opener.document.body.innerHTML = 'Test'<\/script>"
);
```

### 弹窗关闭

关闭一个窗口：`win.close()`。

检查一个窗口是否被关闭：`win.closed`。

如果 `window` 不是通过 `window.open()` 创建的，那么大多数浏览器都会忽略 `window.close()`。因此，`close()` 只对弹窗起作用。

如果窗口被关闭了，那么 `closed` 属性则为 `true`。 用于检查窗口是否关闭

### 调整大小和滚动 浏览器限制仅用于弹窗

有一些方法可以移动一个窗口，或者调整一个窗口的大小：

- `win.moveBy(x,y)`

  将窗口相对于当前位置向右移动 `x` 像素，并向下移动 `y` 像素。允许负值（向上/向左移动）。

- `win.moveTo(x,y)`

  将窗口移动到屏幕上的坐标 `(x,y)` 处。

- `win.resizeBy(width,height)`

  根据给定的相对于当前大小的 `width/height` 调整窗口大小。允许负值。

- `win.resizeTo(width,height)`

  将窗口调整为给定的大小。

还有 `window.onresize` 事件。

- `win.scrollBy(x,y)`

  相对于当前位置，将窗口向右滚动 `x` 像素，并向下滚动 `y` 像素。允许负值。

- `win.scrollTo(x,y)`

  将窗口滚动到给定坐标 `(x,y)`。

- `elem.scrollIntoView(top = true)`

  滚动窗口，使 `elem` 显示在 `elem.scrollIntoView(false)` 的顶部（默认）或底部。

这里也有 `window.onscroll` 事件。

#### 无法最大化和最小化 js没有该权限

### 弹窗的聚焦和失焦

由于之前的滥用 浏览器已经禁用此类代码的措施。保护用户免受广告和恶意页面的侵害的限制有很多。这取决于浏览器。

尽管如此，还是有一些事情可以使用它们来完成。

例如：

- 当我们打开一个弹窗时，在它上面执行 `newWindow.focus()` 是个好主意。以防万一，对于某些操作系统/浏览器组合（combination），它可以确保用户现在位于新窗口中。
- 如果我们想要跟踪访问者何时在实际使用我们的 Web 应用程序，我们可以跟踪 `window.onfocus/onblur`。这使我们可以暂停/恢复页面活动和动画等。但是请注意，`blur` 事件意味着访问者从窗口切换了出来，但他们仍然可以观察到它。窗口处在背景中，但可能仍然是可见的。

## 跨窗口通信

### 同源

如果两个 URL 具有相同的协议，域和端口，则称它们是“同源”的。

“同源”策略规定：

- 如果我们有对另外一个窗口（例如，一个使用 `window.open` 创建的弹窗，或者一个窗口中的 iframe）的引用，并且该窗口是同源的，那么我们就具有对该窗口的全部访问权限。
- 否则，如果该窗口不是同源的，那么我们就无法访问该窗口中的内容：变量，文档，任何东西。唯一的例外是 `location`：我们可以修改它（进而重定向用户）。但是我们无法读取 `location`（因此，我们无法看到用户当前所处的位置，也就不会泄漏任何信息）。

### iframe 拥有自己的document和window

我们可以使用以下属性访问它们：

- `iframe.contentWindow` 来获取 `` 中的 window。
- `iframe.contentDocument` 来获取 `<iframe>` 中的 document，是 `iframe.contentWindow.document` 的简写形式。



#### 非同源情况下只能获取内部window的引用及获取location

```javascript
<iframe src="https://example.com" id="iframe"></iframe>

<script>
  iframe.onload = function() {
    // 我们可以获取对内部 window 的引用
    let iframeWindow = iframe.contentWindow; // OK
    try {
      // ...但是无法获取其中的文档
      let doc = iframe.contentDocument; // ERROR
    } catch(e) {
      alert(e); // Security Error（另一个源）
    }

    // 并且，我们也无法 **读取** iframe 中页面的 URL
    try {
      // 无法从 location 对象中读取 URL
      let href = iframe.contentWindow.location.href; // ERROR
    } catch(e) {
      alert(e); // Security Error
    }

    // ...我们可以 **写入** location（所以，在 iframe 中加载了其他内容）！
    iframe.contentWindow.location = '/'; // OK
    iframe.onload = null; // 清空处理程序，在 location 更改后不要再运行它
  };
</script>
```

#### iframe.onload和 iframe.contentWindow.onload

`iframe.onload` 事件（在 `` 标签上）与 `iframe.contentWindow.onload`（在嵌入的 window 对象上）基本相同。当嵌入的窗口的所有资源都完全加载完毕时触发。

但是，我们无法使用 `iframe.contentWindow.onload` 访问不同源的 iframe。因此，请使用 `iframe.onload`，

### 同子域可以忽略差异 

如果窗口的二级域相同，例如 `john.site.com`，`peter.site.com` 和 `site.com`（它们共同的二级域是 `site.com`）

我们可以使浏览器忽略该差异，使得它们可以被作为“同源”的来对待，以便进行跨窗口通信。

为了做到这一点，每个这样的窗口都应该执行下面这行代码：

```javascript
document.domain = 'site.com';
```

### Iframe 错误文档陷阱

在创建 iframe 后，**iframe 会立即就拥有了一个文档。但是该文档不同于加载到其中的文档！**

因此，如果我们要立即对文档进行操作，就可能出问题。

```JavaScript
<iframe src="/" id="iframe"></iframe>

<script>
  let oldDoc = iframe.contentDocument;
  iframe.onload = function() {
    let newDoc = iframe.contentDocument;
    // 加载的文档与初始的文档不同！
    alert(oldDoc == newDoc); // false
  };
</script>
```

### frames集合

获取 `<iframe>` 的 window 对象的另一个方式是从命名集合 `window.frames` 中获取：

- 通过索引获取：`window.frames[0]` —— 文档中的第一个 iframe 的 window 对象。
- 通过名称获取：`window.frames.iframeName` —— 获取 `name="iframeName"` 的 iframe 的 window 对象。



#### 内嵌获取

- `window.frames` —— “子”窗口的集合（用于嵌套的 iframe）。
- `window.parent` —— 对“父”（外部）窗口的引用。
- `window.top` —— 对最顶级父窗口的引用。



### sandbox 特性

`sandbox` 特性（attribute）允许在 `<iframe>` 中禁止某些特定行为，以防止其执行不被信任的代码。它通过将 iframe 视为非同源的，或者应用其他限制来实现 iframe 的“沙盒化”。



**一个空的 `"sandbox"` 特性会施加最严格的限制**

我们用一个以空格分隔的列表，列出要移除的限制。

以下是限制的列表：

- `allow-same-origin`

  默认情况下，`"sandbox"` 会为 iframe 强制实施“不同来源”的策略。换句话说，它使浏览器将 `iframe` 视为来自另一个源，即使其 `src` 指向的是同一个网站也是如此。具有所有隐含的脚本限制。此选项会移除这些限制。

- `allow-top-navigation`

  允许 `iframe` 更改 `parent.location`。

- `allow-forms`

  允许在 `iframe` 中提交表单。

- `allow-scripts`

  允许在 `iframe` 中运行脚本。

- `allow-popups`

  允许在 `iframe` 中使用 `window.open` 打开弹窗。

### 跨窗口通信

前提是传值双方必须均同意并调用相应的 JavaScript 函数。这可以保护用户的安全。

#### `postMessage  `传值  

`postMessage` 接口允许窗口之间相互通信，无论它们来自什么源。

想要发送消息的窗口需要调用接收窗口的 [postMessage](https://developer.mozilla.org/zh/docs/Web/API/Window.postMessage) 方法  

换句话说，如果我们想把消息发送给 `win`，我们应该调用 `win.postMessage(data, targetOrigin)`。



参数：

- `data`

  要发送的数据。可以是任何对象，数据会被通过使用“结构化克隆算法”进行克隆。IE 浏览器只支持字符串，因此我们需要对复杂的对象调用 `JSON.stringify` 方法进行处理，以支持该浏览器。

- `targetOrigin`

  指定目标窗口的源，以便只有来自给定的源的窗口才能获得该消息。





指定 `targetOrigin` 可以确保窗口仅在当前仍处于正确的网站时接收数据。在有敏感数据时，这非常重要。

例如，这里的 `win` 仅在它拥有来自 `http://example.com` 这个源的文档时，才会接收消息： 

**我们不希望做这个检查，可以将 `targetOrigin` 设置为 `*`。**

```JavaScript
<iframe src="http://example.com" name="example">

<script>
  let win = window.frames.example;

  win.postMessage("message", "http://example.com");
</script>
```

#### onmessage 接收信息

为了接收消息，目标窗口应该在 `message` 事件上有一个处理程序。当 `postMessage` 被调用时触发该事件（并且 `targetOrigin` 检查成功）。

event 对象具有特殊属性：

- `data`

  从 `postMessage` 传递来的数据。

- `origin`

  发送方的源，例如 `http://javascript.info`。

- `source`

  对发送方窗口的引用。如果我们想，我们可以立即 `source.postMessage(...)` 回去。



为 `message` 事件分配处理程序，我们应该使用 `addEventListener`，简短的语法 `window.onmessage` 不起作用。

这里有一个例子：

```javascript
window.addEventListener("message", function(event) {
  if (event.origin != 'http://javascript.info') {
    // 来自未知的源的内容，我们忽略它
    return;
  }

  alert( "received: " + event.data );

  // 可以使用 event.source.postMessage(...) 向回发送消息
});
```