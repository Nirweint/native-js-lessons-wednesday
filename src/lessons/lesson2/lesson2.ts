console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

//  const sum = (num1: number) => {
//      return (num2: number) => {
//          return num1 + num2
//      }
//  }
//
// console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:

// const  makeCounter = () =>{
//     let i = 0
//     return () => {
//         return i = i + 1
//     }
// }
// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// const counter2 = makeCounter();
// console.log(counter2()); // 1
// console.log(counter()); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// const makeSmartCounter = (startNumber: number) =>{
//     let res = startNumber
//
//     return {
//         increase() {
//             return startNumber += 1
//         },
//         decrease() {
//             return startNumber -= 1
//         },
//         reset() {
//             return startNumber = 0
//         },
//         set() {
//             return startNumber = res
//         },
//     }
// }
//
// let some = (makeSmartCounter(20))
// console.log(some.increase()) // 21
// console.log(some.decrease()) // 20
// console.log(some.decrease()) // 19
// console.log(some.set()) // 20
// console.log(some.reset()) // 0
// let one = (makeSmartCounter(10))
// console.log(one.increase()) // 11
// console.log(some.increase()) // 1


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:




// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
// @ts-ignore
// function sumTo(n: number) {
//     if (n === 1) return n
//
//     return n + sumTo(n - 1)
// }
//
// console.log(sumTo(100))

// function factorial(n: number) {
//     if (n === 1) return n
//     return n * factorial(n - 1)
// }
//
// console.log(factorial(5))

// function fib(n: number) {
//     if (n <= 1) return n
//     return fib(n - 1) + fib(n - 2)
// }
//
// console.log(fib(77))
//
// function fib(n: number) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }

// let listForTry = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// function printList(list: any): any {
//     if (list.next) {
//         return list.value + printList(list.next)
//     }
//     return list.value
// }
//
// console.log(printList(listForTry))


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {

};