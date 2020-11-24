console.log(String(null)); // ===>toPrimitive(null,string)="null"
console.log(String(new Object(true))); //===>toPrimitive(Boolean{ture},string)=“true”
console.log(String([true, false]));
//===>toPrimitive([true, false],string)=[true,false].toString()  = "true,false"
console.log(String([NaN, 1])); // "NaN,1"
console.log(String([function () {}, 1]));
//====>function(){}.toString() +","+1.toString() = "function(){}"
console.log(String([{ name: 'obj' }, { name: 'obj2' }]));
//====>{name:'obj'}.toString() +{name:'obj'}.toString() = [object,object],[object,object]
