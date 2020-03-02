# JavaScript-Base

## 使用现代模式"use strict"

1. `"use strict"` 指令将浏览器引擎转换为“现代”模式，改变一些内建特性的行为。我们会在之后的学习中了解这些细节。

2. 严格模式通过将 `"use strict"` 放置在整个脚本或函数的顶部来启用。一些新语言特性诸如 “classes” 和 “modules” 也会自动开启严格模式。

3. 所有的现代浏览器都支持严格模式。

4. 建议始终使用 `"use strict"` 启动脚本。

    

## 变量

- 使用let 而不是var来声明变量
- 变量名称必须仅包含字母，数字，符号 `$` 和 `_`。
- 首字符必须非数字。
- 区分大小写
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords 这里中的保留字符 不能被用做变量命名
- 常量使用const   定义后在后续代码无法直接修改 需要用大写

## 数据类型

### 判断是否为复杂类型（排除法）

- 看他的值是否为 数字 字符串 布尔值 null undefind
- 如果不是则是复杂数据类型

### Number 在 ±253 范围内的整数

- `Infinity` 代表数学概念中的 [无穷大](https://en.wikipedia.org/wiki/Infinity) ∞
- `NaN` 代表一个计算错误 用NaN进行任何操作返回NaN

### BigInt

用于任意长度的整数。

### string

#### 三种命名方式

1. 双引号：`"Hello"`.

2. 单引号：`'Hello'`.

3. 反引号：`Hello`.  反引号是 **功能扩展** 引号。它们允许我们通过将变量和表达式包装在 `${…}` 中 `${…}` 内的表达式会被计算，计算结果会成为字符串的一部分

   ```
   let name = "John";
   ```

   ```
   
   ```

   ```
   // 嵌入一个变量
   ```

   ```
   alert( `Hello, ${name}!` ); // Hello, John!
   ```

   ```
   
   ```

   ```
   // 嵌入一个表达式
   ```

   ```
   alert( `the result is ${1 + 2}` ); // the result is 3
   ```

### Boolean

### Null 

`null` 仅仅是一个代表“无”、“空”或“值未知”的特殊值

### undefined

- 一个变量声明了 但是没有赋值  默认值为undefind
- 一个变量声明了 并且赋值了一个undefined的值
- 一个对象中 获取某个不存在的属性 值也是undefined

### object



### symbol  创建对象的唯一标识符

### type of

- 两种形式：`typeof x` 或者 `typeof(x)`。
- 以字符串的形式返回类型名称，例如 `"string"`。
- `typeof null` 会返回 `"object"` —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 `object`。

### instance of 区分 null  数组 对象

语法 

```
变量 instanceof 类型
```

类型  包括  Array.Object



## 类型转换

### 字符串类型

#### `String(value)` 来将 `value` 转换为字符串类型

#### + (加号) 主动转换



### 数字类型

#### /（除法） 自动转换

#### `Number(value)` 显式地将这个 `value` 转换为 number 类型

#### 非有效数字 转换为NaN

| 值                   | 变成……                                                       |
| -------------------- | ------------------------------------------------------------ |
| `undefined`          | `NaN`                                                        |
| `null`               | `0`                                                          |
| `true 和 false`      | `1` and `0`                                                  |
| `string`             | 去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 `0`。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 `NaN`。 |
| Number("1.2.3")      | NaN                                                          |
| Number(new object()) | NaN                                                          |

### 布尔值

- 直观上为“空”的值（如 `0`、空字符串、`null`、`undefined` 和 `NaN`）将变为 `false`。
- 其他值变成 `true`。
- “0” “   ”  均为true
- 两个非运算 `!!` 有时候用来将某个值转化为布尔类型：
- 函数 `alert` 返回了 `undefined`

## 运算符

### 一元运算符

如果一个运算符对应的只有一个运算元，那么它是**一元运算符**。

比如 负号（-）

#### + 数字转换功能

```
let apples = "2";
let oranges = "3";

// 在二元运算符加号起作用之前，所有的值都转为数字
alert( +apples + +oranges ); // 5
```

### 二元运算符

加号  加号 `+` 应用于字符串，它将合并（连接）各个字符串  只要任一运算元是字符串，那么其它运算元也将转化为字符串。

### 赋值运算符

#### 链式赋值

```
a = b = c = 2 + 2;
let c = 3 - (a = b + 1);
```

### 求余运算符 %

### 幂运算符 **

```
alert( 4 ** (1/2) ); // 2 (1 / 2 幂相当于开方，这是数学常识)
alert( 8 ** (1/3) ); // 2 (1 / 3 幂相当于开三次方)
```

### 自加自减

- 当运算符在变量后，被称为「后置形式」：`counter++`。 返回原来的值
- 当运算符在变量前，被称为「前置形式」：`++counter`。 返回结果值
- a-- 是自减前的值 即原值
- --a 是自减后的值

### 位运算符

- 按位与 ( `&` )

- 按位或 ( `|` )

- 按位异或 ( `^` )

- 按位非 ( `~` )

- 左移 ( `<<` )

- 右移 ( `>>` )

- 无符号右移 ( `>>>` )

  

### 逗号运算符

逗号运算符能让我们处理多个语句，使用 `,` 将它们分开

```
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (3 + 4 的结果)
```

#### 常用于

```
// 一行上有三个运算符
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
```

### 优先级

#### 一元运算符优先级高于二元运算符

#### 优先表

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence



## 值的比较

### 比较结果为布尔值

### 字符串间的比较

1. 首先比较两个字符串的首位字符大小。
2. 如果一方字符较大（或较小），则该字符串大于（或小于）另一个字符串。算法结束。
3. 否则，两个字符串中的字符相等，继续取出各自的后一位字符进行比较。
4. 重复上述步骤进行比较，直到某字符串率先用完所有字符。
5. 如果两个字符串同时用完字符，那么它们被判定为相等，否则未结束（还有未比较的字符）的字符串更大。
6. 根据**Unicode 编码顺序**

### 不同类型间的比较 是先转换为数字

#### 有趣的特殊现象

- 若直接比较两个值，其结果是相等的。

- 若把两个值转为布尔值，它们可能得出完全相反的结果，即 `true` 和 `false`。

  ```
  let a = 0;
  ```

  ```
  alert( Boolean(a) ); // false
  ```

  ```
  
  ```

  ```
  let b = "0";
  ```

  ```
  alert( Boolean(b) ); // true
  ```

  ```
  
  ```

  ```
  alert(a == b); // true!
  ```

### === 不会进行 类型转换 

### null和undefined的比较

```
严格相等
alert( null === undefined ); // false
非严格相等
alert( null == undefined ); // true
```

### null和数字的比较 null >= 0

```
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
```

### undefined的比较

```
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```

## 弹框 交互

这些方法都是模态的：它们暂停脚本执行，并且不允许用户与该页面的其余部分交互，直到窗口被解除。

上述所有方法共有两个限制：

1. 模态窗口的确切位置由浏览器决定。通常在页面中心。
2. 窗口的确切外观还取决于浏览器。我们不能修改它。

### alert

- 会弹出一段信息并暂停脚本，直到用户点击了“确定”
- 这个小窗口被称为 **模态窗**。“modal” 意味着用户不能与页面的其他部分进行交互，点击其他按钮等，直到他们处理完窗口。在这种情况下 – 直到他们按下“确定”。

### prompt  输入框

- 参数1 title 文本

- 参数2  default   可选的第二个参数，指定 input 框的初始值。 可省略 默认为undefined

  

### confirm  带确定 取消的问题弹框

参数  question  为问题



## 条件运算符 if ？

- 数字 `0`、一个空字符串 `""`、`null`、`undefined` 和 `NaN` 都会转换成 `false`。因为他们被称为 “falsy” 值。
- 其他值变成 `true`，所以它们被称为 “truthy”。
- 使用？更加简便 但是可读性较差 建议使用if else

### 三元运算符 ？

语法

```
let result = condition ? value1 : value2
```

condition一般是带括号的  但是括号可以省略 由于优先级的问题

### 多问号的使用

```
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
```

1. 第一个问号检查 `age < 3`。
2. 如果为真 — 返回 `'Hi, baby!'`，否则 — 在冒号 `":"` 后面继续检查 `age < 18`。
3. 如果为真 — 返回 `'Hello!'`，否则 — 在下一个冒号 `":"` 后面继续检查 `age < 100`。
4. 如果为真 — 返回 `'Greetings!'`，否则 — 在最后一个冒号 `":"` 后面返回 `'What an unusual age!'`。



## 逻辑运算符

### 或 ||

大多数时间，或 `||` 会被用在 `if` 语句中，用来测试是否有**任何**给定的条件是 `true` 的。

除了两个操作数都是 `false` 的情况，结果总是 `true`

#### 或寻找第一个真值

```
result = value1 || value2 || value3;
```

或运算符 `||` 做了如下的事情：

- 从左到右依次计算操作数。
- 将每一个操作数转化为布尔值。如果结果是 `true`，就停止计算，返回这个操作数的初始值。
- 如果所有的操作数都被计算过（也就是，转换结果都是 `false`），返回最后一个操作数。
- 有趣的应用 

##### 短路取值 赋值

```
let x;

true || (x = 1);

alert(x); // undefined，因为 (x = 1) 没有被执行
```

### 与 &&

传统的编程中，当两个操作数都是真值，与操作返回 `true`，否则返回 `false`：

#### 与操作 寻找第一个假值

```
result = value1 && value2 && value3;
```

与运算 `&&` 做了如下的事情：

- 从左到右依次计算操作数。
- 将每一个操作数转化为布尔值。如果结果是 `false`，就停止计算，返回这个操作数的初始值。
- 如果所有的操作数都被计算过（也就是，转换结果都是 `true`），返回最后一个操作数。

换句话说，与操作符返回第一个假值，如果没有假值就返回最后一个值。

#### 与 或运算一样  也可以代替if

```
let x = 1;

(x > 0) && alert( 'Greater than zero!' );
```

### 与运算的优先级 高于或运算 

### alert没有返回值即undefined



### 非运算

1. 将操作数转化为布尔类型：`true/false`。
2. 返回相反的值。

**两个非运算 `!!` 有时候用来将某个值转化为布尔类型 相当于 Boolean**

## 循环 while 和for

### while循环

```
while (condition) {
  // 代码
  // 所谓的“循环体”
}
```

任何表达式或变量都可以是循环条件，而不仅仅是比较。对它们进行计算，并通过 `while` **将其结果转化为布尔值。**

例如，`while (i != 0)` 可简写为 `while (i)`：

### do...while循环 先循环一次

```
do {
  // 循环体
} while (condition);
```

### for循环

```
for (begin; condition; step) {
  // ……循环体……
}
```

| begin          | `i = 0`    | 进入循环时执行一次。                         |
| -------------- | ---------- | -------------------------------------------- |
| condition      | `i < 3`    | 在每次循环迭代之前检查，如果失败，循环停止。 |
| step           | `i++`      | 主体每次迭代后执行，但在条件检查之前执行。   |
| body（循环体） | `alert(i)` | 条件为真时，重复运行。                       |

#### 省略语句段

`**for` 循环的任何语句段都可以被省略。 只要在其他部分进行补充**

例如，如果我们在循环开始时不需要做任何事，我们可以省略 `begin` 语句段。

就像这样：

```
let i = 0; // 我们已经声明了 i 并对它进行赋值了

for (; i < 3; i++) { // "begin" 语句段不再需要
  alert( i ); // 0, 1, 2
}
```

我们也可以移除 `step` 语句段：

```
let i = 0;

for (; i < 3;) {
  alert( i++ );
}
```

该循环与 `while (i < 3)` 等价。

实际上我们可以删除所有内容，从而创建一个无限循环：

```
for (;;) {
  // 无限循环
}
```

请注意 `for` 的两个 `;` 必须存在，否则会出现语法错误。

### **禁止** `break/continue` **在‘?’的右边**

请注意非表达式的语法结构不能与三元运算符 `?` 一起使用。特别是 `break/continue` 这样的指令是不被允许使用的。

### break 和continue

#### 使用标签实现指定跳转

```
labelName: for (...) {
  ...
}
```

只有在循环内部才能调用 `break/continue`，并且**标签必须位于指令上方的某个位置**。

```
// 这样做是不行的
break label;  // 跳转到标签？不。

label: for (...)
```

## switch 

`switch` 语句有至少一个 `case` 代码块和一个可选的 `default` 代码块。

就像这样：

```
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

### case分组  

共享同一段代码的几个 `case` 分支会被分在一组：

```
let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3:                    // (*) 下面这两个 case 被分在一组
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```

### 注意这里的相比较是 严格相等 类型要一致

## 函数

函数应该简短且只有一个功能。如果函数太大，把该函数分成几个小的函数是值得的。有时候遵循这个规则并不是那么容易，但这绝对是件好事。

一个单独的函数不仅更容易测试和调试 —— 它的存在本身就是一个很好的注释！

**一个函数是表示一个“动作（action）”的值**字符串或数字等常规值视为**数据（data）**。函数可以视为一个**动作**。我们可以在变量之间传递他们，并在需要时运行。

```
function name(parameters) {
  ...body...
}
```

### 变量的访问

- 在函数中声明的变量只在该函数内部可见。 --局部变量
- 函数也可以访问外部变量
- 只有在没有局部变量的情况下才会使用外部变量。如果在函数中声明了同名变量，那么它**遮蔽**外部变量。
- 变量的访问是由内而外的 内部有则使用没有则上级查找 以此类推 
- 全局变量在任意函数中都是可见的(除非被局部变量遮蔽)。
- 现代的代码有很少或没有全局变量。大多数变量存在于它们的函数中。但是有时候，全局变量能够用于存储项目级别的数据。

### 参数

传入函数的参数的值的改变 并不影响原参数

参数可以设置默认值 在过去的js中需要判断是否undefined 再设置默认值

```
function showMessage(from, text) {

  from = '*' + from + '*'; // 让 "from" 看起来更优雅

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// "from" 值相同，函数修改了一个局部的副本。
alert( from ); // Ann
```

### 返回值

- 指令 `return` 可以在函数的任意位置。当执行到达时，函数停止，并将值返回给调用代码（分配给上述 `result`）。
- 如果空值return  或者直接不带return 则返回值为undefined
- JavaScript 默认会在 `return` 之后加分号 所以不要把返回值和值用分行符隔开
- 如果我们想要将返回的表达式跨行，我们应该在 `return` 的同一行开始写此表达式。或者至少添加一对括号将其围住

### 函数命名

一种普遍的做法是用动词前缀来开始一个函数，这个前缀模糊地描述了这个动作。团队内部必须就前缀的含义达成一致。

- 一个函数是一个行为，所以函数名通常是动词。
- `"get…"` —— 返回值，
- `"calc…"` —— 计算
- `"create…"` —— 创建，
- `"check…"` —— 检查并返回 boolean 值，等。

### 函数预加载

条件 

 1.函数声明 必须是常规的方式 不能使用函数表达式的方式

1. 函数的声明和调用在同一个script块

### 立即调用

使用（）将函数表达式（） 再使用（） 进行调用

## 函数表达式和箭头函数

### 函数表达式

```
let sayHi = function() {
  alert( "Hello" );
};
```

### 回调函数

回调函数是不需要人为调用的函数

```
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() {
  alert( "You agreed." );
}
function showCancel() {
  alert( "You canceled the execution." );
}
// 用法：函数 showOk 与 showCancel 作为参数传入到 ask
ask("Do you agree?", showOk, showCancel);
```

### 函数表达式 VS 函数声明

**函数声明：** 函数在主代码流中单独声明。

**函数表达式：** 一个函数，在一个表达式中或另一个语法结构中创建。这里，该函数在赋值表达式 `=` 右侧创建：

#### 区别

**函数表达式在执行到达时创建，并只有从那时起才可用。**

**使用函数声明可使它的调用先于声明。** 当 JavaScript **准备**运行脚本或代码块时，它首先在其中查找函数声明并创建函数。我们可以将其视为“初始化阶段”。

```
// 函数声明 以下是正常的
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
```

**严格模式下，当一个函数声明在一个代码块内运行时，它在该块内的任何地方都是可见的。但块外则相反。**

```
let age = prompt("What is your age?", 18);
// 利用条件判断来声明函数
if (age < 18) {
  function welcome() {
    alert("Hello!");
  }
} else {

  function welcome() {
    alert("Greetings!");
  }
}
// ……稍后使用
welcome(); // Error: welcome is not defined
```

#### 选择

- 当我们需要声明一个函数时，首先要考虑的是函数声明语法 它给如何组织我们的代码提供了更多的自由，因为我们可以在声明它们之前调用这些函数。
- 函数表达式 调用起来更加自由



### 箭头函数

JavaScript 会把 `{` 作为函数体的开始，而不是对象的开始。解决方法是将它们包装在正常括号中：

```
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
let func = (arg1, arg2, ...argN) => expression
```

等同于

```
let func = function(arg1, arg2, ...argN) {
  return expression;
}
// 例子
let sum = (a, b) => a + b;

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");
```

如果我们只有一个参数，那么括号可以省略，甚至更短：

如果没有参数，括号应该是空的（但它们应该存在）：

#### 多行箭头函数

```
let sum = (a, b) => {  // 花括号打开多线功能
  let result = a + b;
  return result; // 如果我们使用花括号，使用返回来获得结果
};

alert( sum(1, 2) ); // 3
```

## 执行流程

### 执行流程

js在执行的时候，会按照script标签来一个一个的执行，也就是先执行第一个script标签中的内容，然后在执行第二个script标签的内容。

一个script标签中，首先会先

**编译代码**（检查语法、词法是否错误，没有错误就加载到内存中，准备执行）

**执行代码**（运行或输出结果）。

执行完毕，继续按照相同的方式执行下一个script标签的内容。

![1573631730356](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1573631730356.png)



### 错误类型

**编译型错误 会发生编译型错误,会致使 整个Script代码段中的内容全部停止执行 但是不会影响另外的 script代码段**

**执行错误 当前 script代码段错误之前的内容还是能够正常执行 当前script代码段之后的内容 都不执行 但是不会影响另外的script代码段**

# 代码 质量  测试 注释 风格等

## 在谷歌中调试

### source 面板

1. **资源区域**列出了 html、javascript、css 和包括图片在内的页面需要的其他文件。Chrome 扩展的资源也会出现在这。
2. **源区域**展示源码。
3. **信息和控制区域**是用来调试的，我们很快就会来探讨它。

### console 控制台 可以输入调试

### Breakpoints 断点

**条件断点**

在行号上**右键单击**允许你创建一个**条件**断点。

- 快速跳转至代码中的断点（通过点击右侧面板中的对应的断点）。
- 通过取消选中来临时禁用。
- 通过右键单击和选择移除来删除一个断点。

### Debugger 命令

我们也可以使用 `debugger` 命令来暂停代码，像这样：

```
function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- 调试器会在这停止

  say(phrase);
}
```

### 暂停并查看

请打开右侧的信息下拉列表（箭头指示出的地方）。这里允许你查看当前的代码状态：

1. **Watch —— 显示各种表达式的当前值。**

   你可以点击加号 `+` 然后输入一个表达式。调试器将随时显示它的值，并在执行过程中自动重新计算。

2. **Call Stack（调用栈） —— 显示嵌套的调用链。**

   此时，调试器正在 `hello()` 的调用链中，被 `index.html` 中的一个脚本调用（这里没有函数，因此显示 “anonymous”）

   如果你点击了一个堆栈项，调试器将调到相应的代码那，并且还可以查看其所有的变量。

3. **Scope（作用域） —— 显示当前的变量。**

   `Local` 显示当前函数中的变量，你还可以在源代码中看到它们的值高亮显示了出来。

   `Global` 显示全局变量（不在任何函数中）。

   还有一个 `this` 关键字目前我们还没有学到，不过我们很快就会讨论它了。

### 跟踪执行

 **—— 继续执行，快捷键** F8**.**

**下一步（运行下一个命令），但是\****不会进入函数****，快捷键** F10**。**

 **下一步，快捷键** F11**。**

**续执行到当前函数的末尾。快捷键** Shift+F11**。**

 **启用/禁用所有的断点**

**发生错误时启用/禁用自动暂停。**



## 代码风格

![1572879464586](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1572879464586.png)

### 大括号

大括号（的开始部分）都是写在同一行而不是新换一行

在括号的开始部分前面还有一个空格

```
if (condition) {
  // do this
  // ...and that
  // ...and that
}
```

### 行的长度

一行的最大长度应该有所限制。没有人喜欢盯着一条长长的水平线。最好把它分割一下。

一行的最大长度在团队层面上达成一致即可。通常是 80 或 120 个字符。

### 缩进

#### **水平方向上的缩进: 2(4) 个空格。**

如今空格更普遍一点。

选择空格而不是 tabs 的优点之一是它们允许你做出比 “Tab” 制表符更加灵活的缩进配置。

#### **垂直方向上的缩进：用于将逻辑块中的代码进行分割的空行。**

插入一个额外的空行有助于让代码更加地易读。连续超过 9 行都没有被垂直分割的代码是不应该出现的。

### 分号

每一个语句后面都应该有一个分号

### 嵌套的层级

不应该嵌套太多的层级

尽可能用continue 替换 if else

### 函数在代码下面 常用 更可读

```
// the code which uses the functions
let elem = createElement();
setHandler(elem);
walkAround();
// --- helper functions ---

function createElement() {
  ...
}
function setHandler(elem) {
  ...
}
function walkAround() {
  ...
}
```

### 风格指南

- [Google JavaScript 风格指南](https://google.github.io/styleguide/javascriptguide.xml)
- [Airbnb JavaScript 风格指南](https://github.com/airbnb/javascript)
- [Idiomatic.JS](https://github.com/rwaldron/idiomatic.js)
- [StandardJS](https://standardjs.com/)
- (还有很多)

### 自动检测器

有很多工具可以自动检查你的代码风格。他们叫做 “linters”。

最出名的工具有：

- [JSLint](http://www.jslint.com/) – 第一批 linters 之一。

- [JSHint](http://www.jshint.com/) – 比 JSLint 多了更多设置。

- [ESLint](http://eslint.org/) – 可能是最新的一个。

  

## 注释

良好的代码中，这种“解释性”注释的数量应该是最小的  即解释一个函数具体做什么事情 代码发生了什么

### 使用分解函数和创建函数 代替代码片段 增加可读性

```
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}
```

### 好的注释

**描述架构**

**记录函数的用法** 用法、参数和返回值。

**为什么任务以这种方式解决？**

**代码有哪些巧妙的特性？它们被用在什么地方？**

重要的解决方案，特别是在不是很明显时。



**注释这些内容**

- 整体架构，高层次的观点。
- 函数的用法。
- 重要的解决方案，特别是在不是很明显时。

**避免注释**

- 阐述“代码如何工作”或“它做了什么”。
- 只有在没有这些就不可能使代码变得如此简单和自我描述的情况下才可以使用它们。

## 代码质量 用于反爬 反逆向

### 简洁

让代码尽可能地短一点。展示出你是多么的聪明啊。

```
// 从一个著名的 javascript 库中取到的代码
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
// 转换为 if else
    if (i) //非零
    {
        if (i < 0)
        {
            i = Math.max( 0, len + i );
        }
        /* 可以省略，保持不变
        else
        {
            i = i;
        }
        */
    }
    /* 可以省略，已经等于 0 了
    else
    {
        i = 0;
    }
    */
```

### 一个字母的变量  

在循环体中可以尝试使用 x  y等单字母作为计数器 而非 i  因为i的常见

### 使用缩写

如果团队规则中禁止使用一个字母和模糊的名字，那就缩短他们，使用缩写吧。

像这样：

- `list` → `lst`

- `userAgent` → `ua`

- `browser` → `brsr`

- …等等

  

### 抽象化

**一个变量的理想名称是 data**

**根据变量的类型命名：str、num…**

**找不到更多这样的名字呢** 加上数字

### 智能同义词

对于**同样的**事情使用**相同**的名字，可以使生活更有趣，并向公众展示出你的创意。

如果 John 在他的代码中以 `display...` 来开始一个"显示"函数，那么 Peter 可以用 `render..`，Ann 可以使用 `paint...`。你可以发现代码变得多么的有趣多样呀。

### 重用名字

仅在绝对必要时才添加新变量。

否则，重用已经存在的名字。只需要将新值写进变量即可。

在一个函数中，尝试仅使用作为参数传递的变量。

### 下划线的乐趣

在变量名前使用 `_` 和 `__`。例如 `_name` 和 `__value`。

### 重叠外部变量 

### 使用混淆的函数命名



- 遵从其中的一丢丢，你的代码就会变得充满惊喜。
- 遵从其中的一大部分，你的代码将真正成为你的代码，没有人会想改变它。
- 遵从所有，你的代码将成为寻求启发的年轻开发人员的宝贵案例。



## 使用mocha 自动化测试

**自动化测试意味着除了代码之外，测试是单独写的。它们可以很容易地执行，并检查所有的主要用例。**

### 行为驱动开发 BDD

**BDD 包含了三部分：测试、文档和示例。**

### 开发中的 pow规范

```
describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});
describe("title", function() { ... })
```

表示我们正在描述的功能是什么。用于组织 “工人（workers）” – `it` 代码块。在我们的例子中我们正在描述函数 `pow`。

```
it("title", function() { ... })
```

`it` 里面的 “title” 中我们以**人类可读**的方式描述特定的用例，第二个参数是一个测试它的函数。比较链各个值

```
assert.equal(value1, value2)
assert.equal(pow(2, 3), 8);
```

`it` 块中的代码。如果实现是正确的，它应该在执行的时候不产生任何错误。

### 行为规范

- [Mocha](http://mochajs.org/) —— 核心框架：提供了包括 `describe` 和 `it` 的通用型测试函数和运行测试的主函数。
- [Chai](http://chaijs.com/) —— 提供很多断言支持的库。它可以用很多不同的断言。现在我们只需要用 `assert.equal`。
- [Sinon](http://sinonjs.org/) —— 用于监视函数、模拟内置函数和其他函数的库，我们稍后会用到它。

### 改进实现

```
describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});
```

### 嵌套描述



```
describe("pow", function() {

  describe("raises x to power n", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ...可以在这里写更多的测试代码，describe 和 it 都可以添加。
});
```

### `before/after` **and** `beforeEach/afterEach`

```
describe("test", function() {

  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));

  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});
