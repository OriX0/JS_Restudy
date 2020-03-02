new Promise(function (resolve, reject) {
  // 在这里执行try.
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
  // ..catch 隐式执行
}).catch(alert);
// 不会触发 以隐式try...catch来理解  延迟1s后 引擎已经离开这里 并不会进行错误捕获 故无法处理
// 这里的错误并不是在执行阶段生成的，而是在执行阶段之后才生成错误