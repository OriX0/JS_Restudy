/*这里有一份代码，是 Rabbit 继承 Animal。
不幸的是，Rabbit 对象无法被创建，是哪里出错了呢？请解决这个问题。*/


class Animal {
  constructor(name) {
    this.name = name;
  }

}
class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);

// 继承 clock
/*
我们有一个 Clock 类。到目前为止，它每秒都会打印时间。
从 Clock 继承并创建一个新的类 ExtendedClock，
同时添加一个参数 precision ——
每次 “ticks” 之间间隔的毫秒数，默认是 1000（1秒）。
你的代码在 extended-clock.js 文件里
不要修改原来的 clock.js。只继承它。*/
class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render () {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
    console.log(output);
  }
  stop () {
    clearInterval(this.timer);
  }
  start () {
    this.render();
    console.log(typeof render);
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  // 多参数形式
  constructor({ template }, precision) {
    super({ template });
    this.precision = (precision) ? precision : 1000;
  }
  // 以对象形式传入多参数
  /*
  constructor(options) {
    super(options);
    console.log(options);
    let { precision = 1000 } = options;
    console.log(this.precision);
    this.precision = precision;
  }*/

  start () {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
// 对象形式传入
// let clock = new ExtendedClock({ template: 'h:m:s', precision: 2000 });
// 多参数形式
let clock = new ExtendedClock({ template: 'h:m:s' }, 2000);

clock.start();

// 
class Rabbit extends Object {
  constructor(name) {
    super();// 这里必须调用super
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert(rabbit.hasOwnProperty('name')); // true