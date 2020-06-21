let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); //1


/* delay(ms) 函数会返回一个 promise。这个 promise 应该在 ms 毫秒之后被处理。
因此我们可以在这之后调用 .then，就像这样：*/

function delay (ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve, ms);
  })

  // return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => alert('runs after 3 seconds'));