// 输出
Testing started – before all tests (before)
Before a test – enter a test (beforeEach)
1
After a test – exit a test   (afterEach)
Before a test – enter a test (beforeEach)
2
After a test – exit a test   (afterEach)
Testing finished – after all tests (after)
```

### 部分断言语句

请注意断言语句 `assert.isNaN`：它用来检测 `NaN`。

在 Chai 中也有其他的断言，例如：

- `assert.equal(value1, value2)` —— 检测相等 `value1 == value2`。
- `assert.strictEqual(value1, value2)` —— 检测严格相等 `value1 === value2`。
- `assert.notEqual`, `assert.notStrictEqual` —— 刚好和上面做相反的检查。
- `assert.isTrue(value)` —— 检查 `value === true`。
- `assert.isFalse(value)` —— 检查 `value === false`。
- …完整的列表在 [docs](http://chaijs.com/api/assert/)。

### 可以通过编写`it.only` 而不是 `it` 来隔离单个测试并以独立模式运行它

## Polyfills  用上一代的标准形式替代当前代码

### Babel

[Babel](https://babeljs.io/) 是一个 [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler)。它将现代的 JavaScript 代码转化为上一代的标准形式。

第一，transpiler 程序，就是重写代码的那个

第二，polyfill。

transpiler 会重写代码，因此现有的语法特性都被覆盖了。但是对于新特性我们需要写一个特殊的脚本来实现它们。JavaScript 是一个高度动态化的语言。脚本可能不仅是添加一些新特性，还会修改一些内置特性，以便于它们表现得符合现代标准。

脚本有一个术语 “polyfill” 表示用来“填补”缺口并添加缺少的实现。

两个有意思的 polyfills 是：

- [babel polyfill](https://babeljs.io/docs/usage/polyfill/) 支持很多，但是很大。
- [polyfill.io](http://polyfill.io/) 服务允许我们能根据自己所需的特性来按需加载、构建 polyfill。



# 对象-Base

## 基础知识

### 创建

- 属性的键必须是字符串或者Symbol（通常是字符串）。
- 值可以是任何类型。

```
let user = new Object(); // “构造函数” 的语法
let user = {};  // “字面量” 的语法
```

### 文本和属性

可以通过点语法来使用属性：

```
// 读取文件的属性：
alert( user.name ); // John
alert( user.age ); // 30
```

移除一个属性，我们用 `delete` 操作：

```
delete user.age;
```

**点语法 无法操作多词属性**

#### 属性名 可以用保留字段 除了**proto**

#### 多词属性

  我们也可以用多字词语来作为属性名，但是他们必须加上引号：

```
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // 多词属性名必须加引号
};
  
```

操作多词属性 需要用方括号

```
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];
```

注意方括号中的字符串要放在引号中，单引号双引号都可以的。

### 方括号

#### 1. 操作多词属性

#### 2.计算属性

我们可以在对象字面量中使用方括号。这叫做**计算属性**。

例如：

```
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // 属性名从 fruit 变量中计算
};

alert( bag.apple ); // 5 如果 fruit="apple"
```

我们在方括号中可以用更复杂的表达式：

```
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```

方括号比点符号更强大。它允许任何属性名和变量，但写起来也更加麻烦。

大部分时间里，当属性名是已知且简单的时候，用点方法。如果有一些复杂的操作，那么就用方括号。

### 属性值简写

属性名跟变量名一样 可以用 `name` 来代替 `name:name` 像下面那样：

```
function makeUser(name, age) {
  return {
    name, // 与 name: name 相同
    age,   // 与 age: age 相同
    month:12,
    // ...
  };
```

### 存在值检查

`in` 的左边必须是**属性名**。通常是一个字符串，如果不用字符串，那就是一个字符串变量。

```
"key" in object
等同于
obj.key ===undefined
但是如果将某个值定义为 undefined
let obj = {
  test: undefined
};
这样 用===检测 不行  但是可以使用in
```

这种情况很少发生，因为 undefined 通常情况下是不会被赋值到对象的，我们经常会用 `null` 来表示未知的或者空的值。

### for...in 循环

```
for(key in object) {
  // 各个属性键值的执行区
}
实例
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};
for(let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // 属性键的值
  alert( user[key] ); // John, 30, true
}
```

#### 排序

”有特别的顺序“：整数属性有顺序，其他是按照创建的顺序，

```
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for(let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```

##### **整数属性？那是什么？**

这里的“整数属性”术语指的是一个字符串，可以在不改变的情况下对整数进行转换。

所以，“49” 是一个整数属性名，因为我们把它转换成整数，再转换回来，它还是一样



### 引用复制 深拷贝 浅拷贝

**当对象被复制的时候 – 引用被复制了一份, 对象并没有被复制。**

#### 比较引用

等号 `==` 和严格等 `===` 对于对象来说没差别。

**当两个引用指向同一个对象的时候他们相等。**

### 常量对象

一个被 `const` 修饰的对象**可以**被修改。  其属性值可以被修改 但是对象本身无法重新赋值

```
const user = {
  name: "John"
};
user.age = 25; // (*)  正确不报错

// 错误（不能再给 User 赋值）
user = {
  name: "Pete"
};
```

### 复制和合并 object.assign 深拷贝

```
Object.assign(dest,[ src1, src2, src3...])
```

- 参数 `dest` 和 `src1, ..., srcN`（可以有很多个）是对象。
- 这个方法复制了 `src1, ..., srcN` 的所有对象到 `dest`。换句话说，从第二个参数开始，所有对象的属性都复制给了第一个参数对象，然后返回 `dest`。
- 如果其中的属性名有重复 则后面的覆盖前面的
- 特殊情况 属性是一个对象 则该属性无法被深拷贝出来 而是浅拷贝

单体赋值等同于

```
let clone = {}; // 新的空对象

// 复制所有的属性值
for (let key in user) {
  clone[key] = user[key];
}
```

特殊情况

```
et user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true，同一个对象

// user 和 clone 共享 sizes 对象
user.sizes.width++;       // 在这里改变一个属性的值
alert(clone.sizes.width); // 51，在这里查看属性的值
```

有一个标准的深拷贝算法，解决上面和一些更复杂的情况，叫做 [Structured cloning algorithm](https://w3c.github.io/html/infrastructure.html#internal-structured-cloning-algorithm)。为了不重复造轮子，我们使用它的一个 JS 实现的库 [lodash](https://lodash.com/), 方法名叫做 [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep)。



## 垃圾回收

JavaScript 的内存管理是自动的、无形的。我们创建的原始值、对象、函数……这一切都会占用内存。

### 可达性

简而言之，『可达』值是那些以某种方式可访问或可用的值。它们保证存储在内存中。

1. 这里列出固有的可达值基本集合，这些值明显不能被释放。

   比方说：

   - 当前函数的局部变量和参数。
   - 嵌套调用时，当前调用链上所有函数的变量与参数。
   - 全局变量。
   - （还有一些内部的）

   这些值被称作**根**。

2. 如果一个值可以通过引用或引用链，从根值访问到，则认为这个值是可达的。

   比方说，如果局部变量中有一个对象，并且该对象具有引用另一个对象的 property，则该对象被认为是可达的。而且它引用的内容也是可达的。下面是详细的例子。

### 无法到达的岛屿

几个对象相互引用，但外部没有对其任意对象的引用，这些对象可能是不可达的，并会从内存中释放。

源对象与上面相同。

### 内部算法

垃圾回收的基本算法被称为 “mark-and-sweep”。

定期执行以下“垃圾回收”步骤：

- 垃圾收集器找到所有的根，并“标记”（记住）它们。

- 然后它遍历并"标记"来自它们的所有参考。

- 然后它遍历到标记的对象并标记**他们的**引用。所有被遍历到的对象都会被记住，以免将来再次遍历到同一个对象。

- …一直这样，直到有未访问的引用（从根访问到）。

- 没有被标记的所有对象都被删除。

  

**JavaScript 引擎做了许多优化**，使其运行速度更快，并且不会影响代码运行。

一些优化点：

- **分代收集** —— 对象被分成两组：『新的』和『旧的』。许多对象出现，完成他们的工作并快速释放，他们可以很快被清理。那些长期存活下来的对象会变得『老旧』，而且检查的次数也会减少。
- **增量收集** —— 如果有许多对象，并且我们试图一次遍历并标记整个对象集，则可能需要一些时间并在执行过程中带来明显的延迟。所以引擎试图将垃圾收集工作分成几部分来做，然后将这几部分逐一处理。这需要他们之间额外的标记来追踪变化，但是会有许多微小的延迟而不是大的延迟。
- **闲时收集** —— 垃圾收集器只会在 CPU 空闲时尝试运行，以减少可能对代码执行的影响。

## Symbol

Symbol” 值表示唯一的标识符。

可以使用 `Symbol()` 来创建这种类型的值：

Symbol 保证是唯一的。即使我们创建了许多具有相同描述的 Symbol，它们的值也是不同。描述只是一个不影响任何东西的标签。

例如，这里有两个描述相同的 Symbol —— 它们不相等：

```
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
```

Symbol中标签的值是无法直接alert的 需要先toString才能显示或者显示`description`的属性

```
let id = Symbol("id");
alert(id); // 类型错误：无法将 Symbol 值转换为 String。
alert(id.toString()); // Symbol(id)，现在它起作用了
alert(id.description); // id
```

### 用Symbol实现隐藏属性

先用symbol创建一个值 再将该值赋值给一个变量  

```
let user = { name: "John" };
let id = Symbol("id");

user[id] = "ID Value";
alert( user[id] ); // 我们可以使用 Symbol 作为键来访问数据。
```

### 在object的字面量中使用Symbol 需要方括号

```
let id = Symbol("id");
let user = {
  name: "John",
  [id]: 123 // 不仅仅是 "id：123"
};
```



### Symbol在for in中被跳过  但是 [Object.assign](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 同时复制字符串和符号属性：

### 全局symbol

存在一个**全局 symbol 注册表**。我们可以在其中创建 Symbol 并在稍后访问它们，它可以确保每次访问相同名称都会返回相同的 Symbol。

#### 读取或创建 注册表中的Symbol   `Symbol.for(key)`

该调用会检查全局注册表，如果有一个描述为 `key` 的 Symbol，则返回该 Symbol，否则将创建一个新 Symbol（`Symbol(key)`），并通过给定的 `key` 将其存储在注册表中。



#### 通过 名称 返回symbol  Symbol.keyFor(sym)

```
Symbol.keyFor` 在内部使用全局 symbol 注册表来查找 symbol 的键。所以它不适用于非全局 symbol。如果 symbol 不是全局的，它将无法找到它并返回 `undefined
```

### 系统Symbol

JavaScript 内部存在很多“系统” Symbol，我们可以使用它们来微调对象的各个方面。

它们列在[熟悉的 Symbol](https://tc39.github.io/ecma262/#sec-well-known-symbols) 表的规范中：

- `Symbol.hasInstance`
- `Symbol.isConcatSpreadable`
- `Symbol.iterator`
- `Symbol.toPrimitive`
- …等等。



## 对象方法与 this

### 方法简写 

我们可以省略 `"function"` 只写了 `sayHi()`

```
let user = {
  sayHi: function() {
    alert("Hello");
  }
};
// 方法简写看起来更好，对吧？
let user = {
  sayHi() { // 与 "sayHi: function()" 一样
    alert("Hello");
  }
};
```

### this不受限制

“this” 关键字 可以用于任何函数

`this` 是在运行时求值的。它可以是任何值。

```
function sayHi() {
  alert(this);
}
sayHi(); // undefined
```

在这种情况下，严格模式下的 `this` 值为 `undefined`。如果我们尝试访问 `this.name`，将会出现错误。

在非严格模式（没有使用 `use strict`）的情况下，`this` 将会是**全局对象**（浏览器中的 `window`，我们稍后会进行讨论）。`"use strict"` 可以修复这个历史行为。

### 内部 引用类型

```
let user = {
  name: "John",
  hi() { alert(this.name); }
}

// 将赋值与方法调用拆分为两行
let hi = user.hi;
hi(); // 错误，因为 this 未定义
```

这里 `hi = user.hi` 把函数赋值给变量，其后的最后一行是完全独立的，所以它没有 `this`。



引用类型的值是三点的结合 `(base, name, strict)`，如下：

- `base` 是对象。
- `name` 是属性。
- 当 `use strict` 生效，`strict` 为真。

`user.hi` 属性访问的值不是函数，而是引用类型的值。在严格模式下，`user.hi` 是：

```
// 引用类型值
(user, "hi", true)
```

所以如果直接使用点 `obj.method()` 或方括号语法 `obj[method]()`（它们在这里并无差别）调用函数，那么作为结果，`this` 值会以正确的方式进行传递。



### 箭头函数没有自己的this

箭头函数有些特别：它们没有自己的 `this`。如果我们在这样的函数中引用 `this`，`this` 值取决于外部『正常的』函数。

举个例子，这里的 `arrow()` 使用的 `this` 来自外部的 `user.sayHi()` 方法：

```
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ily
```

### 链式调用

```
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); // 1
```

我们也可以每行一个调用。对于长链接它更具可读性：

```
ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep(); // 1
```

## 对象原始值转换  不懂

### ToPrimitive 

当一个对象被用在需要原始值的上下文中时，例如，在 `alert` 或数学运算中，它会使用 `ToPrimitive` 算法转换为原始值（[标准](https://tc39.github.io/ecma262/#sec-toprimitive)）。

该算法允许我们使用特殊的对象方法自定义转换。

```
"string"
```

当一个操作期望一个字符串时，对于对象到字符串的转换，比如 `alert`：

```
// output
alert(obj);

