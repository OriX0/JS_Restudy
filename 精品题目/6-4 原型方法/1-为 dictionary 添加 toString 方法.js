/*
 * @Description:
 * @Version: 1.0
 * @Author: OriX
 * @Date: 2021-01-08 16:41:01
 * @LastEditors: OriX
 * @LastEditTime: 2021-01-08 16:41:40
 * @Copyright (C) 2021 OriX. All rights reserved.
 */
//----------Segmentation(*^▽^*)----------
/*
Description:
这儿有一个通过 Object.create(null) 创建的，用来存储任意 key/value 对的对象 dictionary。

为该对象添加 dictionary.toString() 方法，该方法应该返回以逗号分隔的所有键的列表。
你的 toString 方法不应该在使用 for...in 循环遍历数组的时候显现出来。
*/
/*
思路

*/
{
  let dictionary = Object.create(null);
  // 你的添加 dictionary.toString 方法的代码
  // 添加一些数据
  dictionary.apple = 'Apple';
  dictionary.__proto__ = 'test'; // 这里 __proto__ 是一个常规的属性键
  // 在循环中只有 apple 和 __proto__
  for (let key in dictionary) {
    alert(key); // "apple", then "__proto__"
  }
  // 你的 toString 方法在发挥作用
  alert(dictionary); // "apple,__proto__"
}
