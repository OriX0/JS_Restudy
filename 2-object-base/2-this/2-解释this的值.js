let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

/*
在上面的代码中，我们试图连续调用 obj.go() 方法 4 次。
但是前两次和后两次调用的结果不同，为什么呢？
*/

/*
  3中的赋值操作 引用类型作为一个整体被抛弃只获取了obj.go这样一个函数 无this 故this在严格模式下指向了undefined
  4中用了||操作符  会先将obj.go转换为布尔值 导致this的丢失
*/