// 使用对象作为属性键
anotherObj[obj] = 123;
"number"
```

当一个操作需要一个数字时，用于对象到数字的转换，如 `maths`：

```
// 显式转换
let num = Number(obj);

// maths（除了二进制加法）
let n = +obj; // 一元加法
let delta = date1 - date2;

// 小于/大于的比较
let greater = user1 > user2;
"default"
```

在少数情况下发生，当操作者“不确定”期望的类型时。

例如，二进制加 `+` 可以和字符串（连接）和数字（相加）发生作用，所以类型是字符串和数字都可以。或者当一个对象用 `==` 与一个字符串、数字或符号进行比较时。

```
// 二进制加
let total = car1 + car2;

// obj == string/number/symbol
if (user == 1) { ... };
```

**为了进行转换，JavaScript 尝试查找并调用三个对象方法：**

1. 调用 `obj[Symbol.toPrimitive](hint)` 如果这个方法存在的话，
2. 否则如果暗示是"string"
   - 尝试 `obj.toString()` 和 `obj.valueOf()`，无论哪个存在。
3. 否则，如果暗示"number"或者"default"
   - 尝试 `obj.valueOf()` 和 `obj.toString()`，无论哪个存在

### Symbol.toPrimitive 对象转换输出

我们从第一个方法开始。有一个名为 `Symbol.toPrimitive` 的内置符号应该用来命名转换方法，像这样：

```
obj[Symbol.toPrimitive] = function(hint) {
  // 返回一个原始值
  // hint = "string"，"number" 和 "default" 中的一个
}
```

例如，这里 `user` 对象实现它：

```
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// 转换演示：
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

### toString/valueOf

方法 `toString` 和 `valueOf` 来自上古时代。它们不是符号（那时候还没有符号这个概念），而是“常规的”字符串命名的方法。它们提供了一种可替换的“老派”的方式来实现转换。

如果没有 `Symbol.toPrimitive` 那么 JavaScript 尝试找到它们并且按照下面的顺序进行尝试：

- 对于"string"暗示，`toString -> valueOf`。
- 其他情况，`valueOf -> toString`。

默认情况下，普通对象具有 `toString` 和 `valueOf` 方法：

- `toString` 方法返回一个字符串 `"[object Object]"`。
- `valueOf` 方法返回对象自身。

#### 可以通过更改toString/valueOf 来达到返回指定数据

### ToPrimitive 和 ToString/ToNumber

**唯一强制性的事情是：这些方法必须返回一个原始值。**

```
let obj = {
  toString() { // toString 在没有其他方法的情况下处理所有转换
    return "2";
  }
};

alert(obj * 2); // 4，ToPrimitive 输出 "2"，然后就变成了 2。
```

## 构造函数和操作符 new

### 构造函数

构造函数在技术上是常规函数。不过有两个约定：

1. 他们首先用大写字母命名。
2. 它们只能用 `"new"` 操作符来执行。
3. 这是构造函数的主要目的 — 实现可重用的对象创建代码

例如：

```
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

当一个函数作为 `new User(...)`执行时，它执行以下步骤：

1. 一个新的空对象被创建并分配给 `this`。
2. 函数体执行。通常它会修改 `this`，为其添加新的属性。
3. 返回 `this` 的值。

### 双语法构造函数 new.target 

在一个函数内部，我们可以使用 `new.target` 属性来检查它被调用时，是否使用了 `new`。

常规调用为空，如果通过 `new` 调用，则等于函数：

```
function User(name) {
  if (!new.target) { // 如果你没有运行 new
    return new User(name); // ...会为你添加 new
  }

  this.name = name;
}

let john = User("John"); // 重新调用 new User
alert(john.name); // John
```

### 构造函数return

通常，构造函数没有 `return` 语句。他们的任务是将所有必要的东西写入 `this`，并自动转换。

但是，如果有 `return` 语句，那么规则很简单：

- 如果 `return` 对象，则返回它，而不是 `this`。
- 如果 `return` 一个原函数，则忽略。

换一种说法，带有对象的 `return` 返回该对象，在所有其他情况下返回 `this`。



### 构造函数中的方法

我们不仅可以将属性添加到 this 中，而且还可以添加方法。

```
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John
等同于
john = {
   name: "John",
   sayHi: function() { ... }
}
```



# 数据类型

## 基本数据类型和对象的区别

基本类型

- 是原始类型中的一种值。
- 在 JavaScript 中有 6 种基本类型：`string`、`number`、`boolean`、`symbol`、`null` 和 `undefined`。

对象类型

- 能够存储多个值作为属性。
- 可以使用大括号 `{}` 创建对象，例如：`{name: "John", age: 30}`。JavaScript 中还有其他种类的对象，例如函数就是对象。



**基本类型不是对象 。**

**构造函数** `String/Number/Boolean` **仅供内部使用**

**null/undefined 没有任何方法**



## 数字类型

JavaScript 中的所有数字都以 64 位格式 [IEEE-754](http://en.wikipedia.org/wiki/IEEE_754-1985) 存储，也称为“双精度”。

### 科学计数法 以e代替 0

`"e"` 把数字乘以 `1` 后面跟着指定数量的 0。

`e` 后面的负数表示除以 1 后面跟着给定数量的 0：



### 两个零

数字内部表示的另一个有趣结果是存在两个零：`0` 和 `-0`。

这是因为一个符号由一个位表示，所以每个数字可以是正数或负数，包括零。

在大多数情况下，这种区别并不明显，因为操作员可以将它们视为相同。

### 十六进制 二进制 八进制的数字

十六进制 0x

八进制0o

二进制0b

### toString(base)

方法 `num.toString(base)` 返回带有给定 `base` 的进制中 `num` 的字符串表示。

举个例子

```
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
```

`base` 可以从 `2` 变到 `36`。默认情况下它是 `10`。

常见的用例如下：

- **base=16** 用于十六进制颜色，字符编码等，数字可以是 `0..9` 或 `A..F`。
- **base=2** 主要用于调试按位操作，数字可以是 `0` 或 `1`。
- **base=36** 是最大值，数字可以是 `0..9` 或 `A..Z`。整个拉丁字母用来表示一个数字。对于 `36` 来说，一个有趣而有用的例子是，当我们需要将一个较长的数字标识符变成较短的时候，例如做一个简短的URL。可以简单地用基数为 `36` 的数字系统表示：

```
alert( 123456..toString(36) ); // 2n9c
```

如果我们想直接在一个数字上调用一个方法，比如上面例子中的 `toString`，那么我们需要在它后面放置两个点 `..`

### 数值修约

有几个内置的数值修约函数：

- `Math.floor`

  向下舍入：`3.1` 变成 `3`，`-1.1` 变成 `-2`。

- `Math.ceil`

  向上舍入：`3.1` 变成 `4`，`-1.1` 变成 `-1`。

- `Math.round`

  向最近的整数舍入：`3.1` 变成 `3`, 3.6`变成`4`，`-1.1`变成`-1`。

- `Math.trunc`（IE 浏览器不支持这个方法）

  删除小数点后的所有内容而不舍入：`3.1` 变成 `3`，`-1.1` 变成 `-1`。

#### 四舍五入精确度 实现

1. 乘法和除法

   例如，要将数字四舍五入到小数点后的第二个数字，我们可以将数字乘以 100，调用舍入函数，然后再将其除回 100。

   ```
   let num = 1.23456;
   ```

   ```
   
   ```

   ```
   alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
   ```

2. 函数 [toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 将点数后的数字四舍五入到 `n` 个数字并返回结果的字符串表示。 

   ```
   let num = 12.34;
   ```

   ```
   alert( num.toFixed(1) ); // "12.3"
   ```

### 不精确计算

一个数字以二进制形式存储在内存中，一个 1 和 0 的序列。但是像十进制数字系统看起来很简单的 `0.1`，`0.2`这样的小数实际上是二进制形式的循环小数。

所以会导致 

```
alert( 0.1 + 0.2 == 0.3 ); // false
alert( 0.1 + 0.2 ); // 0.30000000000000004
```

#### 解决方案

1. 我们可以在特定函数的帮助下对结果进行四舍五入 [toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)：

   ```
   let sum = 0.1 + 0.2;
   ```

   ```
   alert( sum.toFixed(2) ); // 0.30
   ```

   请注意 `toFixed` 总是返回一个字符串。它确保它在小数点后有 2 位数字。如果我们有电子购物并需要显示 `0.30 美元`，这实际上很方便。对于其他情况，我们可以使用一元加号将它强制为一个数字：

   ```
   let sum = 0.1 + 0.2;
   ```

   ```
   alert( +sum.toFixed(2) ); // 0.3
   ```

2. 我们可以暂时将数字转换为数学整数，然后将其恢复。它是这样工作的：

   ```
   alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
   ```

### isFinite 和 isNaN

#### 值 “NaN” 是独一无二的，它不等于任何东西，包括它本身：

```
alert( NaN === NaN ); // false
```

#### isFinite(value)

`isFinite(value)` 将其参数转换为数字，如果是常规数字，则返回 `true`，而不是 `NaN / Infinity / -Infinity`：

```
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity
```

##### `isFinite` 用于验证字符串值是否为常规数字：

### **Object.is**

```
NaN`： `Object.is（NaN，NaN）=== true
```

Object.is（0，-0）=== false

在所有其他情况下，`Object.is(a，b)` 与 `a === b` 相同。



### parseInt 和 parseFloat  用于截取数字

```
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
lert( parseInt('a123') ); // NaN, the first symbol stops the process
```

#### **parseInt(str, radix)` 的第二个参数**

`parseInt()` 函数有一个可选的第二个参数。它指定了数字系统的基础，因此 `parseInt` 还可以解析十六进制数字，二进制数字等字符串：

```
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

alert( parseInt('2n9c', 36) ); // 123456
```



## 字符串类型

### 引号

单引号和双引号本质上是一样的。但是，反引号允许我们通过 `${…}` 将任何表达式嵌入到字符串中：

```
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

#### 反引号

##### 允许我们通过 `${…}` 将任何表达式嵌入到字符串中

```
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

##### 它们允许字符串跨行

```
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // 客人清单，多行
```

### 特殊字符

| 字符                                    | 描述                                                         |
| :-------------------------------------- | :----------------------------------------------------------- |
| `\n`                                    | 换行                                                         |
| `\r`                                    | 回车：不单独使用。Windows 文本文件使用两个字符 `\r\n` 的组合来表示换行符。 |
| `\'`, `\"`                              | 引号                                                         |
| `\\`                                    | 反斜线                                                       |
| `\t`                                    | 制表符                                                       |
| `\b`, `\f`, `\v`                        | 退格，换页，垂直标签 —— 为了兼容性，现在已经不使用了         |
| `\xXX`                                  | 具有给定十六进制的 unicode `XX`，例如：`'\x7A'` 和 `'z'` 相同。 |
| `\uXXXX`                                | 带有 UTF-16 编码的十六进制代码 `XXXX` 的 unicode 符号，例如 `\u00A9` —— 是版权符号 `©` 的 unicode。它必须是 4 个十六进制数字。 |
| `\u{X…XXXXXX}`（1 到 6 个十六进制字符） | 具有给定 UTF-32 编码的 unicode 符号。一些罕见的字符用两个 unicode 符号编码，占用 4 个字节。这样我们就可以插入长代码了。 |

unicode 示例：

```
alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫，罕见的中国象形文字（长 unicode）
alert( "\u{1F60D}" ); // 😍，笑脸符号（另一个长 unicode）
```

所有的特殊字符都以反斜杠字符 `\` 开始。它也被称为“转义字符”。



### 字符串长度 

#### `length` **属性**  是属性而非方法



### 字符访问

#### 方括号 [pos]

```
let str = `Hello`;
// 第一个字符
alert( str[0] ); // H
// 最后一个字符
alert( str[str.length - 1] ); // o
```

#### str.charAt(pos)

```
let str = `Hello`;
// 第一个字符
alert( str.charAt(0) ); // H
```

#### 区别

如果没有找到字符，`[]` 返回 `undefined`，而 `charAt` 返回一个空字符串：

```
let str = `Hello`;
alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' （空字符串
```

### 字符串不可变

```
let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // 无法运行
```

### 大小写转换

[toLowerCase()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) 和 [toUpperCase()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) 可以改变大小写：

```
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
```

### 查找子字符串

#### str.indexOf

##### 语法

 [str.indexOf(substr, pos)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)。

它从给定位置 `pos` 开始，在 `str` 中查找 `substr`，如果没有找到，则返回 `-1`，否则返回匹配成功的位置。

##### 依次查找文本出现位置

```
let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}
```

##### if 和位  [bitwise NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT)  集合

```
let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // 正常运行
}
```

#### `~` 运算符

在实际使用中这表示对于 32-bit 整数 `~n` 的意思与 `-(n+1)` 完全一样。

例如：

```
alert( ~2 ); // -3，和 -(2+1) 相同
alert( ~1 ); // -2，和 -(1+1) 相同
alert( ~0 ); // -1，和 -(0+1) 相同
alert( ~-1 ); // 0，和 -(-1+1) 相同
```

#### includes 更现代

 [str.includes(substr, pos)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/includes) 取决于 `str` 是否包含 `substr` 来返回 `true/false`

```
alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, 位置 3 没有“id”
```

#### str.startWith  和str.endsWith

```
alert( "Widget".startsWith("Wid") ); // true，“Widget”以“Wid”开始
alert( "Widget".endsWith("get") ); // true，“Widget”以“get”结束
```

### 获取子字符串

#### 截取文本 **str.slice(start [, end])**

- 返回从 `start` 到（但不包括）`end` 的字符串部分。
- 如果没有第二个参数，`slice` 运行到字符串末尾：
- `start/end` 也有可能是负值。它们的意思是位置从字符串结尾计算：

#### 截取文本 智能检索 **str.substring(start [, end])**

返回 `start` 和 `end` **之间**的字符串部分。

这与 `slice` 几乎相同，但它允许 `start` 大于 `end`。

不支持负参数（不像 slice），它们被视为 `0`。

```
let str = "stringify";

// 这些对于子串是相同的
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ……但除了 slice：
alert( str.slice(2, 6) ); // "ring"（相同字符串）
alert( str.slice(6, 2) ); // ""（空字符串）
```

#### 截取文本 从star截取指定长度 str.substr

从 `start` 开始返回给定 `length` 的字符串部分。

与以前的方法相比，这个允许我们指定 `length` 而不是结束位置：

```
let str = "stringify";
alert( str.substr(2, 4) ); // 环，从第二位获得 4 个字符
alert( str.substr(-4, 2) ); // gi，从第 4 位获得 2 个字符
```

### 字符串比较

比较是基于 Unicode码的

#### str.codePointAt(pos)  将文本转换为Unicode码

返回在 `pos` 位置的字符代码 :

```
// 不同的字母有不同的代码
alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90

```

#### **String.fromCodePoint(code)**

通过数字 `code` 创建字符

```
alert( String.fromCodePoint(90) ); // Z
```

我们还可以用 `\u` 后跟十六进制代码，通过这些代码添加 unicode 字符：

```
// 在十六进制系统中 90 为 5a
alert( '\u005a' ); // Z
```

1. 小写字母总是大于大写字母：

   ```
   alert( 'a' > 'Z' ); // true
   ```

2. 带有指示性标记的字母“不正常”：

   ```
   alert( 'Österreich' > 'Zealand' ); // true
   ```

#### 正确的比较

调用 [str.localeCompare(str2)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) 会根据语言规则返回一个整数，这个整数能表明 `str` 是否在 `str2` 前，后或者等于它：

- 如果 `str` 小于 `str2` 返回负数，例如，`str` 在 `str2` 前。

- 如果 `str` 大于 `str2` 返回正数，例如，`str` 在 `str2` 后。

- 如果它们相等则返回 `0`。

- ```
  alert( 'Österreich'.localeCompare('Zealand') ); // -1
  ```



## 数组

请将数组视为作用于**有序数据**的特殊结构，它们为此提供了特殊的方法。数组在 JavaScript 引擎内部是经过特殊调整的，使得更好的作用于连续的有序数据，所以请以这种方式使用数组。如果你需要任意键值，那很有可能实际上你需要的是常规对象 `{}`。

### 声明

创建一个空数组有两种语法：

```
let arr = new Array();
let arr = [];
```

绝大多数情况下使用的都是第二种语法。我们可以在方括号中添加初始元素：

```
let fruits = ["Apple", "Orange", "Plum"];
```

- 数组可以存储任何类型的元素。
- `length` 属性的值是数组中最大整数索引+1
- 数组和对象一样，都可以在末尾冗余一个逗号：

### 几个增加 取出元素的函数

- `push` 在末端添加一个元素.
- `pop` 从末端取出一个元素.  返回数组的最后一个元素
- `shift` 取出数组的第一个元素并返回它：
- `unshift`  在数组的前端添加元素

### 性能

`push/pop` 方法运行的比较快，而 `shift/unshift` 比较慢。

只获取并移除数字 `0` 对应的元素是不够的。其它元素也需要被重新编号。

`shift` 操作必须做三件事:

1. 移除索引为 `0` 的元素。
2. 把所有的元素向左移动，将索引从 `1` 改成 `0`，`2` 改成 `1` 以此类推，对其重新编号。
3. 更新 `length` 属性。

**数组里的元素越多，移动它们就要花越多的时间，也就意味着越多的内存操作。**

**pop 方法不需要移动任何东西，因为其它元素都保留了各自的索引。这就是为什么 pop 会特别快。**



### 循环

#### for循环

```
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
```

#### for   of

```
let fruits = ["Apple", "Orange", "Plum"];

