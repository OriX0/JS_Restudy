/* 写一个“if”条件句来检查 age 是否位于 14 到 90 的闭区间。
“闭区间”意味着，age 的值可以取 14 或 90。*/
if (age >= 14 && age <= 90) {
  alert(true);
} else {
  alert(false);
}

/*写一个 if 条件句，检查 age 是否不位于 14 到 90 的闭区间。
创建两个表达式：第一个用非运算 !，第二个不用。*/
if (!(age >= 14 && age <= 90)) {
  alert(true);
}
if (age < 14 || age > 90) {
  alert(true);
}
