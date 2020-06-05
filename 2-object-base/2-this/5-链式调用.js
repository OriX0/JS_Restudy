/*修改 up，down 和 showStep 的代码，让调用可以链接，
就像这样： ladder.up().up().down().showStep(); // 1
*/
// 原code
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // 显示当前的 step
    alert( this.step );
  }
};
// 可链式写法
let ladder2 = {
  step:0,
  up(){
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // 显示当前的 step
    alert( this.step );
    return this;
  }
}