// 迭代数组元素
for (let fruit of fruits) {
  alert( fruit );
}
```

不能获取当前元素的索引，但大多数情况是够用的。而且这样写更短。

#### for in不合适

`for..in` 循环会迭代**所有属性**，不仅仅是这些数字属性。

`for..in` 循环适用于普通对象，不适用于数组，而且会慢 10-100 倍。

### 关于 length

length =最大的数字索引值加一。

`length` 属性的另一个有意思的点是它是可写的。

如果我们手动增加长度，一切正常，其中没被涉及到的索引都会自动赋值

但是如果我们减少长度，数组就会变短。这种处理是不可逆的

清空数组最好的方法就是：`arr.length = 0;`。



### new Array()

- 它很少被使用，因为方括号 `[]` 更短更简洁。
- 用 `new Array` 使用的是一个单独的数字作为参数，那么就会创建一个**指定了长度，却没有任何项**的数组。
- `new Array(number)` 创建的数组的所有元素都是 `undefined`。





### 数组的toString

数组有自己的 `toString` 方法的实现，会返回以逗号隔开的元素列表。

例如：

```
let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true
```

### `arr[2]()`  调用对象函数

调用从句法来看可以类比于 `obj[method]()`，与 `obj` 对应的是 `arr`，与 `method` 对应的是 `2`。

所以调用 `arr[2]` 函数也就是调用对象函数

## 数组方法

### 添加删除 元素 

已知从开头或结尾添加删除元素的方法：

- `arr.push(...items)` — 从结尾添加元素，
- `arr.pop()` — 从结尾提取元素，
- `arr.shift()` — 从开头提取元素，
- `arr.unshift(...items)` — 从开头添加元素，

### slice 截取数组 

***使用 slice() 来创建一个副本并对其进行排序\***

语法是：

```
arr.slice(start, end)
```

它从所有元素的开始索引 `"start"` 复制到 `"end"` (不包括 `"end"`) 返回一个新的数组。`start` 和 `end` 都可以是负数，在这种情况下，从末尾计算索引。

### concat 连接数组

[arr.concat](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 将数组与其他数组和/或元素结合在一起。

语法：

```
arr.concat(arg1, arg2...)
```

它接受任意数量的参数 — 数组或值。

结果是一个包含`arr`，`arg1`，`arg2`等元素的新数组。

#### 数组的对象具有 `Symbol.isConcatSpreadable` 属性，将替换其元素：

```
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else
```

### splice

`delete obj.key` 是通过 `key` 来移除对应的值。但是对于数组，我们通常希望剩下的元素移除并释放占用的位置，得到一个更短的数组。.

语法是：

```
arr.splice(index[, deleteCount, elem1, ..., elemN])
```

从 `index` 开始：删除 `deleteCount` 元素并在当前位置插入 `elem1, ..., elemN`。最后返回已删除元素的数组。

我们可以将 `deleteCount` 设置为 `0`，`splice` 方法就能够插入元素而不用删除：

**允许负向索引**

在这里和其他数组方法中，负向索引是允许的。它们从数组末尾计算位置，如下所示：

```
let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5
```

### 数组查询

#### 查询内容

- `arr.indexOf(item, from)` 从索引 `from` 查询 `item`，如果找到返回索引，否则返回 `-1`。
- `arr.lastIndexOf(item, from)` — 和上面相同，只是从尾部开始查询。
- `arr.includes(item, from)` — 从索引 `from` 查询 `item`，如果找到则返回 `true`。

#### 带条件查询

##### [arr.find](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 方法 返回查询的第一个结果

语法：

```
let result = arr.find(function(item, index, array) {
  // 如果查询到返回 true
});
```

该函数对数组中的每个元素重复调用：

- `item` 是元素。
- `index` 是它的索引。
- `array` 是数组本身。

如果它返回`true`，则查询停止，返回 `item`。如果没有查询到，则返回 `undefined`。

例如，我们有一组用户，每个用户都有 `id` 和 `name` 字段。让我们找到一个 `id == 1`：

```
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John
```

##### arr.filter 方法 返回查询

`find` 方法查询的是使函数返回 `true` 的第一个元素。

如果需要匹配的有很多，我们可以使用 [arr.filter(fn)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)。

语法与 `find` 大致相同，但是它返回的是所有匹配元素组成的数组：

```
let results = arr.filter(function(item, index, array) {
  // 在元素通过过滤器时返回 true
});
```

例如：

```
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// 返回前两个用户的数组
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
```



### map 

[arr.map](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法是最有用和经常使用的方法之一。

语法：

```
let result = arr.map(function(item, index, array) {
  // 返回新值而不是当前元素
})
```

它对数组中每个元素调用函数并返回符合结果的数组。

### sort(fn)

[arr.sort](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 方法对数组**进行排序**

语法：

```
                          let arr = [ 1, 2, 15 ];

// 该方法重新排列 arr 的内容（并返回它）
arr.sort();

alert( arr );  // 1, 15, 2
```

**这些元素默认情况下按字符串排序。**

```
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15
```

**使用更加简洁的优化**

实际上，比较函数只需要返回一个正数表示更大，而负数表示更少。

通过这个原理我们可以编写更短的函数：

```
let arr = [ 1, 2, 15 ];
arr.sort(function(a, b) { return a - b; });

alert(arr);  // 1, 2, 15
```

**改用箭头函数**

```
arr.sort( (a, b) => a - b );
```

### split  分割文本

[str.split(delim)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/split) 方法可以做到。它通过给定的分隔符 `delim` 将字符串分割成一个数组。

- 参数1   分隔符 如果 传入的是"" 则是逐字分割
- 参数2  数组长度

### join 将数组转换为字符串

[arr.join(str)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 与 `split` 相反。它会在它们之间创建一串由 `str` 粘合的 `arr` 项。

```
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';');

alert( str ); // Bilbo;Gandalf;Nazgul
```

### reduce 

语法是：

```
let value = arr.reduce(function(previousValue, item, index, arr) {
  // ...
}, initial);
```

该函数应用于元素。从第二个参数开始你可能就会觉得很眼熟了：

- `item` — 当前的数组元素。
- `index` — 当前索引。
- `arr` — 数组本身。

目前为止，这很像 `forEach/map`。但还有一个参数不同就是：

- `previousValue` — 是前一个函数调用的结果，第一次调用是初始化。

```
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
```

在第一次运行时，`sum` 是初始值（`reduce` 的最后一个参数），等于 0，`current` 是第一个数组元素，等于 1。所以结果是 `1`。

如果没有初始值，那么 `reduce` 将数组的第一个元素作为初始值，并从第二个元素开始迭代。

**[arr.reduceRight](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) 也一样，但是遍历是从右到左。**

### forEach

```
arr.forEach(function(item, index, array) {
  // ... do something with item
});
```

### Array.isArray

数组基于对象。所以用typeof 无法区别对象和数组

[Array.isArray(value)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)。如果 `value` 是一个数组，则返回 `true`；否则返回 `false`。

```
alert(Array.isArray({})); // false
```

### thisArg

```
let user = {
  age: 18,
  younger(otherUser) {
    return otherUser.age < this.age;
  }
};

let users = [
  {age: 12},
  {age: 16},
  {age: 32}
];

// 找到比 user 小的所有 users
let youngerUsers = users.filter(user.younger, user);

alert(youngerUsers.length); // 2
```

在上面我们使用 `user.younger` 作为过滤器，并提供 `user` 作为它的上下文。如果我们没有提供上下文，`users.filter(user.younger)` 会调用`user.younger` 作为一个独立的函数，这时 `this=undefined`。

### [arr.some(fn)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/some)/[arr.every(fn)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 检查数组

每个元素上调用函数 `fn`。如果任何/所有结果为 `true`，则返回 `true`，否则返回 `false`。

### [arr.fill(value, start, end)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) — 从 `start` 到 `end` 用 `value` 重复填充数组。

### [arr.copyWithin(target, start, end)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) — 

copies its elements from position `start` till position `end` into *itself*, at position `target` (overwrites existing).将其元素从 `start` 到 `end` 在 `target` 位置复制到 **本身**（覆盖现有）。



## Iterables 可迭代对象

### Symbol.iterator 迭代器

- 当 `for..of` 循环开始，它将会调用这个方法（如果没找到，就会报错）。

- 这个方法必须返回一个迭代器 —— 一个有 `next` 方法的对象。

- 当 `for..of` 循环希望取得下一个数值，它就调用这个对象的 `next()` 方法。

- `next()` 返回结果的格式必须是 `{done: Boolean, value: any}`，当 `done=true` 时，表示迭代结束，否则 `value` 必须是一个未被迭代的新值。

- `range` 自身没有 `next()` 方法。

- 相反，是调用 `range[Symbol.iterator]()` 时将会被创建的另一个所谓的“迭代器”对象，将会处理迭代操作。

- `range` 设置为 `range.to = Infinity` 则成为无穷迭代

- `next` 没有什么限制，它可以返回越来越多的值，这也很常见。

  当然，迭代这种对象的 `for..of` 循环将不会停止。但是我们可以通过使用 `break` 来打断它。

```
let range = {
  from: 1,
  to: 5
};

// 1. 使用 for..of 将会首先调用它：
range[Symbol.iterator] = function() {

  // 2. ...它返回一个迭代器：
  return {
    current: this.from,
    last: this.to,

    // 3. next() 将在 for..of 的每一轮循环迭代中被调用
    next() {
      // 4. 它将会返回 {done:.., value :...} 格式的对象
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// 现在它可以运行了！
for (let num of range) {
  alert(num); // 1, 然后 2, 3, 4, 5
}
```

将迭代函数 合并到 对象中取

```
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, 然后 2, 3, 4, 5
}
```

### 字符串可迭代

数组和字符串是应用最广泛的内建可迭代对象。

### 显示调用迭代器

通常情况下，迭代器的内部函数对外部代码是隐藏的。`for..of` 循环可以工作，就是代码需要了解的所有内容了。

```
let str = "Hello";

// 和下面代码完成的功能一致
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // 一个一个输出字符
}
```

### 可迭代对象和类数组对象

- **Iterables** 是应用于 `Symbol.iterator` 方法的对象，像上文所述。
- **Array-likes** 是有索引和 `length` 属性的对象，所以它们很像数组。
- 可迭代对象也许不是类数组对象。反之亦然，一个类数组对象可能也不可迭代。

### Array.from 可迭代对象 数组 和类数组对象的转换

```
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World（pop 方法生效）
let arr = Array.from(range);
alert(arr); // 1,2,3,4,5 （数组的 toString 转化函数生效）
```

#### 第二个为map参数 参数 `mapFn` 应是一个在元素被添加到数组前，施加于每个元素的方法，`thisArg` 允许设置方法的 `this`对象。

```
// 假设 range 来自上文例子中

// 求每个数的平方
let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25
```



## Map 

[Map](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Map) 是一个键值对的集合，很像 `Object`。但主要的区别是，`Map` 允许所有数据类型作为键。

主要的方法包括：

- `new Map()` – 创建 map。
- `map.set(key, value)` – 根据键（key）存储值（value）。
- `map.get(key)` – 根据键返回值，如果 map 中该键不存在，返回 `undefined`。
- `map.has(key)` – 如果键存在，返回 `true`，否则返回 `false`。
- `map.delete(key)` – 移除该键的值。
- `map.clear()` – 清空 map
- `map.size` – 返回当前元素个数。

#### Map 可以使用对象作为键

可以将对象用作键是 `Map` 最显著最重要的特点。对于字符串类型的键，`Object` 可以适用，但是对于上面这个例子，把 `Map` 替换成普通的对象 `Object` 就很困难了。

#### Map比较键

为了检测值是否相等，`Map` 使用了算法 [SameValueZero](https://tc39.github.io/ecma262/#sec-samevaluezero)。它大概就和严格等于号 `===` 相同，但区别是 `NaN` 等于 `NaN`。所以 `NaN` 也可以作为键。

#### 可链式添加

```
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
```

#### Object 转换为Map

 [Object.entries(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)，它可以返回一个对象的键值对数组

```
let map = new Map(Object.entries({
  name: "John",
  age: 30
}));
```

#### 遍历

有四种方法可以循环遍历 `map`：

- `map.keys()` – 返回键的迭代器，
- `map.values()` – 返回值的迭代器，
- `map.entries()` – 返回 `[key, value]` 迭代器入口，`for..of` 循环会默认使用它。
- 内建的forEach

```
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// 迭代键（vegetables）
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// 迭代值（amounts）
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// 迭代键值对 [key, value]
for (let entry of recipeMap) { // 和 recipeMap.entries() 一样
  alert(entry); // cucumber,500（等等）
}
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 等等
});
```

## Set

`Set` 是一个值的集合，这个集合中所有的值仅出现一次。

主要方法包括：

- `new Set(iterable)` – 创建 set，利用数组来创建是可选的（任何可迭代对象都可以）。
- `set.add(value)` – 添加值，返回 set 自身。
- `set.delete(value)` – 删除值，如果该 `value` 在调用方法的时候存在则返回 `true` ，否则返回 `false`。
- `set.has(value)` – 如果 set 中存在该值则返回 `true` ，否则返回 `false`。
- `set.clear()` – 清空 set。
- `set.size` – 元素个数。

### set迭代

我们可以使用 `for..of` 或者 `forEach` 来循环查看 set：

```
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// 和 forEach 相同：
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

注意到这里有个有趣得事情。`forEach` 函数用于 `Set` 时有三个参数：value，然后又一个 value，之后是目标对象。确实，相同值的 value 在参数中出现了两次。

这是为了兼容 `Map`，它在使用 `forEach` 方法时也包括三个参数。

适用于 `Map` 的迭代方法 set 也同样支持：

- `set.keys()` – 返回 set 中值的迭代对象，
- `set.values()` – 和 `set.keys` 一样，为了兼容 `Map`，
- `set.entries()` – 返回形如 `[value, value]` 的迭代对象，为了兼容 `Map` 而存在。

## WeakMap 和 WeakSet 无迭代

`WeakSet` 是一种特殊的 `Set`，它不会阻止 JavaScript 将它的元素从内存中移除。`WeakMap` 和 `Map` 的区别也和上述一样。

在一个正常 `Map` 中，我们将某对象存储为键还是值并不重要。它将会被一直保留在内存中，就算已经没有指向它的引用。

**WeakMap/WeakSet 不会阻止内存移除对象。**

### WeakMap 

**其他方式无法访问它们时将其与关联值一起删除 当有关联数据时候 用这个**

它的键必须是对象，不能是基础类型的值

```
let weakMap = new WeakMap();

let obj = {};
weakMap.set(obj, "ok"); // 运行正常（对象作为键）
weakMap.set("test", "Whoops"); // 错误，因为“test”是原始类型
```

现在，如果我们使用对象作为它的键，并且没有任何引用指向这个对象 —— 它将会自动被从内存中移除（也会从 map 中移除）。

```
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // 覆盖引用

// john 从内存中移除了！
```

`WeakMap` 仅有如下方法：

- `weakMap.get(key)`
- `weakMap.set(key, value)`
- `weakMap.delete(key, value)`
- `weakMap.has(key)`

```
weakMap.put(john, "secret documents");
// 如果 john 不存在了，secret documents 也将会被销毁
```

#### 应用场景

例如，我们写了一段代码来保存每个用户的访问次数。信息保存在一个 map 中：用户是键，访问次数是值。当用户离开了，我们也就不再需要保存他的访问次数了。

```
let john = { name: "John" };

let visitsCountMap = new WeakMap();

visitsCountMap.set(john, 123);

// 现在 john 离开了，我们不需要他了
john = null;

// 除了 WeakMap 没有其他引用了，
// 所以这个对象会自动的从内存和 visitsCountMap 中删除
```

### WeakSet

`WeakSet` 的行为类似：

- 它和 `Set` 类似，但是我们仅能将对象添加进 `WeakSet`（不可以是基础类型）
- 仅当对象存在其他位置的引用时它才存在于 set 中。
- 就像 `Set` 一样，它支持 `add`，`has` 和 `delete`，不支持 `size`，`keys()` 也不支持迭代器。

例如，我们可以用它来追踪一个项目是否被检查过：

```
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

// 用数组的元素来填充（3 个元素）
let unreadSet = new WeakSet(messages);

// 我们可以使用 unreadSet 来看一个 message 是否未读
alert(unreadSet.has(messages[1])); // true
// 读过之后就将它从 set 中移除
unreadSet.delete(messages[1]); // true

// 当我们对消息列表做 shift 操作，set 就会自动清理
messages.shift();
// 不需要清理 unreadSet，它现在还有两个元素
// 可惜并没有方法可以获取元素数目，所以无法显示出来
```

## 对象的键 值 项

### Object.keys、values、entries 

对于纯对象，下列方法是可用的：

