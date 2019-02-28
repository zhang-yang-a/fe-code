/**
 * Created by wyw on 2019/2/26.
 */

// function Person(name){
// }
// Person.prototype.name = '';
// function Goods() {
//     this.name = 'Goods';
// }
//
// let lisi = new Person('lisi');

// 两条原型链
//  console.log(Person.__proto__ === Function.prototype, Function.prototype.__proto__ === Object.prototype, Object.prototype.__proto__ === null); // true true true

// console.log(lisi.__proto__ === Person.prototype, Person.prototype.__proto__ === Object.prototype,Object.prototype.__proto__ === null ); // true true true

// 实例对象没有prototype，自身也没有constructor，但是可以从原型链上继承constructor
// console.log(lisi.constructor === Person.prototype.constructor, Person.prototype.constructor === Person); // true true
// console.log(lisi.hasOwnProperty('constructor')); // false

// Person.prototype = new Goods();
// Person.prototype.constructor = Person;
// console.log(lisi, lisi.name);
// console.log(Person.prototype);
function Person(name){
    this.name = name;
}
Person.prototype.say = function () {
    console.log(this.name);
};
let lisi = new Person('lisi');
let liwu = new Person('liwu');
// console.log(lisi.say === liwu.say); // true
// console.log(lisi.hasOwnProperty('say'), liwu.hasOwnProperty('say')); // false false
// Person.prototype.age = 18;
// console.log(lisi.age, liwu.age); // 18 18
// Person.prototype.age = 20;
// console.log(lisi.age, liwu.age); // 20 20
lisi.say = function() {
    console.log('oh nanana');
};
lisi.say();
liwu.say();
console.log(lisi);
console.log(lisi.hasOwnProperty('say'), liwu.hasOwnProperty('say')); // true false