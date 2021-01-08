/*
 * @Description:
 * @Version: 1.0
 * @Author: OriX
 * @Date: 2021-01-07 16:16:21
 * @LastEditors: OriX
 * @LastEditTime: 2021-01-07 16:17:08
 * @Copyright (C) 2021 OriX. All rights reserved.
 */
//----------Segmentation(*^▽^*)----------
/*
Description:
  在所有函数的原型中添加 defer(ms) 方法，该方法返回一个包装器，
  将函数调用延迟 ms 毫秒
*/
/*
思路

*/
{
  // 效果
  function f(a, b) {
    alert(a + b);
  }

  f.defer(1000)(1, 2); // 1 秒后显示 3
}
