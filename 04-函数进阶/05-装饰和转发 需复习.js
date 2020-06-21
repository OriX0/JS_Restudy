/*创建一个装饰器 spy(func)，它应该返回一个包装器，
它在 calls 属性中保存所有函数调用。
每个调用都保存为一个参数数组。
附：该装饰器有时用于单元测试，它的高级形式是 Sinon.JS 库中的 sinon.spy。*/

function work (a, b) {
  alert(a + b); // work 是一种任意的函数或方法
}
function spy (func) {
  function wrapper (...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }
  wrapper.calls = [];
  return wrapper;
}
work = spy(work);
work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
  alert('call:' + args.join()); // "call:1,2", "call:4,5"
}

/*延迟装饰器
创建一个装饰器 delay(f, ms)，将每次调用 f 延迟 ms 毫秒。*/

function f (x) {
  alert(x);
}
function delay (func, ms) {
  return setTimeout(() => func.apply(this, arguments), ms);
}
function delay (func, ms) {
  return function (...args) {
    let savedThis = this;
    setTimeout(function () {
      f.apply(savedThis, args);
    }, ms);
  };
}
// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // 在 1000 ms 后展示 "test"
f1500("test"); // 在 1500 ms 后展示 "test"


/*debounce(f, ms) 装饰器的结果应该是一个包装器，
它最多允许每隔 “ms” 毫秒调用一次 f。
换句话说，当我们多次调用 “debounced” 函数时，
它保证忽略距离上次调用在 “ms” 毫秒内的调用。*/

function debounce (f, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}
let f = debounce(alert, 1000);

f(1); // 立即执行
f(2); // 忽略

setTimeout(() => f(3), 100); // 忽略（只过去了 100 ms）
setTimeout(() => f(4), 1100); // 运行
setTimeout(() => f(5), 1500); // 忽略（离上一次执行不超过 1000 ms）