/*使用条件运算符 '?' 重写下面的 if 语句：
let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

let result = (a + b < 4) ? 'Below' : 'Over';

/*使用多个三元运算符 '?' 重写下面的 if..else 语句。
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}*/
let message = (login == "Employee") ? 'Hello' :
  (login == "Director") ? 'Greetings' :
    (login == "") ? 'No login' :
      '';