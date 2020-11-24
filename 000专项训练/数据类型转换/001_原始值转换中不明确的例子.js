// 其他类型---->布尔类型
console.log(Boolean(document.all)); // false  typeof document.all===undefined
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true
console.log(Boolean(divs)); // true
// 原始值---->字符串
console.log(Symbol(1)); // 'Symbol(1)'
// 原始值----->数字类型
console.log(Symbol(1)); // TypeError:Cannot convert a Symbol value to a number
//  parseInt and parseFloat
console.log(parseInt('1.3a455')); // 1
console.log(parseFloat('0x11')); // 0 十六进制都转换为0
console.log(parseFloat('.23')); // 0.23
// 原始类型转换为对象
console.log(new Number(1)); // Number{1}
console.log(new Symbol(1)); // TypeError Symbol is not a constructor
console.log(new Object(Symbol(1))); // Symbol{Symbol(1)}
console.log(new Object(null)); // {}
console.log(new Object(undefined)); // {}
