/*
 * @Description:
 * @Version: 1.0
 * @Author: OriX
 * @Date: 2020-12-11 15:56:28
 * @LastEditors: OriX
 * @LastEditTime: 2020-12-11 15:58:08
 * @Copyright (C) 2020 OriX. All rights reserved.
 */
//  书写unique函数代码 从而实现过滤效果
function unique(arr) {
  let set = new Set(arr);
  return Array.from(set);
}

let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

alert(unique(values)); // Hare, Krishna, :-O
