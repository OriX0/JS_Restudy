//----------Segmentation(*^▽^*)----------
// 让 if (a === 1 && a === 2 && a === 3) 条件成立？

// 1.defineProperty劫持
var value = 1;
Object.defineProperty(window, 'a', {
  get() {
    return this.value++;
  },
});

//2.数组解决方案
var arr = [1, 2, 3];
Object.defineProperty(window, 'a', {
  get() {
    return this.arr.shift();
  },
});
