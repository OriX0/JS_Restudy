// 手动实现 将普通函数包装 并返回promise
function promisify (f) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback (err, result) {
        if (err) {
          return reject(err);
        } else {
          return resolve(result);
        }
      }
      // 将回调函数作为参数 传入原函数
      args.push(callback);
      // 调用原来的函数
      f.call(this, ...args);
    })
  }
}

// 多参数 promisify 进阶版
function promisify (f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback (err, ...result) {
        if (err) {
          return reject(err);
        } else {
          return resolve(manyArgs ? result : result[0]);
        }
      }
      args.push(callback);
      f.call(this, ...args);
    })
  }
}