/*
 * @Description:立即执行函数  等待n秒后 重新触发
 * @Version: 1.0
 * @Author: OriX
 * @Date: 2020-12-20 20:57:53
 * @LastEditors: OriX
 * @LastEditTime: 2020-12-24 15:18:52
 * @Copyright (C) 2020 OriX. All rights reserved.
 */
// 参数immediate值 true||false
function debounce(fn, wait, immediate) {
  let timeout, result;
  let debounced = function () {
    let context = this;
    let args = arguments;
    if (timeout) {
      // 如果有计时器id了 清除这个计时器
      clearTimeout(timeout);
    }
    let callNow = !timeout;
    if (immediate) {
      // 已经执行过，不再执行
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) {
        result = fn.apply(context, args);
      }
    } else {
      timeout = setTimeout(function () {
        result = fn.apply(context, args);
        console.log(result);
      }, wait);
    }
  };
  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounced;
}
