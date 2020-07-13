/*
 * @Author: OriX
 * @Date: 2020-07-13 18:04:43
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-13 18:20:13
 * @FilePath: \JS_Restudy\04-函数进阶\06-装饰和转发 call 和apply\3-节流装饰器.js
 */
/* 创建一个“节流”装饰者 throttle(f, ms) —— 返回一个包装器，最多每隔 1ms 将调用传递给 f 一次。那些属于“冷却”期的调用将被忽略。
与 debounce 的区别 —— 如果被忽略的调用是冷却期间的最后一次，那么它会在延时结束时执行。
让我们看看现实生活中的应用程序，以便更好地理解这个需求，并了解它的来源。
例如，我们想要跟踪鼠标移动。
在浏览器中，我们可以设置一个函数，使其在每次鼠标移动时运行，并获取鼠标移动时的指针位置。在使用鼠标的过程中，此函数通常会执行地非常频繁，大概每秒 100 次（每 10 毫秒）。
当鼠标指针移动时，我们想要更新网页上的某些信息。
……但是更新函数 update() 太重了，无法在每个微小移动上都执行。高于每 100ms 更新一次的更新频次也没有意义。
因此，我们将其包装到装饰者中：使用 throttle(update, 100) 作为在每次鼠标移动时运行的函数，而不是原始的 update() 。装饰者会被频繁地调用，但是最多每 100ms 将调用转发给 update() 一次。
在视觉上，它看起来像这样：

对于第一个鼠标移动，装饰的变体立即将调用传递给 update。这很重要，用户会立即看到我们对其动作的反应。
然后，随着鼠标移动，直到 100ms 没有任何反应。装饰的变体忽略了调用。
在 100ms 结束时 —— 最后一个坐标又发生了一次 update。
然后，最后，鼠标停在某处。装饰的变体会等到 100ms 到期，然后用最后一个坐标运行一次 update。因此，非常重要的是，处理最终的鼠标坐标。
一个代码示例：
P.S.参数（arguments）和传递给 f1000 的上下文 this 应该被传递给原始的 f。 */
function f (a) {
  console.log(a);
}

// f1000 最多每 1000ms 将调用传递给 f 一次
let f1000 = throttle(f, 1000);

f1000(1); // 显示 1
f1000(2); // (节流，尚未到 1000ms)
f1000(3); // (节流，尚未到 1000ms)

// 当 1000ms 时间到...
// ...输出 3，中间值 2 被忽略

/* 
  定义变量 保存现在是否节流 以及如果节流用于保存的参数和this的变量
  第一次运行不节流 
  然后开始节流
  用setTimeOut 
  如果是节流期就保存参数和this

*/
function throttle (f, ms) {
  let isThrottled = false;
  let saveArgs,
    saveThis;
  function wrapper () {
    if (isThrottled) {
      saveArgs = arguments;
      saveThis = this;
    }
    // 第一次运行
    f.apply(this, arguments);
    // 开始节流
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
      if (saveArgs) {
        f.apply(saveThis, saveArgs);
        saveThis = saveArgs = null;
      }
    }, ms)
  }
  return wrapper;

}