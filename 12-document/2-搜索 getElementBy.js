//1---
/*如何查找？*/
// id="age-table" 的表格。 
document.getElementById('age-table');
document.querySelector('#age-table');
window['age-table'];
// 所有的 label 元素都内嵌于表格（应该有三个）。
document.querySelectorAll('label')
document.getElementsByTagName('label')
// 表格中的第一个 td（字段是 “Age”）。
table.querySelector('td[name="age"]')
table.rows[0].cells[0]
table.getElementsByTagName('td')[0]
// form 的一个字段是 search。
document.querySelector('form[name="search"]')
document.getElementsByTagName('form')[0]
// 第一个 input 在表单中。
form.querySelector('input')
form.getElementsByTagName('input')[0]
// 最后一个 input 在表单中。
let inputs = form.querySelectorAll('input') // search all
inputs[inputs.length-1]


//2----