- [Object.keys(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) —— 返回一个包含该对象全部的键的数组。
- [Object.values(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/values) —— 返回一个包含该对象全部的值的数组。
- [Object.entries(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) —— 返回一个包含该对象全部 [key, value] 键值对的数组。

… 但是请注意区别（比如说跟 map 的区别）：

|          | Map          | Object                                  |
| :------- | :----------- | :-------------------------------------- |
| 调用语法 | `map.keys()` | `Object.keys(obj)`，而不是 `obj.keys()` |
| 返回值   | 可迭代项     | 「真正的」数组                          |

```
let user = {
  name: "John",
  age: 30
};
```

- `Object.keys(user) = [name, age]`
- `Object.values(user) = ["John", 30]`
- `Object.entries(user) = [ ["name","John"], ["age",30] ]`

### 这种遍历 会忽略 Symbol

### Object.getOwnPropertySymbols 返回一个只包含 Symbol 类型的键的数组

### Reflect.ownKeys(obj) 返回所有键



## 解构赋值

### 数组解构

```
// 有一个存放了名字和姓氏的数组
let arr = ["Ilya", "Kantor"]

// 解构赋值
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor
```

#### 更优雅的解决方案 加入 split

```
let [firstName, surname] = "Ilya Kantor".split(' ');
```

#### 解构 不会影响原来的 对象

#### 使用 ， 忽略想忽略的元素

#### 等号右侧 放置  可迭代对象

#### 等号左侧  放置 任何类型

#### 可以使用.entries() 循环

我们可以使用 .entries() 方法和解构语法来遍历一个对象的键-值对：

```
let user = {
  name: "John",
  age: 30
};

// 循环遍历键-值对
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}
```

#### 剩余的 可以使用...封装包含进去

#### 可以设置默认值  =

### 对象解构

基本的语法是：

```
let {var1, var2} = {var1:…, var2…}
```

#### 顺序可以改变

属性 `options.title`、`options.width` 和 `options.height` 的值被赋给了对应的变量。变量的顺序并不重要，以下的代码也奏效：

```
// 改变 let {...} 中属性的顺序
let {height, width, title} = { title: "Menu", height: 200, width: 100 }
```

#### 可以用：重命名

```
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { 原属性：目标变量 }
let {width: w, height: h, title} = options;
```

#### 使用let提前声明变量后需要注意

为了告诉 JavaScript 这不是一个代码块，我们可以把整个赋值表达式用括号 `(...)` 包起来：

```
let title, width, height;

// 现在就正确了
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu
```

### 嵌套结构

在以下代码中 `options` 的属性 `size` 是另一个对象，属性 `items` 是另一个数组。赋值语句中等号左侧的模式拥有相同的结构：

```
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true    // 一些不会被解构的额外属性
};

// 为了清晰起见，解构赋值语句被写成多行
let {
  size: { // 把 size 赋值到这里
    width,
    height
  },
  items: [item1, item2], // 把 items 赋值到这里
  title = "Menu" // 在对象中不存在的属性（会使用默认值）
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut
```

### 智能函数参数 参数中直接设置解构

```
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width 赋值给 w
  height: h = 200, // height 赋值给 h
  items: [item1, item2] // items 第一个元素赋值给 item1, 第二个元素赋值给 item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options);
```

我们可以通过指定空对象 `{}` 为整个函数参数的默认值：

```
                                                                    // 清晰起见，精简了部分参数
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200
```

## 日期和时间

### new Date()

```
let now = new Date();
alert( now ); // 显示当前的日期/时间
```

#### 不带参数 显示当前的日期和时间

#### 带参数（时间戳）

`date.getTime()` 来将现有的 `Date` 对象转化为时间戳

#### 带参数（datastring） 并且是字符串，那么该参数会通过 `Date.parse` 算法解析

#### **new Date(year, month, date, hours, minutes, seconds, ms)**

- `year` 必须是四位数：`2013` 是合法的，`98` 是不合法的。
- `month` 计数从 `0` （一月） 开始，到 `11` （12月）。
- `date` 是当月的具体某一天，如果缺失，默认是 `1`。
- 如果 `hours/minutes/seconds/ms` 缺失的话，它们默认值是 `0`。

### 访问时间组件

#### getFullYear() 返回年份4位数

#### getMonth()  返回月份 0-11

#### getDate()  获取当月的日期 1-31

#### getHours(), getMinutes(), getSeconds(), getMilliseconds()

#### getDay（） 获取当前是一周的第几天

#### getTime() 返回当前日期的时间戳

#### getTimezoneOffset()  返回时区  以分钟为单位



### 设置日期信息

- setFullYear(year [, month, date])
- setMonth(month [, date])
- setDate(date)
- setHours(hour [, min, sec, ms])
- setMinutes(min [, sec, ms])
- setSeconds(sec [, ms])
- setMilliseconds(ms)
- setTime(milliseconds) （使用自 1970-01-01 00:00:00 UTC+0 开始的毫秒数来设置整个日期对象）

### 自动校准

假设我们要在日期「2016 年 2 月 28 日」上再加 2 天。结果可能是「3 月 2 日」或者「3 月 1 日」，原因是闰年的存在。但是我们不需要去考虑这些，直接加两天，剩下的 `Date` 对象会帮我们处理：

```
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert( date ); // 2016 年 3 月 1 日
```

我们可以设置 0 甚至 负值。举个例子：

```
let date = new Date(2016, 0, 2); // 2016 年 1 月 2 日

date.setDate(1); // 设置为当月的第一天
alert( date );

date.setDate(0); // 天数最小可以设置为 1，所以这里设置为上一月的最后一天
alert( date ); // 2015 年 12 月 31 日
```

### 日期转换为数值 会自动转换为时间戳  用于计算函数运行时间

### 当一个函数需要多次运行 需要进行预热 以内部优化节省cpu

```
// 主循环中增加「升温」环节
bench(diffSubtract);
bench(diffGetTime);

// 开始度量
for (let i = 0; i < 1000; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}
```



### Date.now() 获取当前时间

### Date.parse()



字符串的格式是：`YYYY-MM-DDTHH:mm:ss.sssZ`，其中：

- `YYYY-MM-DD` —— 日期：年-月-日。
- 字符串 `"T"` 是一个分隔符。
- `HH:mm:ss.sss` —— 时间：小时，分钟，秒，毫秒。
- 可选字符 `'Z'` 代表时区。单个字符 `Z` 代表 UTC+0。

简短形式也是可以的，比如 `YYYY-MM-DD` 或者 `YYYY-MM` 又或者 `YYYY`。

### 浏览器拥有 [performance.now()](https://developer.mozilla.org/zh/docs/Web/API/Performance/now) 方法来提供页面加载的微秒数

## JSON

- `JSON.stringify` 将对象转换为 JSON。
- `JSON.parse` 将 JSON 转换回对象。
- 字符串使用双引号。JSON 中没有单引号或反引号。所以 `'John'` 转成 `"John"`。
- 对象属性名称也是双引号的。这是强制性的。所以 `age:30` 转成 `"age":30`。

### 不支持 与支持转换的数据类型

- 无法转换的
  - 函数属性（方法）。
  - Symbolic 属性。
  - 存储 `undefined` 的属性。
- 原生支持的 JSON 类型是：
  - Objects `{ ... }`
  - Arrays `[ ... ]`
  - Primitives:
    - strings,
    - numbers,
    - boolean values `true/false`,
    - `null`.

### JSON.stringify

```
let json = JSON.stringify(value[, replacer, space])
```

- value

  要编码的值。

- replacer

  要编码的属性数组或映射函数 `function(key, value)`。

- space

  文本添加缩进、空格和换行符 及每个嵌套前的缩进

大部分情况，`JSON.stringify` 仅与第一个参数一起使用。但是，如果我们需要微调替换过程，比如过滤掉循环引用，我们可以使用 `JSON.stringify` 的第二个参数。

```
// 第二个参数的应用
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
// 第三个参数的应用
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 2));
/* two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
```

请注意，JSON 编码的对象与对象字面量有几个重要的区别：

- 

### 定制化 toJSON 用语自定义返回

`toJSON` 既用于直接调用 `JSON.stringify(room)` 也可以用于嵌套对象。

```
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/
```

### JSON.parse

```
let value = JSON.parse(str[, reviver]);
```

- str

  JSON 字符串解析。

- reviver

  将为每个 `(key,value)` 对 调用的可选函数（键，值）进行转换。

```
let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);

alert( user.friends[1] ); // 1
```

#### revievr的用法

```
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() ); // now works!
```

# 函数深入

## 递归和堆栈

### 递归的简洁性

```
function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}
```

最大的嵌套调用次数（包括首次）称为**递归深度**。在我们的例子中，它正好等于 `n`。

最大递归深度受限于 JavaScript 引擎。我们可以确信基本是 10000，有些引擎可能允许更大，但是 100000 很可能就超过了限制。

### 执行堆栈

[执行上下文](https://tc39.github.io/ecma262/#sec-execution-contexts)是一个内部数据结构，它包含一个函数执行时的细节：当前工作流在哪里，当前的变量，`this` 的值（这里我们不使用它），以及其它一些内部细节。

每个函数调用都有与其相关联的执行上下文。

当一个函数有嵌套调用时，下面的事情会发生：

- 当前函数被暂停；
- 与它关联的执行上下文被一个叫做**执行上下文堆栈**的特殊数据结构保存；
- 执行嵌套调用；
- 嵌套调用结束后，之前的执行上下文从堆栈中恢复，外部函数从停止的地方继续执行。

递归 二层

1. 当前上下文被「记录」在堆栈的顶部；
2. 为子调用创建新上下文；
3. 当子调用结束后 —— 前一上下文从堆栈弹出，继续执行。

### 递归遍历

```
let company = { // 是同样的对象，简洁起见做了压缩
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// 用来完成作业的函数
function sumSalaries(department) {
  if (Array.isArray(department)) { // 情况 (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // 求数组的和
  } else { // 情况 (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // 递归调用子部门，对结果求和
    }
    return sum;
  }
}

alert(sumSalaries(company)); // 6700
```

### 尾递归优化

如果递归调用是函数的最后一步（比如上面的 `sumTo`），那么外部的函数就不再需要恢复执行，我们也就不再需要记录它的执行上下文了。这样的话 `sumTo(100000)` 是可以求解的。但是如果你的 JavaScript 引擎不支持这个优化，就会报错：超出最大栈深度，因为一般堆栈的大小是有限制的。

### 链表

**链表元素**是一个被递归定义的对象，它有：

- `value`。
- `next` 属性引用下一个**链表元素**或者代表末尾的 `null`。

```
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
```

#### 增加值

```
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// 将新值添加到列表头部
list = { value: "new item", next: list };
```

#### 移除值

```
list.next = list.next.next;
```

我们让 `list.next` 从 `1` 跳到值 `2`。值 `1` 就从链上被去除。如果没有被存储在其它地方，那么它会自动的从内存中被移除。



## 剩余参数 的收集和展开

 

### Rest  必须为最后一个参数

在 JavaScript 中，无论函数定义了多少个形参，你都可以传入任意个实参进行调用。

如下：

```
function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5) );
```

### ... 使用Rest参数的操作符 

```
function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Julius Caesar

  // titles 数组中包含了剩余的参数
  // 也就是有 titles = ["Consul", "Imperator"]
  alert( titles[0] ); // Consul
  alert( titles[1] ); // Imperator
  alert( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");
```

### arguments 变量

- `arguments` 是一个类数组且可遍历的变量，但它终究不是数组。它没有数组原型链上的函数，我们没法直接调用诸如 `arguments.map(...)` 等这样的函数。
- 同样的，因为它总是包含所有的参数，我们并不能像使用 Rest 参数一样，期望它只截取入参的一部分。
- 箭头函数是没有 arguments的

```
function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // 它是可遍历的
  // for(let arg of arguments) alert(arg);
}

// 依次弹出提示：2，Julius，Caesar
showName("Julius", "Caesar");

// 依次弹出提示：1，Ilya，undefined（不存在第二个参数）
showName("Ilya");
```

### Spread 展开数组 操作符...

- `Array.from` 同时适用于类数组对象和可遍历对象。
- Spread 操作符只能操作可遍历对象。

`...arr`，它会把可迭代的对象 `arr` “展开”为参数列表。

例如使用 `Math.max`：

```
let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5（Spread 操作符把数组转为参数列表）
```

## 闭包

**闭包会造成内存不被释放**；

函数保存其外部的变量并且能够访问它们称之为[闭包](https://en.wikipedia.org/wiki/Closure_(computer_programming))。

 JavaScript 中函数都是天生的闭包（只有一个例外，请参考 ["new Function" 语法](http://zh.javascript.info/new-function)）。



### 语法环境

词法环境对象由两部分组成：

1. **环境记录（Environment Record）**—— 一个把所有局部变量作为其属性（包括一些额外信息，比如 `this`值）的对象。
2. **外部词法环境（outer lexical environment）** 的引用 —— 通常是嵌套当前代码（当前花括号之外）之外代码的词法环境。

所以，『变量』只是环境记录这个特殊内部对象的属性。『访问或修改变量』意味着『访问或改变词法环境的一个属性』。

- 变量是特定内部对象的属性，与当前执行的（代码）块/函数/脚本有关。
- 操作变量实际上操作的是该对象的属性。

### 内部和外部的词法环境

首先，当函数运行时，会自动创建一个新的函数词法环境。这是一条对于所有函数通用的规则。这个词法环境用于存储调用的局部变量和参数。

在这个函数的执行中，有两个词法环境：内部一个（用于函数调用）和外部一个（全局）：

- 内部词法环境对应于 `say` 的当前执行。它有一个单独的变量：`name`，它是一个函数参数。我们执行 `say("John")`，那么 `name` 的值为 `"John"`。
- 它的外部词法环境就是全局词法环境。

**当代码试图访问一个变量时 —— 它首先会在内部词法环境中进行搜索，然后是外部环境，然后是更外部的环境，直到（词法环境）链的末尾。**

**函数访问外部变量；它使用的是最新的值。**

每一次调用 会新建一个语法环境

语法环境是一个规范对象  我们不能再代码中获取或直接操作该对象

### 嵌套函数

1. 内部函数的本地。
2. 外部函数的变量。
3. 以此类推直到到达全局变量。

```
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

alert( counter1() ); // 0
alert( counter1() ); // 1

alert( counter2() ); // 0 （独立的）
```

### 环境详情

不管是使用函数声明或是函数表达式创建的函数都没关系  所有的函数在『诞生』时都会根据创建它的词法环境获得隐藏的 `[[Environment]]` 属性 

词法环境中存储着两个东西：

1. 一个是环境记录，它保存着局部变量。在我们的例子中 `count` 是唯一的局部变量（当执行到 `let count`这一行时出现）。
2. 另外一个是外部词法环境的引用，它被设置为函数的 `[[Environment]]` 属性。这里 `makeCounter` 的 `[[Environment]]` 属性引用着全局词法环境。

### If  会创建 if-only的词法环境

新的词法环境是封闭的作为其外部引用，所以可以找到 `phrase`。但在 `if` 内声明的变量和函数表达式都保留在该词法环境中，从外部是无法被访问到的。



### for 和 while循环每次迭代 都会生成新的独立的语法环境

### 代码块   

我们也可以使用『空』的代码块将变量隔离到『局部作用域』中。

这是因为代码块有其自身的词法环境，块之外（或另一个脚本内）的代码访问不到代码块内的变量。

```
{
  // 用局部变量完成一些不应该被外面访问的工作

  let message = "Hello";

  alert(message); // Hello
}

alert(message); // 错误：message 未定义
```

### llFE 立即调用

```
(function() {

  let message = "Hello";

  alert(message); // Hello

})();
```

JavaScript 不允许立即调用函数声明。

需要使用圆括号告诉给 JavaScript，这个函数是在另一个表达式的上下文中创建的，因此它是一个表达式。它不需要函数名也可以立即调用。

### 垃圾收集

- 通常，在函数运行后词法环境会被清理。举个例子：

  ```
  function f() {
  ```

  ```
    let value1 = 123;
  ```

  ```
    let value2 = 456;
  ```

  ```
  }
  ```

  ```
  
  ```

  ```
  f();
  ```

  这里的两个值都是词法环境的属性。但是在 `f()` 执行完后，该词法环境变成不可达，因此它在内存中已被清理。

- …但是如果有一个嵌套函数在 `f` 结束后仍可达，那么它的 `[[Environment]]` 引用会继续保持着外部词法环境存在：

  ```
  function f() {
  ```

  ```
    let value = 123;
  ```

  ```
  
  ```

  ```
    function g() { alert(value); }
  ```

  ```
  
  ```

  ```
    return g;
  ```

  ```
  }
  ```

  ```
  
  ```

  ```
  let g = f(); // g 是可达的，并且将其外部词法环境保持在内存中
  ```

- 请注意如果多次调用 `f()`，返回的函数被保存，那么其对应的词法对象同样也会保留在内存中。下面代码中有三个这样的函数：

  ```
  function f() {
  ```

  ```
    let value = Math.random();
  ```

  ```
  
  ```

  ```
    return function() { alert(value); };
  ```

  ```
  }
  ```

  ```
  
  ```

  ```
  // 数组中的三个函数，每个都有词法环境相关联。
  ```

  ```
  // 来自对应的 f()
  ```

  ```
  //         LE   LE   LE
  ```

  ```
  let arr = [f(), f(), f()];
  ```

#### V8测试调用的有趣点 现在已经修复

**V8（Chrome、Opera）的一个重要副作用是这样的变量在调试是无法访问的。**

打开 Chrome 浏览器的开发者工具运行下面的代码。

当它暂停时，在控制台输入 `alert(value)`。

```
function f() {
  let value = Math.random();

  function g() {
    debugger; // 在控制台中输入 alert( value );没有该值！
  }

  return g;
}

let g = f();
g();
```

## var

变量声明3种方式

1. `let`
2. `const`
3. `var`

### var 没有块级作用域

```
function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  alert(phrase); // works
}

sayHi();
alert(phrase); // 报错：phrase is not defined
```

可以看到，`var` 穿透了 `if`、`for` 或其它块级代码。这是因为在早期的 JavaScript 里，块没有词法环境。而 `var` 就是对它的一个回忆。

### var在函数开头被处理 变量提升 

`var` 声明在函数开始时处理（或者全局声明之于脚本开始）。

换言之，`var` 变量会在函数开头被定义，与它在代码里定义的位置无关（这里不考虑定义在嵌套函数里的场景）。

如下代码：

```
function sayHi() {
  phrase = "Hello";

  alert(phrase);

  var phrase;
}
```

**声明会被提升，但是赋值不会。**

## 全局对象

全局对象提供可在任何地方使用的变量和函数。大多数情况下，这些全局变量内置于语言或主机环境中。

浏览器中它被命名为 “window”，对 Node.JS 而言是 “global”，其它环境可能用的别的名字。

### 浏览器 window对象

1. 除了扮演全局对象的角色之外，它还提供“浏览器窗口”功能。

   我们可以使用 `window` 来访问特定于浏览器窗口的属性和方法：

   ```
   alert(window.innerHeight); // 显示浏览器窗口高度
   ```

   ```
   
   ```

   ```
   window.open('http://google.com'); // 打开一个新的浏览器窗口
   ```

2. 顶级 `var` 变量和函数声明后自动成为 `window` 的属性。

   例如:

   ```
   var x = 5;
   ```

   ```
   
   ```

   ```
   alert(window.x); // 5 (变量 x 成为 window 的一个属性)
   ```

   ```
   
   ```

   ```
   window.x = 0;
   ```

   ```
   
   ```

   ```
   alert(x); // 0, 变量已修改
   ```

   请注意，更现代的 `let / const` 声明不会发生这种情况：

   ```
   let x = 5;
   ```

   ```
   
   ```

   ```
   alert(window.x); // undefined ("let" 不会创建窗口属性)
   ```

3. 此外，所有脚本共享相同的全局作用域，因此在某一个 `` 中声明的变量在其他的里面也可见：

   ```
   <script>
   ```

   ```
     var a = 1;
   ```

   ```
     let b = 2;
   ```

   ```
   </script>
   ```

   ```
   
   ```

   ```
   <script>
   ```

   ```
     alert(a); // 1
   ```

   ```
     alert(b); // 2
   ```

   ```
   </script>
   ```

4. 而且，虽然是小问题但仍然重要的一点是：全局范围内 `this` 的值是 `window`。

   ```
   alert(this); // window
   ```

### 使用js 模块 避免

在一个模块中，`var x` 不会成为 `window` 的属性：

两个模块的变量彼此不可见：

模块中 `this` 的顶级值是 `undefined`（为什么它一定得是 `window` ？）：

**使用  后，通过将顶级作用域与 window 分开的方式来修复语言的设计缺陷。**

### 有效用法

1.用于当前用户信息的共享

```
window.currentUser = {
  name: "John",
  age: 30
};
```

2.测试全局对象以验证是否支持现代语言特性

```
if (!window.Promise) {
  alert("Your browser is really old!");
}
```

3.我们可以创建 “polyfills”：添加环境不支持（比如旧的浏览器）但存在于现代标准中的功能

```
if (!window.Promise) {
  window.Promise = ... // 自定义实现现代语言特性
}
```

## 函数对象 NFE

### 函数名字 属性name

```
let sayHi = function() {
  alert("Hi");
}

alert(sayHi.name); // sayHi（生效了!）
```

当以默认值的方式赋值时，它也有效：

```
function f(sayHi = function() {}) {
  alert(sayHi.name); // sayHi （生效了！）
}

f();
```

规范中把这种特性叫做「上下文命名」。如果函数自己没有提供，那么在赋值中，会根据上下文来推测一个。

#### 对象方法也有名字：

### 属性 length 参数的个数

```
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2
```

可以看到，余参不参与计数。

```
function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
```

### 自定义属性

我们也可以添加我们自己的属性。

这里我们增加了 `counter` 属性，用来跟踪总的调用次数：

```
function sayHi() {
  alert("Hi");

  // 我们记录一下运行次数
  sayHi.counter++;
}
sayHi.counter = 0; // 初始值

sayHi(); // Hi
sayHi(); // Hi

alert( `调用了 ${sayHi.counter} 次` ); // 调用了 2 次
```

#### 自定义属性≠变量

一个被赋值的函数属性，比如 `sayHi.counter = 0` **没有**在函数内定义一个局部变量 `counter`。或者说，一个 `counter` 属性与一个 `let counter` 的变量是毫不相关的两个东西。

### 命名函数表达式 NFE

```
let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};
```

关于名字 `func`，有两个特殊的地方：

1. 它允许函数在内部引用自己。
2. 它在函数外是不可见的。

```
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // 使用 func 再次调用自己
  }
};

sayHi(); // Hello, Guest
```

## new Function

你可以这样创建一个函数：

```
let func = new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

即在创建函数时，先传入函数所需的参数（准确地说是形参名），最后传入函数的函数体。传入的所有参数均为字符串。

与已知方法相比这种方法最大的不同是，它是在运行时使用描述函数的字符串来创建函数的。

```
let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3
```

### 闭包使用时 环境指向全局 而非函数词法环境

```
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}
getFunc()(); // error：value 未定义
```

**即使我们可以在 new Function 中访问外部词法环境，我们也会受挫于 minifier。**（压缩js css的工具）

## 定时器 setTimeout  setInterval

- `setTimeout` 将函数的执行推迟到一段时间之后再执行。
- `setInterval` 让函数间隔一定时间周期性执行。

### setTimeout

****只在当前代码块代码调用结束后调用****

```
let timerId = setTimeout(func|code, delay[, arg1, arg2...])
```

`func|code` ：想要执行的函数或代码字符串。 一般传入的都是函数，介于某些历史原因，代码字符串也支持，但是不建议使用这种方式。

`delay` ：执行前的延时，以毫秒为单位（1000 毫秒 = 1 秒）；

`arg1`，`arg2`… ：要传入被执行函数（或代码字符串）的参数列表（IE9 以下不支持）

```
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
```

#### clearTimeout 取消调度

`setTimeout` 在调用时会返回一个“定时器 id”—— 例子中为变量 `timerId` 持有

```
let timerId = setTimeout(...);
clearTimeout(timerId);
```

### setInterval

```
let timerId = setInterval(func|code, delay[, arg1, arg2...])
```

所有参数的意义也是相同的，不过相对于 `setTimeout` 只执行一次，`setInterval` 是每间隔一定时间周期性执行。

想要阻止后续调用，我们需要调用 `clearInterval(timerId)`。

下面的例子中，每间隔 2 秒就会输出一条消息。5 秒之后，输出停止：

```
// 每 2 秒重复一次
let timerId = setInterval(() => alert('tick'), 2000);

// 5 秒之后停止
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```

### 在众多浏览器中，IE 和 Firefox 在显示 `alert/confirm/prompt` 时，内部的定时器仍旧会继续滴答，但是在 Chrome、Opera 和 Safari 中，内部的定时器会暂停/冻结。

### 递归setTimeout

```
let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
```

### **递归版 setTimeout 能保证每次执行间的延时都是准确的，setInterval 却不能够。**

**setTimeout 是函数执行完 等待 固定时间**

**setInterval 是函数执行+等待的时间 =固定时间**

### setTimeout(...,0)

还有一种特殊的用法：`setTimeout(func, 0)`。

这样调度可以让 `func` 尽快执行，但是只有在当前代码执行完后，调度器才会对其进行调用。

也就是说，函数是在刚好当前代码执行完后执行，换而言之，那就是**异步**。

#### 用于分割CPU高占用的任务

```
let i = 0;

let start = Date.now();

function count() {

  // 先完成一部分任务(*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count, 0); // 安排下一次任务 (**)
  }

}

count();
```

### 浏览器内  嵌套定时器运行的最小延时

在浏览器环境下，嵌套定时器的运行频率是受限制的。根据 [HTML5 标准](https://www.w3.org/TR/html5/webappapis.html#timers) 所言：“经过 5 重嵌套之后，定时器运行间隔强制要求至少达到 4 毫秒”。



浏览器内部的定时器会因各种原因而出现降速情况，譬如：

- CPU 过载。
- 浏览器页签切换到了后台模式。
- 笔记本电脑用的是电池供电（译者注：使用电池会以降低性能为代价提升续航）。

## Call  /apply  装饰和转发

**`call` 接受一个参数列表，**

`apply` 则接受带有一个类似数组的对象。

`...`，它可以将数组（或任何可迭代的）作为参数列表传递。

`arguments` 特殊的类数组对象

### 透明缓存



```
function slow(x) {
  // 这里可能会有重负载的CPU密集型工作
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) { // 如果结果在 map 里
      return cache.get(x); // 返回它
    }

    let result = func(x); // 否则就调用函数

    cache.set(x, result); // 然后把结果缓存起来
    return result;
  };
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) 被缓存起来了
alert( "Again: " + slow(1) ); // 一样的

alert( slow(2) ); // slow(2) 被缓存起来了
alert( "Again: " + slow(2) ); // 也是一样
```

`cachingDecorator` 是一个**装饰器**：一个特殊的函数，它接受另一个函数并改变它的行为。

我们的想法是，我们可以为任何函数调用 `cachingDecorator`，它将返回缓存包装器。这很好，因为我们有很多函数可以使用这样的特性，而我们需要做的就是将 `cachingDecorator` 应用于它们。

### func.call 作为 this 上下文

语法如下：

```
func.call(context, arg1, arg2, ...)
function sayHi() {
  alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// 使用 call 将不同的对象传递为 "this"
sayHi.call( user ); // this = John
sayHi.call( admin ); // this = Admin
```

### fun.apply 传递多参数

```
function say(time, phrase) {
  alert(`[${time}] ${this.name}: ${phrase}`);
}

let user = { name: "John" };

let messageData = ['10:00', 'Hello']; // 成为时间和短语

// user 成为 this，messageData 作为参数列表传递 (time, phrase)
say.apply(user, messageData); // [10:00] John: Hello (this=user)
```

`call` 和 `apply` 之间唯一的语法区别是 `call` 接受一个参数列表，而 `apply` 则接受带有一个类似数组的对象。

如果我们仔细观察，那么 `call` 和 `apply` 的使用会有一些细微的差别。

- 扩展运算符 `...` 允许将 **可迭代的** `参数列表` 作为列表传递给 `call`。
- `apply` 只接受 **类似数组一样的** `参数列表`。

#### 使用apply  实现呼叫转移

```
let wrapper = function() {
  return anotherFunction.apply(this, arguments);
};
```



## 函数绑定 bind

### 解决 丢失this

下面是使用 `setTimeout` 时 `this` 时如何丢失的：



```
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
```

正如我们看到的那样，`this.firstName` 不是输出为 “John”，而是 `undefined`！

这是因为 `setTimeout` 获取到了函数 `user.sayHi`，但它和对象分离开了。最后一行可以写为：

```
let f = user.sayHi;
setTimeout(f, 1000); // 用户上下文丢失
```

### 解决方案 1 包装层

```
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);
```

看起来不错，但是代码结构看上去有一些漏洞。

如果在 `setTimeout` 触发之前（一个一秒的延迟）`user` 就改变了值又会怎么样呢？那么，突然间，函数就会被的错误地调用。

### 解决方案2 bind

基本的语法是：

```
// 稍后将会有更复杂的语法
let boundFunc = func.bind(context);
let user = {
  firstName: "John",
  say(phrase) {
    alert(`${phrase}, ${this.firstName}!`);
  }
};

let say = user.say.bind(user);

say("Hello"); // Hello, John ("Hello" 参数被传递给了函数 say)
say("Bye"); // Bye, John ("Bye" 被传递给了函数 say)
```

# 对象的属性配置

## 属性的标志和描述符

### 属性的标志

通常我们之间通过 obj.xxx创建赋值属性的时候 这些标志的值均为true

对象属性除 **`value`** 外还有三个特殊属性（所谓的“标志”）：

- **`writable`** — 如果为 `true`，则可以修改，否则它是只读的。
- **`enumerable`** — 如果是 `true`，则可在循环中列出，否则不列出。**如for...in 循环 及Object.keys**
- **`configurable`** — 如果是 `true`，则此属性可以被删除，相应的特性也可以被修改，否则不可以。



### 查询有关属性的完整信息

Object.getOwnPropertyDescriptor 

```javascript
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
	obj:需要获取信息的对象
    propertyName:属性的名称
```

### 修改标志

Object.defineProperty

```javascript
Object.defineProperty(obj, propertyName, descriptor)
	obj---要处理的对象
	propertyName---要处理的属性
	descriptor---要应用的属性描述符
```

```javascript
Object.defineProperty(user, "name", {
  value: "John"
});
```

### 定义多个属性

Object.defineProperties

```javascript
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});
```

### 一次性获取全部属性

`Object.getOwnPropertyDescriptors(obj)`

#### 应用于完整克隆对象

```javascript
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
```

##### 与循环赋值属性的差别 

循环赋值属性

​	不会复制标志

​	忽略symbolic属性

### 其余限制方法

- [Object.preventExtensions(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)

  禁止向对象添加属性。

- [Object.seal(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

  禁止添加/删除属性，为所有现有的属性设置 `configurable: false`。

- [Object.freeze(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

  禁止添加/删除/更改属性，为所有现有属性设置 `configurable: false, writable: false`。

还有对他们的测试：

- [Object.isExtensible(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)

  如果添加属性被禁止，则返回 `false`，否则返回 `true`。

- [Object.isSealed(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)

  如果禁止添加/删除属性，则返回 `true`，并且所有现有属性都具有 `configurable: false`。

- [Object.isFrozen(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)

  如果禁止添加/删除/更改属性，并且所有当前属性都是 `configurable: false, writable: false`，则返回 `true`。

## 属性的getter和setter

访问器属性由 “getter” 和 “setter” 方法表示。

在对象字面量中，它们用 `get` 和 `set` 表示：

```javascript
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};
```

**属性可以是“数据属性”或“访问器属性”，但不能同时属于两者。**

**有时候只有一个 setter 或者只有一个 getter 是正常的。但在这种情况下，该属性将不可读或可写。**

### 访问器描述符

对于访问器属性，没有 `value` 和 `writable`，但是有 `get` 和 `set` 函数。

所以访问器描述符可能有：

- **`get`** —— 一个没有参数的函数，在读取属性时工作，
- **`set`** —— 带有一个参数的函数，当属性被设置时调用，
- **`enumerable`** —— 与数据属性相同，
- **`configurable`** —— 与数据属性相同。

```javascript
Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});
```

### getter和setter提高了兼容性 更聪明

```javascript
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age 是由当前日期和生日计算出来的
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday 是可访问的
alert( john.age );      // ...age 也是可访问的
```

# 原型 继承

## 原型继承

### 注意点

- 在现代引擎的性能方面，无法是从对象中还是从它的原型中获取一个属性，都是没有区别的。它们会记住在哪里找到该属性的，然后下一次请求到来时，重用它。一旦有内容更改，它们也会自动更新内容缓存，因此这样的优化是安全的。

- 只能有一个 `[[Prototype]]`。对象不能继承自其他两个对象

- **无论在哪里找到方法：在对象或者原型中。调用方法时，`this` 始终是点之前的对象。**

  



### 特殊的隐藏属性 [[Prototype]]

取值为 `null` 或者是另一个对象的引用

属性 `[[Prototype]]` 是内部的而且隐藏的

#### 使用`__prototype__`对其进行设置

#### 使用注意

1. 引用不能形成闭环。如果我们试图在一个闭环中分配 `__proto__`，JavaScript 会抛出异常。
2. `__proto__` 的值可以是对象，也可以是 `null`。所有其他的值（例如原语）都会被忽略。
3. 只能有一个 `[[Prototype]]`。对象不能继承自其他两个对象

### 读写规则 

原型仅用于读取属性。

对于数据属性（不是 getters/setters）写/删除操作直接在对象上进行操作。

### this的值

**无论在哪里找到方法：在对象或者原型中。调用方法时，`this` 始终是点之前的对象。**

## 函数原型

- 默认情况下，所有函数都有 `F.prototype = {constructor：F}`
- 所以我们可以通过访问它的 `"constructor"` 属性来获得对象的构造函数。
- `F.prototype` 的值应该是一个对象或 null：其他值将不起作用。
- `F.prototype` 唯一的作用是：当 `new F()` 被调用时，它设置新对象的 `[[Prototype]]`。

### `F.prototype`**仅用于**`new F`**时**

`F.prototype` 属性仅在 `new F` 调用时使用，它为新对象的 `[[Prototype]]` 赋值。

如果在创建之后 `F.prototype` 属性有了变化(`F.prototype = `)，那么 `new F` 创建的新对象也将随之拥有新的 `[[Prototype]]`。但已经存在的对象将保持旧有的值。

## 原生的原型

### Object.prototype

所有对象在新建时 （即当 `new Object()` 被调用来创建一个对象）这个对象的 `[[Prototype]]` 属性被设`Object.prototype`

`Object.prototype`这个庞大的对象有 `toString` 方法和其他的一些方法

`Object.prototype` 上没有额外的 `[[Prototype]]` 属性

### 其他原型对象

 `Array`、`Date`、`Function` 和其他的内置对象都在原型对象上挂载方法。

按照规范，所有的内置原型顶端都是 `Object.prototype`

但是 `Array`、`Date`、`Function`拥有自己的toString方法 按照方法查找（理解为变量查找法） 会优先使用自身的toString

#### 原型链举例

arr的原型----Array.prototype的原型---Object.prototype的原型---null

```javascript
let arr = [1, 2, 3];

