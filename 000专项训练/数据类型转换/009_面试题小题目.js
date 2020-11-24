//----------Segmentation(*^▽^*)----------
console.log([] == []);
// false 引用地址不同
console.log([] == ![]);
// true   ![]=false []==false []==0 ''==0 0==0
console.log({} == 1);
// false   '[object,object]'==1 NaN==1

//----------Segmentation(*^▽^*)----------
console.log({} + '' * 1);
// NaN ''*1 优先级  {}+0 NaN+0
console.log({} - []);
// NaN
console.log({} + []);
//'[object,object] '
console.log([2] - [] + function () {});
// '2function(){}'   '2'-''  2-0+'function(){}' '2function(){}'
