/* 1:
输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc"
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
*/

// 92ms执行时间
export default (str) => {
  // 1.以空格分割
  return str.split(' ').map(item => {
    // 2.map遍历并将每个单词分割成字母倒序后重新join为字符串
    return item.split('').reverse().join('')
    // 3.join成字符
  }).join(' ')
}
// 参考vue 源码操作 80ms 41.1mb
export function reverseWord (str) {
  // 1.整体反转 整体文字
  let arr = str.split('').reverse().join('')
  // 2.单词先后顺序反转
  return arr.split(' ').reverse().join(' ')
}
// 配合正则 100ms  42.1mb
export function reverseWord2 (str) {
  // 1.整体反转 整体文字
  let arr = str.split('').reverse().join('')
  // 2.单词先后顺序反转
  return arr.split(' ').reverse().join(' ')
}
