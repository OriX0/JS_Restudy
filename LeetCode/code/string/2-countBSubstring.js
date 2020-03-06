export function countBSubstring (s) {
  // pre记录前一个值出现的次数 cur 记录现在的值出现的次数
  let result = 0; let pre = 0; let cur = 1
  for (let index = 0; index < s.length - 1; index++) {
    // 如果前一个值和现在的值相等 则出现次数++
    if (s[index] === s[index + 1]) {
      cur++
    } else {
      // 否则出现新值 则当前数字事实上变成了前一个数字，当前数字的次数重置为1
      pre = cur
      cur = 1
    }
    // 当前一个值出现次数>=现在的值的出现次数时 则满足
    if (pre >= cur) {
      result = result + 1
    }
  }
  return result
}