// it inherits from Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true
// then from Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
alert( arr.__proto__.__proto__.__proto__ ); // null
```

### 基本数据类型

基本数据类型拥有自己的原型 `String.prototype`、`Number.prototype` 和 `Boolean.prototype`

值null和undefined没有原型

### 原生原型可更改 不建议 除非为了兼容

例子

```javascript
String.prototype.show = function() {
  alert(this);
};

"BOOM!".show(); // BOOM!
```

### 原型方法可借用

空数组 以arguments代替  以this形式注入

```javascript
function showArgs() {
  // 从数组借用 join 方法并在 arguments 的上下文中调用
  alert( [].join.call(arguments, " - ") );
}

showArgs("John", "Pete", "Alice"); // John - Pete - Alice
```

因为 `join` 方法在 `Array.prototype` 对象上，我们可以直接调用它并且重写上面的代码：

```javascript
function showArgs() {
  alert( Array.prototype.join.call(arguments, " - ") );
}
```

这样是更有效率的，因为它避免了一个额外数组对象 `[]` 的创建。

## 原型方法

- [Object.create(proto[, descriptors\])](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/create) —— 利用给定的 `proto` 作为 `[[Prototype]]` 来创建一个空对象。
- [Object.getPrototypeOf(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object.getPrototypeOf) —— 返回 `obj` 的 `[[Prototype]]`（和 `__proto__` getter 相同）。
- [Object.setPrototypeOf(obj, proto)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object.setPrototypeOf) —— 将 `obj` 的 `[[Prototype]]` 设置为 `proto`（和 `__proto__` setter 相同）。
- [Object.keys(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) / [Object.values(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/values) / [Object.entries(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) —— 返回包含自身属性的名称/值/键值对的数组。
- [Object.getOwnPropertySymbols(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) —— 返回包含所有自身 symbol 属性名称的数组。
- [Object.getOwnPropertyNames(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) —— 返回包含所有自身字符串属性名称的数组。
- [Reflect.ownKeys(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys) —— 返回包含所有自身属性名称的数组。
- [obj.hasOwnProperty(key)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)：如果 `obj` 拥有名为 `key` 的自身属性（非继承得来），返回 `true`。

### 极简对象

没有原型 也没有继承getter/setter 方法的对象

- 由于 `__proto__`的值只能是null或者对象  所以想在正常创建的对象中新建一个字符串属性`__proto__`是不可行的
- `__proto__` 根本不是一个对象的属性，只是 `Object.prototype` 的访问属性
- `__proto__` 是访问 `[[Prototype]]` 的方式，而不是 `[[prototype]]` 本身
- `Object.create(null)` 创建了一个空对象，这个对象没有原型（`[[Prototype]]` 是 `null`） 它没有继承 `__proto__` 的 getter/setter 方法。 也没有toString等方法  但是他能实现新建一个字符串属性`__proto__`
- 和对象关系最密切的方法是 `Object.something(...)`，比如 `Object.keys(obj)` —— 它们不在 prototype 中，因此在极简对象中它们还是可以继续使用

# 类

## 类的基本用法

### 语法

```javascript
class MyClass {
  // class 方法
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

然后通过 `new MyClass()` 来创建具有上述列出的所有方法的新对象。

**类方法之间没有逗号**

### 什么是类

在 JavaScript 中，类是一种函数。

```javascript
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// 佐证：User 是一个函数
alert(typeof User); // function
```

`class User {...}` 构造器内部为我们做了什么：

1. 创建一个以User为名称的函数，这是类声明的结果。
   - 函数代码来自于 `constructor` 中的方法（如果我们不写这样的方法，那么就假设它为空的）。
2. 储存所有方法，例如 `User.prototype` 中的 `sayHi`。

### 使用class 创建的特性 

- 首先，通过 `class` 创建的函数是由特殊内部属性标记的 `[[FunctionKind]]:"classConstructor"`。所以，相较于手动创建它还是有点不同的。
- 不像普通函数，调用类构造器时必须要用 `new` 关键词：
- 类方法不可枚举。
- 类默认使用 `use strict`

### 类表达式

```javascript
let User = class {
  sayHi() {
    alert("Hello");
  }
};
```

类表达式有名称，它仅在类内部可见

```javascript
// “命名类表达式”
// （规范中没有这样的术语，但是它和命名函数表达式类似）
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass 仅在其内部可见
  }
};

new User().sayHi(); // 正常运行，显示 MyClass 中定义的内容

alert(MyClass); // 错误，MyClass 在外部不可见
```

#### 动态创建类

```javascript
function makeClass(phrase) {
  // 声明并返回类
  return class {
    sayHi() {
      alert(phrase);
    };
  };
}

// 创建新类
let User = makeClass("Hello");

new User().sayHi(); // Hello
```

### Getters/setter的应用

#### 直接在类中使用get/set 实现User.name

```javascript
class User {
  constructor(name) {
    // 调用 setter
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let user = new User("John");
alert(user.name); // John
user = new User(""); // Name too short.
```

#### 在User的原型中 创建name的getter和setter

```javascript
Object.defineProperties(User.prototype, {
  name: {
    get() {
      return this._name
    },
    set(name) {
      // ...
    }
  }
});
```

### class的属性

属性不在 `User.prototype` 内。相反它是通过 `new` 分别为每个对象创建的。

**所以，该属性永远不会在同一个类的不同对象之间共享。**

## 类继承

要继承自另一个类，我们需要在 `{..}` 前指定 `“extends”` 和父类

在其内部，`extends` 关键字添加了 `[[Prototype]]` 引用：从 `Rabbit.prototype` 到 `Animal.prototype`：

**定义继承后**

```javascript
Child.prototype.__proto__ === Parent.prototype 
```

#### extends允许跟任意表达式 只要其中可以返回类

```javascript
function f(phrase) {
  return class {
    sayHi() { alert(phrase) }
  }
}
class User extends f("Hello") {}
new User().sayHi(); // Hello
```

### 重写方法

类提供了 `"super"` 关键字。

- 执行 `super.method(...)` 调用父类方法。
- 执行 `super(...)` 调用父类构造函数（只能在子类的构造函数中运行）。

例子：

```javascript
  stop() {
    super.stop(); // 调用父类的 stop 函数
    this.hide(); // 然后隐藏
  }
```

#### 箭头函数没有super

如果被访问，它会从外部函数获取。例如：

```javascript
class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // 1 秒后调用父类 stop 方法
  }
}
```

### 重写构造函数

在 JavaScript 中，“继承类的构造函数”与所有其他的构造函数之间存在区别。在继承类中，相应的构造函数会被标记为特殊的内部属性 `[[ConstructorKind]]:"derived"`。

不同点就在于：

- 当一个普通构造函数执行时，它会创建一个空对象作为 `this` 并继续执行。
- 但是当继承的构造函数执行时，它并不会做这件事。它期望父类的构造函数来完成这项工作。

**我们需要在使用 `this` 之前调用 `super()`**

### Super 内部[[HomeObject]]

当一个函数被定义为类或者对象方法时，它的 `[[HomeObject]]` 属性就成为那个对象。

然后 `super` 使用它来解析父类原型和它自己的方法。

基于 `[[HomeObject]]` 运行机制。像 `longEar.eat` 这样的方法，知道 `[[HomeObject]]`，并且从它的原型中获取父类方法。并没有使用 `this`。

将一个带有 `super` 的方法从一个对象复制到另一个对象是不安全的

```javascript
let animal = {
  name: "Animal",
  eat() {         // animal.eat.[[HomeObject]] == animal
    alert(`${this.name} eats.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "Rabbit",
  eat() {         // rabbit.eat.[[HomeObject]] == rabbit
    super.eat();
  }
};

