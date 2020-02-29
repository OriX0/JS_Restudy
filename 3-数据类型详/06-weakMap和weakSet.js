/*这里有一个 messages 数组：
你的代码可以访问它，但是消息被其他代码管理。这段代码有规律的添加新消息，删除旧消息，而且你不知道这些操作发生的时间。
现在，你应该是用什么数据结构来保存消息是否已读这个信息？这个结构必须很适合给出当前已知的消息对象是否已读的答案。
附：当消息被从 messages 中移除的时候，它应该也从你的数据结构中消失。
附：我们不能直接修改消息对象。如果它们被其他代码管理，那么给他们添加额外的属性可能导致不好的后果。*/

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
let readMessages = new WeakSet();
// 阅读消息
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// 检查 John 是否访问过?
alert(visitedSet.has(messages[0])); // true
// 销毁消息
messages.shift();
// messages[0] = null;

/*保存阅读日期
重要程度: 5
这里有一个和前一任务相像的消息数组。情境相似。
现在的问题是：你建议采用什么数据结构来保存信息：“消息是什么时候被阅读的？”。
在前一个任务中我们只需要保存“是/否”。现在我们需要保存日期，并且它也应该在消息没有了就消失。*/
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
let messagesRead = new WeakMap();
// 保存阅读时间
messagesRead.set(messages[0], new Date());