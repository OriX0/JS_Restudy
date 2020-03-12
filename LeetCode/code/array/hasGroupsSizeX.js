export function hasGroupsSizeX (deck) {
  let len = deck.length
  if (len < 2) return false
  let map = new Map()
  for (let i = 0; i < len; i++) {
    if (map[deck[i]] === undefined) {
      map[deck[i]] = 1
    } else {
      map[deck[i]]++
    }
  }
  function gcd (a, b) {
    if (a % b === 0) return b
    return gcd(b, a % b)
  }
  let values = Object.values(map)
  for (let j = 0; j < values.length - 1; j++) {
    if (gcd(values[j], values[j + 1]) === 1) {
      return false
    }
  }
  return true
}
