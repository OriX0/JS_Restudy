/* 你建议采用什么数据结构来保存信息：“消息是什么时候被阅读的？”。
在前一个任务中我们只需要保存“是/否”。现在我们需要保存日期，并且它应该在消息被垃圾回收时也被从内存中清除。
 */
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
let readMessagesDate = new Map();

// 记录阅读
function readMsg (msg) {
  readMessagesDate.set(msg, new Date());
}