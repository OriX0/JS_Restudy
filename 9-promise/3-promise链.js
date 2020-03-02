//  是否相等 说出不同
promise.then(f1).catch(f2);
// 对比：
promise.then(f1, f2);

// 不相等
/* 第一个是链式调用 他将错误传递到第二个catch 并进行了处理
第二个表达式 非链式 无传递 错误并未处理 */