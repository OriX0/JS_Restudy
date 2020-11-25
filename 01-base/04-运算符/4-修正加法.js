/*----------Segmentation(*^▽^*)----------
Topic describes:
这里有一段代码，要求用户输入两个数字并显示它们的总和。
它的运行结果不正确。下面例子中的输出是 12（对于默认的 prompt 的值）
为什么会这样？修正它。结果应该是 3。
@parameter:
*/
/*
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12
*/
let a = +prompt('First number?', 1);
let b = +prompt('Second number?', 2);
alert(a + b); // 12
alert(a + b); //3