let longEar = {
  __proto__: rabbit,
  name: "Long Ear",
  eat() {         // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  }
};

// 正常运行
longEar.eat();  // Long Ear eats.
```

在 JavaScript 语言中 `[[HomeObject]]` 仅被用于 `super`。

`[[HomeObject]]` 是为类和普通对象中的方法定义的。但是对于对象来说，方法必须确切指定为 `method()`，而不是 `"method: function()"`。

```javascript
let animal = {
  eat: function() { // 可以使用简短写法：eat() {...}
    // ...
  }
};
let rabbit = {
  __proto__: animal,
  eat: function() {
    super.eat();
  }
};
rabbit.eat();  // 错误调用 super（因为这里并没有 [[HomeObject]]）
```

### 继承与Object与不继承Object的区别

| class Rabbit                              | class Rabbit extends Object                                  |
| :---------------------------------------- | :----------------------------------------------------------- |
| –                                         | needs to call `super()` in constructor（构造函数中需要调用super（）） |
| `Rabbit.__proto__ === Function.prototype` | `Rabbit.__proto__ === Object`                                |

继承于Object后可以调用Object的静态方法 自身等同于Object  因为静态方法存于prototyoe中

```javascript
// 通常我们调用 Object.getOwnPropertyNames
alert ( Rabbit.getOwnPropertyNames({a: 1, b: 2})); // a,b
```

## 静态属性和方法

把一个方法赋值给一个类方法，而不是赋给它的 `"原型对象"`。这样的方法我们称为**静态的**

静态方法用来实现一个属于类，但不属于类的某个对象的特定方法

### 静态方法语法

```javascript
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true
```

等同于

```javascript
class User() { }

User.staticMethod = function() {
  alert(this === User);
};
```

故静态方法和属性储存于 类自身 而非 类.prototype

### 静态属性

静态的属性也是有可能的，它们看起来像常规的类属性，但前面加有 `static`

```javascript
class Article {
  static publisher = "Ilya Kantor";
}

alert( Article.publisher ); // Ilya Kantor
```

这等同于直接给 `Article` 赋值：

```javascript
Article.publisher = "Ilya Kantor";
```

### 静态方法的继承

子类 extends Animal` 创建了两个 `[[Prototype]]` 的引用：

1. 子类 方法原型继承自 父类 方法。
2. `子类.prototype` 原型继承自 `父类.prototype`。

因此，如果一个字段在 `B` 中没有找到，会继续在 `A` 中查找。

结果就是，继承对于常规的和静态的方法都有效。

```javascript
class Animal {}
class Rabbit extends Animal {}

// 对于静态属性和静态方法
alert(Rabbit.__proto__ === Animal); // true

// 对于普通方法
alert(Rabbit.prototype.__proto__ === Animal.prototype);
```

## 私有的和受保护的方法和属性

### 受保护的属性

**受保护的属性通常以下划线 `_` 作为前缀。**

**受保护的字段是继承的**

然后通过内部的get和set 以及受保护的属性二次转存 实现

#### 例子

```javascript
class CoffeeMachine {
  _waterAmount = 0;
  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }
  get waterAmount() {
    return this._waterAmount;
  }
  constructor(power) {
    this._power = power;
  }
}
// 创建咖啡机
let coffeeMachine = new CoffeeMachine(100);
// 加入水
coffeeMachine.waterAmount = -10; // Error: Negative water
```

### 只读的  

用get 和set实现 我们只需要设置 getter，而不是 setter：

```javascript
class CoffeeMachine {
  // ...
  constructor(power) {
    this._power = power;
  }
  get power() {
    return this._power;
  }
}
// 创建咖啡机
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // 功率是：100W

coffeeMachine.power = 25; // Error (no setter)
```

### 推荐语法  `get.../set...` 函数

```javascript
class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}
```

### 私有的

- 私有属性和方法应该以 `#` 开头。他们只能从类的内部访问。
- `#` 是该字段为私有的特殊标志。我们无法从外部或从继承的类中访问它
- 私有字段不与公共字段发生冲突。我们可以同时拥有私有属性 `#waterAmount` 和公共属性 `waterAmount`。
- **私有字段不能通过 this[name] 访问**



```javascript
class CoffeeMachine {
  #waterAmount = 0;
  get waterAmount() {
    return this.#waterAmount;
  }
  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this.#waterAmount = value;
  }
}
let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount); // Error
```

## 继承内置类

- 内置的类比如 `Array`，`Map` 等也都是可以继承的。
- 继承后的类可以使用 内置类的内置方法 如 继承array后 可以使用map  reduce 等
- 使用内置方法是通过`constructor`实现的

```javascript
内置父类.constructor === 子类
new 子类 =创建新的新子类 而非原生父类
```

### 使用Symbol.species 返回原生父类

```javascript
  // 内置方法会使用这个作为构造函数 (constructor)
  static get [Symbol.species]() {
    return Array;
  }
```

### 内置类没有静态方法继承

- 它们相互间不继承静态属性和方法

- 比如，`Array` 和 `Data` 都是继承自 `Object` ，`Array.[[Prototype]]` 不指向 `Object`，所以它们没有例如 `Array.keys()`(或者 `Data.keys()`)的静态方法

- `date.prototype.__proto__ === Object.prototype` 

- 但是 `date.__proto__≠Object`

  

## 类型检测

|               | 用于                                                         | 返回       |
| :------------ | :----------------------------------------------------------- | :--------- |
| `typeof`      | 基本数据类型                                                 | string     |
| `{}.toString` | 基本数据类型、内置对象以及包含 `Symbol.toStringTag` 属性的对象 | string     |
| `instanceof`  | 任意对象                                                     | true/false |

### instanceof

```javascript
obj instanceof Class
```

如果 `obj` 隶属于 `Class` 类（或者是 `Class` 类的衍生类），表达式将返回 `true`。

检测过程只和原型链以及 `Class.prototype` 有关

#### 实际内部的运行

##### 没有 `Symbol.hasInstance` 方法的，这时会检查 `Class.prototype` 是否与 `obj` 的原型链中的任何一个原型相等。

```javascript
obj.__proto__ === Class.prototype
obj.__proto__.__proto__ === Class.prototype
obj.__proto__.__proto__.__proto__ === Class.prototype
...
```

##### 有 `Symbol.hasInstance` 方法的  根据方法内部的条件进行判断

```javascript
// 假设具有 canEat 属性的对象为动物类
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };
alert(obj instanceof Animal); // 返回 true：调用 Animal[Symbol.hasInstance](obj)
```

#### 方法  [objA.isPrototypeOf(objB)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/object/isPrototypeOf)

如果 `objA` 处在 `objB` 的原型链中，调用结果为 `true`。所以，`obj instanceof Class` 也可以被视作为是调用 `Class.prototype.isPrototypeOf(obj)`。

### 通过 Object的toStirng 实现类型检测

```javascript
// 保存 toString 方法的引用，方便后面使用
let objectToString = Object.prototype.toString;

// 猜猜是什么类型？
let arr = [];

alert( objectToString.call(arr) ); // [object Array]
```

### 通过   `Symbol.toStringTag`实现检测

```javascript
// 环境相关对象和类的 toStringTag：
alert( window[Symbol.toStringTag]); // window
alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

alert( {}.toString.call(window) ); // [object Window]
alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]
```

## JavaScript中的Mixin （多继承）

在 JavaScript 中，我们只能继承单个对象。每个对象只能有一个 `[[Prototype]]` 原型。并且每个类只可以扩展另外一个类。

[mixin](https://en.wikipedia.org/wiki/Mixin) 是一个包含许多供其它类使用的方法的类，而且这个类不必是其它类的父类。

构造一个拥有许多实用方法的对象，通过这个对象我们可以轻易地将这些实用方法合并到任何类的原型中。

### 通过拷贝实现 多继承 

构造一个拥有许多实用方法的对象，通过这个对象我们可以轻易地将这些实用方法合并到任何类的原型中。



```javascript
// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

// 用法：
class User {
  constructor(name) {
    this.name = name;
  }
}

// 拷贝方法
Object.assign(User.prototype, sayHiMixin);

// 现在 User 可以说　hi 了
new User("Dude").sayHi(); // Hello Dude!
```

### 实际运用 EventMixin

```javascript
let eventMixin = {
  /**
   * 订阅事件，用法：
   *  menu.on('select', function(item) { ... }
  */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * 取消订阅，用法：
   *  menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * 触发事件并传递参数
   *  this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return; // 对应事件名没有事件处理函数。
    }

    // 调用事件处理函数
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};
// 新建一个 class
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
// 添加 mixin
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// 被选中时调用事件处理函数：
menu.on("select", value => alert(`Value selected: ${value}`));

// 触发事件 => 展示被选中的值：123
menu.choose("123"); // 被选中的值
```

# 错误处理

## 异常处理 try...catch

### 语法

```javascript
try {
   ... 尝试执行的代码 ...
} catch(e) {
   ... 异常处理 ...
   遇到错误的返回赋值给 e
} finally {
   ... 最终会执行的代码 ...
}
```

#### 无法处理语法错误  必须是可执行的

要使得 `try..catch` 能工作，代码必须是可执行的，换句话说，它必须是有效的 JavaScript 代码。

如果代码包含语法错误，那么 `try..catch` 不能正常工作，例如含有未闭合的花括号：

```javascript
try {
  {{{{{{{{{{{{
} catch(e) {
  alert("The engine can't understand this code, it's invalid");
}
```

JavaScript 引擎读取然后执行代码。发生在读取代码阶段的异常被称为 “parse-time” 异常，它们不会被 `try..catch`覆盖到（包括那之间的代码）。这是因为引擎读不懂这段代码。

### 错误处理必须是直达的函数 如果使用setTimeout无法捕捉

因为 `try..catch` 包裹了计划要执行的 `setTimeout` 函数。但是函数本身要稍后才能执行，这时引擎已经离开了 `try..catch` 结构。

```javascript
try {
  setTimeout(function() {
    noSuchVariable; // 代码在这里停止执行
  }, 1000);
} catch (e) {
  alert( "won't work" );
}
```

### Error对象

当一个异常发生之后，JavaScript 生成一个包含异常细节的对象。这个对象会作为一个参数传递给 `catch`：

其中包含的两个属性

- `name`

  异常名称，对于一个未定义的变量，名称是 `"ReferenceError"`

- `message`

  异常详情的文字描述。

还有很多非标准的属性在绝大多数环境中可用。其中使用最广泛并且被广泛支持的是：

- `stack`

  当前的调用栈：用于调试的,一个包含引发异常的嵌套调用序列的字符串。

```javascript
try {
  lalala; // 异常，变量未定义！
} catch(err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala 未定义
  alert(err.stack); // ReferenceError: lalala 在... 中未定义

  // 可以完整的显示一个异常
  // 可以转化成 "name: message" 形式的字符串
  alert(err); // ReferenceError: lalala 未定义
}
```

### 抛出自定义的异常

#### Throw 运算符

语法如下：

```javascript
throw <error object>
```

#### 内置 异常构造器

JavaScript 有很多标准异常的内置的构造器：`Error`、 `SyntaxError`、`ReferenceError`、`TypeError` 和其他的。我们也可以用他们来创建异常对象。

他们的语法是：

```javascript
let error = new Error(message);
// 或者
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
```

对于内置的异常对象（不是对于其他的对象，而是对于异常对象），`name` 属性刚好是构造器的名字。`message` 则来自于参数。

```javascript
let error = new Error("Things happen o_O");

alert(error.name); // Error
alert(error.message); // Things happen o_O
```

### 异常的再次抛出

**`catch` 应该只捕获已知的异常，而重新抛出其他的异常。**

“rethrowing” 技术可以被更详细的理解为：

1. 捕获全部异常。
2. 在 `catch(err) {...}` 代码块，我们分析异常对象 `err`。
3. 如果我们不知道如何处理它，那我们就做 `throw err` 操作。

```javascript
try{
    ....
}
catch(e) {

  if (e.name == "SyntaxError") {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // rethrow (*)
  }

}
```

### finally

#### finally支持 任何结束

`finally` 语法支持**任何**的结束 `try..catch` 执行的方式，包括明确的 `return`或者新的抛出错误 。

执行顺序 先 执行finally再返回return的结果(或抛出错误)

```javascript
function func() {
  try {
    return 1;

  } catch (e) {
    /* ... */
  } finally {
    alert( 'finally' );
  }
}

alert( func() ); // 先 alert "finally" 里面的内容，再执行这里
```

#### try...finally 不想在这里处理异常时

我们希望确保代码执行完成不想在这里处理异常时，我们会使用这种结构。

```javascript
function func() {
  // 开始做需要被完成的操作（比如测量）
  try {
    // ...
  } finally {
    // 完成前面要做的事情，即使 try 里面执行失败
  }
}
```

### 全局catch

Node.JS 有 [process.on(‘uncaughtException’)](https://nodejs.org/api/process.html#process_event_uncaughtexception) 。对于浏览器环境，我们可以绑定一个函数到 [window.onerror](https://developer.mozilla.org/zh/docs/Web/API/GlobalEventHandlers/onerror)，当遇到未知异常的时候，它就会执行。

语法如下：

```javascript
window.onerror = function(message, url, line, col, error) {
  // ...
};
```

- `message`

  异常信息。

- `url`

  发生异常的代码的 URL。

- `line`, `col`

  错误发生的代码的行号和列号。

- `error`

  异常对象。

`window.onerror` 的目的不是去处理整个代码的执行中的所有异常 —— 这几乎是不可能的，这只是为了给开发者提供异常信息。

也有针对这种情况提供异常日志的 web 服务，比如 [https://errorception.com](https://errorception.com/) 或者 [http://www.muscula.com](http://www.muscula.com/)。

它们会这样运行：

1. 我们注册这个服务，拿到一段 JS 代码（或者代码的 URL），然后插入到页面中。
2. 这段 JS 代码会有一个客户端的 `window.onerror` 函数。
3. 发生异常时，它会发送一个异常相关的网络请求到服务提供方。
4. 我们只要登录服务方提供方的网络接口就可以看到这些异常。

## 自定义错误及拓展错误

### 内置错误类的代码

```javascript
// 由JavaScript本身定义的内置错误类“伪代码”
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error"; //（不同内置错误类别的名称）
    this.stack = <nested calls>; // 非标准，但大多数环境支持它
  }
}
```

### 扩展错误

`try..catch` 代码块同时处理我们的 `ValidationError` 和来自 `JSON.parse` 的内置 `SyntaxError`。

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("No field: age");
  }
  if (!user.name) {
    throw new ValidationError("No field: name");
  }

  return user;
}

// try..catch 实例

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message); // 无效的数据：缺失字段：name
  } else if (err instanceof SyntaxError) { // (*)
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err; // 未知错误，再次抛出（**）
  }
}
```

### 更进一步的继承

```javascript
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError extends MyError { }

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.property = property;
  }
}

