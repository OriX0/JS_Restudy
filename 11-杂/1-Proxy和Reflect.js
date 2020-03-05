/*读取不存在的属性时出错
通常，尝试读取不存在的属性会返回 undefined。
创建一个代理，在尝试读取不存在的属性时该代理抛出错误。
这可以帮助及早发现编程错误。
编写一个接受 target 对象，并返回添加此方面功能的 proxy 的 wrap(target) 函数。
应满足如下结果：*/

let user = {
  name: "John"
};

function wrap (target) {
  return new Proxy(target, {
    get (target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      } else {
        throw new ReferenceError(`Property doesn't exist: "${prop}"`)
      }
    }
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // 错误：属性不存在

//
/*array[-N] 与 array[array.length - N] 相同。
创建一个 proxy 来实现该行为。
那应该是这样的：*/

let array = [1, 2, 3];

array = new Proxy(array, {
  get (target, prop, receiver) {
    if (prop < 0) {
      prop = +prop + target.length;
    }
    return Reflect.get(target, prop, receiver);
  }
});

alert(array[-1]); // 3
alert(array[-2]); // 2

// 其他数组也应该适用于这个功能


// 
/*创建一个通过返回代理“使对象可观察”的 makeObservable(target) 函数。
换句话说，makeObservable 返回的对象就像原始对象一样，但是也具有将
 handler 函数设置为在任何属性更改时都被调用的方法 observe(handler) 。
每当属性更改时，都会使用属性的名称和值调用 handler(key, value) 。
P.S. 在此任务中，请仅注意写入属性。可以以类似方式实现其他操作。*/


 function makeObservable(target) {
  /* your code */
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John"; // alerts：设置 name 属性为 John
