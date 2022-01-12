console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// type Person = {
//     name: string;
// }
//
// function Test(this: Person, name: string) {
//     this.name = name;
// }
// let obj:Person = new Test('Evgen'); // JS
// let obj:Person = new (Test as any)('Evgen');


// class Test {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
// }
//
// let obj:Person = new Test('Evgen');

// console.dir(function () {});
// console.dir(class {});



// class Test {
//     name: string;
//     age: number;
//     //sayName: Function;
//     //sayBy: Function;
//
//     constructor(name: string, age: number = 10) {
//         this.name = name;
//         this.age = age;
//         //this.sayName = function () { };
//         //this.sayBy = () => {};
//     }
//
//     //sayName = function () { }
//     //sayName() {}
//
//     sayBy = () => {};
//
// }
//
// let obj = new Test('Evgen');
// let obj2 = new Test('Vlad', 50);

// console.log(obj);
// console.log(obj2);
//console.log(obj.sayName === obj2.sayName);



// class Person {
//     name: string;
//     age: number;
//
//     constructor(name: string, age: number = 10) {
//         this.name = name;
//         this.age = age;
//     }
//
//     sayName() {}
//
//     sayYo() {
//         console.log('YoYoYo');
//     }
// }
//
//
// class PolitePerson extends Person {
//     city:string
//
//     constructor(name: string, age: number, city:string) {
//         super(name, age);
//         this.city = city;
//     }
//
//     greeting() {}
//
//     sayYo() {
//         console.log('Hi Yo!!!!');
//     }
//
//     someMethod()  {
//         super.sayYo()
//     }
//
// }
//
// let politeObj = new PolitePerson('Hanna', 25, 'Minsk');
// let basObj = new Person('Evgen', 33);
// //console.log(politeObj);
// //console.log(basObj);
//
// politeObj.sayYo()
// politeObj.someMethod()


// class Helper {
//     sayName = () => {}
//     sayYo() {}
// }
//
// class SuperHelper extends Helper {
//     someMethod() {}
//     parentMethod() {
//         //super.sayName();
//     }
//
//     sayName = () => {}
//     // toString() {
//     //     return 'Bla';
//     // } // [object Object]
// }
//
// let testObj = new SuperHelper();
// console.log(testObj.toString())

// class Test {
//     name:string
//     constructor(name:string) {
//         this.name = name;
//     }
//
//     sayName() {
//         console.log('Base');
//     }
// }
//
// class Test2 extends Test {
//     age: number
//     constructor(name:string, age: number) {
//         super(name);
//         this.age = age;
//     }
//
//     sayName() {
//         console.log('Extended');
//     }
//
//     parentSayName() {
//         super.sayName();
//     }
// }
//
// class Test3 extends Test2 {
//     city: string;
//     constructor(name:string, age: number, city: string) {
//         super(name, age);
//         this.city = city;
//     }
//     someMethod() {
//         //super.parentSayName()
//         //@ts-ignore
//         //this.__proto__.__proto__.__proto__.sayName();
//     }
// }
//
// let obj = new Test3('E', 20, 'M');
// obj.sayName();
// obj.someMethod();


// class Test {
//     #privateParam = 10;
//
//     getPrivateParam() {
//         return this.#privateParam;
//     }
// }
//
// let obj = new Test();
// console.log(obj);
// console.log(obj.getPrivateParam());


// class Test {
//     #privateParam = 10;
//
//     getPrivateParam() {
//         return this.#privateParam;
//     }
// }
//
// class Test2 extends Test {
//     getChildMethod() {
//         return this.#privateParam; // error
//         //return super.#privateParam; // error приватные свойства и методы не наследуются
//     }
// }
//
// let obj = new Test2();
// console.log(obj.getPrivateParam());

// interface IPerson {
//     name: string;
//     age: number;
//
// }
//
// interface IPersonMixins extends IPerson {
//     sayName: Function;
// }
//
// interface IPerson2 {
//     name: string;
//     sayYo: Function;
//     sayBye: Function;
// }
//
// class Person implements IPersonMixins, IPerson2{
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     sayName() {}
//
//     sayYo() {}
//
//     sayBye() {}
// }




// class Person {
//     private pParam: number = 10;
//     protected ppParam: number = 100;
//     constructor(public name: string, public age: number, private city: string) { }
//     sayName() {}
// }
//
// class Person2 extends Person {
//     constructor(public name: string, public age: number) {
//         super(name, age, 'Minsk');
//     }
//     private getProrParam() {
//         return this.ppParam;
//     }
// }
//
// let obj = new Person2('Evgen', 33);
// console.log(obj.getProrParam());
// console.log(obj.ppParam);

//
// class StatTest {
//     static param = 10;
//
//     constructor(public name: string, public age: number) {
//     }
//
//     sayName() {
//         StatTest.param
//     }
//
//     static classMethod() {
//         console.log(this.param === StatTest.param);
//     }
// }
// let obj = new StatTest('Evgen', 33);
// console.log(obj);
//
// StatTest.classMethod();
//
// let testObj = {
//     name: 'Evgen',
//     f() {
//         //console.log(this.name);
//         console.log(testObj.name);
//     }
// }
//
// testObj.f()

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};