// name is correct
alert( new PropertyRequiredError("field").name ); // PropertyRequiredError
```

### 包装异常 将低级别错误进行包装

调用函数 `readUser` 的代码要能够处理这些异常。现在它在 `catch` 语句块中使用多个 `if` 语句来检测不同类型的异常以及抛出未知异常。但如果函数 `readUser` 抛出了多种异常 —— 我们扪心自问：我们真的需要一个接一个地处理它抛出的异常吗？

通常答案是 “No”：外部代码想要比其他代码更高一级。它想要一些类似于“数据读取异常“的东西。它为什么发生 —— （其错误描述信息）通常是不相关的。或者，如果能有一种获取异常细节的办法就更好了，但这仅限于我们需要的时候。

所以，我们创建一个 `ReadError` 类来表现上述的异常。如果在函数 `readUser` 中发生了异常，我们会将其捕获，并生成 `ReadError`。我们同时也会在其 `cause` 属性中保留对原始异常的引用。那么外部的代码就只需要检测 `ReadError`。

```javascript
lass ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

class ValidationError extends Error { /*...*/ }
class PropertyRequiredError extends ValidationError { /* ... */ }

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Syntax Error", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Validation Error", err);
    } else {
      throw err;
    }
  }

}

try {
  readUser('{bad json}');
} catch (e) {
  if (e instanceof ReadError) {
    alert(e);
    // 原错误：语法错误：在位置 1 处不应有 b
    alert("Original error: " + e.cause);
  } else {
    throw e;
  }
}
```

# promises

## 回调

函数是**异步**调用的，因为动作不是此刻（加载脚本）完成的，而是之后。

异步执行某些动作的函数，应该提供一个在函数完成时可以运行的 `callback` 参数。

这被称为“基于回调”的异步编程风格。

```javascript
unction loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the ${script.src} is loaded`);
  alert( _ ); // 在加载的脚本中声明的函数
});
```

### 处理错误

惯例是：

1. `callback` 的第一个参数是为了错误发生而保留的。一旦发生错误，`callback(err)` 就会被调用。
2. 第二个参数（如果有需要）用于成功的结果。此时 `callback(null, result1, result2…)` 将被调用。

```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
```

### 回调地狱

如果嵌套变多，代码层次就会变深，维护难度也随之增加，尤其是如果我们有一个不是 `...` 的真实代码，就会包含更多的循环，条件语句等。

这有时称为“回调地狱”或者“回调金字塔”。

## promises

| Promises                                                     | Callbacks                                                    |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| Promises 允许我们按照自然顺序进行编码。首先，我们运行 `loadScript` 和 `.then` 来处理结果。 | 在调用 `loadScript` 时，我们必须已经有了一个 `callback` 函数。换句话说，在调用 `loadScript` **之前**我们必须知道如何处理结果。 |
| 只要我们有需要，我们能在 promise 上调用 `.then` 无数次。每次调用仅需向“订阅者列表”增加一个新“粉丝”—— 一个新订阅函数。 | 只能有一个回调。                                             |



在编程中，我们经常用现实世界中的事物进行类比：

1. “生产者代码” 会做一些事情，也需要事件。比如，它加载一个远程脚本。此时它就像“歌手”。
2. “消费者代码” 想要在它准备好时知道结果。许多函数都需要结果。此时它们就像是“粉丝”。
3. **promise** 是将两者连接的一个特殊的 JavaScript 对象。就像是“列表”。生产者代码创建它，然后将它交给每个订阅的对象，因此它们都可以订阅到结果。

传递给 `new Promise`的函数称之为 **executor**。当 promise 被创建时，它会被自动调用。它包含生产者代码，这最终会产生一个结果。与上文类比，executor 就是“歌手”。

### promise基本剖析

`promise` 对象有内部属性：

- `state` —— 最初是 “pending”，然后被改为 “fulfilled” 或 “rejected”，
- `result` —— 一个任意值，最初是 `undefined`。

#### 运行逻辑

自动并立即调用 executor（通过 `new Promise`）。

当 executor 完成任务时，应调用下列之一：

- resolve(value)

  —— 说明任务已经完成：

  - 将 `state` 设置为 `"fulfilled"`，
  - sets `result` to `value`。

- reject(error)

  —— 表明有错误发生：

  - 将 `state` 设置为 `"rejected"`，
  - 将 `result` 设置为 `error`。

executor 应该完成任务（通常会需要时间），然后调用 `resolve` 或 `reject` 来改变 promise 对象的对应状态。

Promise 结果应该是 resolved 或 rejected 的状态被称为 “settled”，而不是 “pending” 状态的 promise。

#### 只能有一个结果

executor 所做的任务可能只有一个结果或者一个错误。

#### 可以传入任何类型的参数作为 reject的参数 但是建议传入错误

#### 可以直接调用 resolve 和reject 

```javascript
let promise = new Promise(function(resolve, reject) {
  resolve(123); // immediately give the result: 123
});
```

#### promise 只负责处理状态和返回result 需要通过.then或者catch捕获结果

### .then/catch

`.then` 的语法：

仅根据执行结果来执行一个函数

```javascript
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
```

```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve 在 .then 中运行第一个函数
promise.then(
  result => alert(result), // 在 1 秒后显示“已经完成！”
  error => alert(error) // 不会运行
);
```

#### 只接收成功

```javascript
let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(alert); // 在 1 秒后显示 "done!"
```

#### 只接收错误

`.catch(f)`==== `.then(null, f)` 

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) 等同于 promise.then(null, f)
promise.catch(alert); // 在 1 秒后显示 "Error: Whoops!"
```

#### 只要promise的状态非pending  及可立即处理

```javascript
// 一个立即变成 resolve 的 promise
let promise = new Promise(resolve => resolve("done!"));

promise.then(alert); // 完成！（现在显示）
```

#### 处理器总是异步

当 `.then/catch` 处理器应该执行时，它会首先进入内部队列。JavaScript 引擎从队列中提取处理器，并在当前代码完成时执行 `setTimeout(..., 0)`。

换句话说，`.then(handler)` 会被触发，会执行类似于 `setTimeout(handler, 0)` 的动作。

在下述示例中，promise 被立即 resolved，因此 `.then(alert)` 被立即触发：`alert` 会进入队列，在代码完成之后立即执行。

```javascript
// an immediately resolved promise
let promise = new Promise(resolve => resolve("done!"));

promise.then(alert); // 完成！（在当前代码完成之后）

alert("code finished"); // 这个 alert 会最先显示
```

## promises 链

理念是把 result 传入 `.then` 的处理程序链。

 `promise.then` 返回了一个 promise 故而可以传递运行

运行流程如下：

1. 初始 promise 1 秒后 resolve `(*)`，
2. 然后 `.then` 方法被调用 `(**)`。
3. 它返回的值被传入下一个 `.then` 的处理程序 `(***)`
4. ……依此类推。

### 特殊等待 返回promises

正常来说，`.then` 处理程序返回的值会立即传入下一个处理程序。但是有一个例外。

如果返回的值是一个 promise（pending状态），那么直到它结束之前，下一步执行会一直被暂停。在结束之后，该 promise 的结果会传递给下一个 `.then` 处理程序。

例如：

```javascript
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  alert(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  alert(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  alert(result); // 4

});
```

## promise错误处理

### 内部机制：隐式try...catch

Promise 执行（executor）和 promise 处理（handler）程序周围有一个“不可见 `try..catch`”。如果发生异常，它会被捕获并视为 rejection。



```javascript
new Promise((resolve, reject) => {
    // try...catch
  throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!
```

……与下面代码完全相同：

```javascript
new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!
```

#### 故而 不管是在then中抛出 都意味着该promise rejected 所以就会将后续处理权转移到catch中 跳过非错误处理函数

在then中抛出 

```javascript
new Promise((resolve, reject) => {
  resolve("ok");
}).then((result) => {
  throw new Error("Whoops!"); // rejects 这个 promise
}).catch(alert); // Error: Whoops!
```

跳过非错误处理函数

```javascript
    throw error; // 抛出这个或者其他的错误跳转到下一个 catch
  }

}).then(function() {
  /* 此处不会运行 */
}).catch(error => { // (**)

  alert(`The unknown error has occurred: ${error}`);
  // 不会返回任何内容 => 正常方式执行

});
```

### 重新抛出

`.catch` 表现得像 `try..catch`。我们可能有许多的 `.then` 处理程序，然后在最末端使用一个 `.catch` 处理上面的所有错误。

如果我们在 `.catch` 内 `throw`，此时控制移交到下一个最近的错误处理程序。如果我们处理错误并正常完成，那么它将继续到最近的成功的 `.then` 处理程序。

`.catch` 成功处理错误：

```javascript
// 执行：catch -> then
new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) {

  alert("The error is handled, continue normally");

}).then(() => alert("Next successful handler runs"));
```

`.catch` 没有成功处理错误：

```javascript
// 执行：catch -> catch -> then
new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // handle it
  } else {
    alert("Can't handle such error");

    throw error; // 抛出这个或者其他的错误跳转到下一个 catch
  }

}).then(function() {
  /* 此处不会运行 */
}).catch(error => { // (**)

  alert(`The unknown error has occurred: ${error}`);
  // 不会返回任何内容 => 正常方式执行

});
```

### 未被处理的rejections

如果出现错误，`promise` 的状态变为 “`rejected`”，此时执行程序应该跳转到最近的 `rejection` 处理程序。如果后续没有这个错误处理程序。因此错误会“卡住（stuck）”。没有代码来处理它。

JavaScript 引擎跟踪此类 rejections，在这种情况下会生成一个全局错误。

### 浏览器 错误事件捕获

```javascript
window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - 产生错误的 promise
  alert(event.reason); // Error: Whoops! - 未处理的错误对象
});

new Promise(function() {
  throw new Error("Whoops!");
}); // 没有 catch 处理错误
```

## promise API

### promise.resolve

根据给定的 `value` 值返回 resolved promise。

```javascript
let promise = Promise.resolve(value);
```

等同于

```javascript
let promise = new Promise(resolve => resolve(value));
```

### promise.reject  使用较少

创建一个带有 `error` 的 rejected promise。

```javascript
let promise = Promise.reject(error);
```

等同于

```javascript
let promise = new Promise((resolve, reject) => reject(error));
```

### promise.all 使用最多

执行多个 promise，并等待所有 promise 准备就绪。

语法：

```javascript
let promise = Promise.all([...promises...]);
```

它需要一个 promise 的数组作为其参数（严格来说可以是任何可迭代对象，但通常都是数组）并返回一个新的 promise。

当所有给定的 promise 都被处理并以数组的形式呈现其结果时，新的 promise 也就被 resolve。



#### **如果任意一个 promise 为 reject，`Promise.all` 返回的 promise 就会立即 reject 这个错误。**

如果其中一个 promise 被 reject，`Promise.all` 就会立即被 reject 并忽略所有列表中其他的 promise。它们的结果也被忽略。

#### 可以传入非promise的常规值

通常，`Promise.all(...)` 接受可迭代的 promise 集合（大部分情况下是数组）。但是如果这些对象中的任意一个不是 promise，它将会被直接包装进 `Promise.resolve`。

```javascript
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  }),
  2, // 视为 Promise.resolve(2)
  3  // 视为 Promise.resolve(3)
]).then(alert); // 1, 2, 3
```

#### 真实使用案例

```javascript
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // 所有响应都就绪时，我们可以显示 HTTP 状态码
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // 每个 url 都显示 200
    }

    return responses;
  })
  // 映射 response 数组到 response.json() 中以读取它们的内容
  .then(responses => Promise.all(responses.map(r => r.json())))
  // 所有 JSON 结果都被解析：“users” 是它们的数组
  .then(users => users.forEach(user => alert(user.name)));
```

其中一个失败，其他的 `fetch` 操作仍然会继续执行，但是 `Promise.all` 会忽略它们。

### promise.allSettled

`Promise.allSettled` 等待所有的 promise 都被处理：即使其中一个 reject，它仍然会等待其他的 promise。处理完成后的数组有：

- `{status:"fulfilled", value:result}` 对于成功的响应，
- `{status:"rejected", reason:error}` 对于错误的响应。

```javascript
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });
```

#### 兼容性写法

```javascript
if(!Promise.allSettled) {
  Promise.allSettled = function(promises) {
    return Promise.all(promises.map(p => Promise.resolve(p).then(v => ({
      state: 'fulfilled',
      value: v,
    }), r => ({
      state: 'rejected',
      reason: r,
    }))));
  };
}
```

### promise.race

接受一个可迭代的 promise 集合，但是它只等待第一个完成（或者 error）而不会等待所有都完成，然后继续执行。

语法：

```javascript
let promise = Promise.race(iterable);
```

例如，这里的结果会是 `1`：

```javascript
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1
```

## promisification

我们创建了一个包装函数（wrapper-function）来做同样的事情，在内部调用原来的函数，但返回一个 promise。

在实际开发中经常需要这种转换，因为很多函数和库都是基于回调（callback-based）的。但是，使用 promise 更加方便。因此，将它们（函数和库）promisify 是很有意义的。

### 非多参数情况

```javascript
function promisify(f) {
  return function (...args) { // 返回一个包装函数
    return new Promise((resolve, reject) => {
      function callback(err, result) { // 给 f 用的自定义回调
        if (err) {
          return reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // 在参数的最后附上我们自定义的回调函数

      f.call(this, ...args); // 调用原来的函数
    });
  };
};

// 用法：
let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);
```

### 多参数

```javascript
// 设定为 promisify(f, true) 来获取结果数组
function promisify(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) { // 给 f 用的自定义回调
        if (err) {
          return reject(err);
        } else {
          // 如果 manyArgs 被指定值，则 resolve 所有回调结果
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);

      f.call(this, ...args);
    });
  };
};

// 用法：
f = promisify(f, true);
f(...).then(arrayOfResults => ..., err => ...)
```

## 微任务

### 微任务队列

- 队列是先进先出的：首先进入队列的任务会首先运行。
- 只有在引擎中没有其它任务运行时，才会启动任务队列的执行。

### promise中的队列

当一个 promise 准备就绪时，它的 `.then/catch/finally` 处理程序就被放入队列中。但是不会立即被执行。当 JavaScript 引擎执行完当前的代码，它会从队列中获取任务并执行它。

### 如果要按指定顺序输出 使用.then的链式调用

### 未处理的rejection

**“未处理的 rejection”是指在 microtask 队列结束时未处理的 promise 错误。**

```javascript
let promise = Promise.reject(new Error("Promise Failed!"));
setTimeout(() => promise.catch(err => alert('caught')));

// Error: Promise Failed!
window.addEventListener('unhandledrejection', event => alert(event.reason));
```

现在，如果你运行以上的代码，我们先会看到 `Promise Failed!` 的消息，然后才是 `caught`。

## Async/await

### async

在函数前面的「async」这个单词表达了一个简单的事情：即这个函数总是返回一个 promise。

即使这个函数实际上会返回一个非 promise 的值，函数定义前加上了「async」关键字会指示 JavaScript 引擎自动将返回值包装在一个已决议（resolved）的 promise 内。

### await

语法如下：

```javascript
// 只在 async 函数中有效
let value = await promise;
```

关键字 `await` 让 JavaScript 引擎等待直到 promise 完成并返回结果。

划重点：`await` 字面的意思就是让 JavaScript 引擎等待直到 promise 状态完成，然后以完成的结果继续执行。这个行为不会耗费 CPU 资源，因为引擎可以同时处理其他任务：执行其他脚本，处理事件等。

#### await必须被async包裹无法在顶层代码中使用

我们可以将其包裹在一个匿名 async 函数中，如：

```javascript
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
})();
```

#### 可以接受**「thenables」**

像 `promise.then` 那样，`await` 被允许接收 thenable 对象（具有 `then` 方法的对象）。第三方对象虽然不是 promise，但是却兼容 promise，如果这些对象支持 `.then`，那么就可以对它们使用 `await`。

下面是一个 `Thenable` 类，`await` 接收了该类的实例：

```javascript
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // 1 秒后决议为 this.num*2
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
};

async function f() {
  // 等待 1 秒, result 变为 2
  let result = await new Thenable(1);
  alert(result);
}

f();
```

如果 `await` 接收了一个非 promise 的但是提供了 `.then` 方法的对象，它就会调用这个 then 方法，并将原生函数 `resolve`，`reject` 作为参数传入。然后 `await` 等到这两个方法中的某个被调用（在例子中发生在（*）的那一行），再处理得到的结果。

#### 在类中定义Async 方法 

```javascript
class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter()
  .wait()
  .then(alert); // 1
```

### Error handling

#### 抛出错误

```javascript
async function f() {
  await Promise.reject(new Error("Whoops!"));
}
```

等同于

```javascript
async function f() {
  throw new Error("Whoops!");
}
```

#### 错误捕获 使用try...catch

```javascript
async function f() {

  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // 捕获到 fetch 和 response.json 中的错误
    alert(err);
  }
}

f();
```

##### 函数后使用.catch

```javascript
async function f() {
  let response = await fetch('http://no-such-url');
}

// f() 变为一个被拒绝的 promise
f().catch(alert); // TypeError: failed to fetch // (*)
```

### 和promise.all一起使用

```javascript
// 等待多个 promise 结果
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);
```

如果发生错误，也会正常传递：先从失败的 promise 传到 `Promise.all`，然后变成我们能用 `try..catch` 处理的异常。

### 微任务队列

`Async/await` 是基于 promise 的，所以它内部使用相同的微任务队列，并且相对宏任务来说具有更高的优先级。

例如，看代码：

- `setTimeout(handler, 0)`，应该以零延迟运行 `handler` 函数。
- `let x = await f()`，函数 `f()` 是异步的，但是会立即运行。

`await` 总是先完成，因为（作为微任务）它相比 `setTimeout` 具有更高的优先级。

```javascript
async function f() {
  return 1;
}

(async () => {
    setTimeout(() => alert('timeout'), 0); //4.弹出timeout

    let reuslt= await f(); //1.完成计算
	alert(result); // 2.弹出1
    alert('await');//3.弹出await
})();
```

# Generators 高级iteration

