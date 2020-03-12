export function letterCombinations (str) {
  // 对输入做处理，如果小于1返回空（LeetCode测试用例）
  if (str.length < 1) return []
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mon', 'pqrs', 'tuv', 'wxyz']
  // 如果只有一个数字 则直接返回映射
  if (str.length < 2) return map[str].split('')
  let num = str.split('')
  let code = []
  num.forEach(item => map[item] ? code.push(map[item]) : code.push())
  let comb = (arr) => {
    // 临时变量进行保存
    let tmp = []
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  return comb(code)
}
