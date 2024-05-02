'use strict';

// const arr = [5, 4, 3, 2];
// arr.forEach((value, index, array) => {
//   console.log(value, index, array);
// })

// const obj =
// {
//   a: 5,
//   b: 4,
//   c: 3,
//   d: 2,
// }
// for (const key in obj) {
//   console.log(obj[key] + '   ' + key);
// }




// function name1() {
//   for (let i = 5; i < 11; i++) {
//     console.log(i);
//   }
// }
// name1();

// function name2() {
//   for (let i = 20; i > 10; i--) {
//     if (i == 12) { break }
//     console.log(i);
//   }
// }
// name2()

// function name3() {

//   for (let i = 2; i < 12; i++) {
//     if (i % 2) { continue }
//     console.log(i);
//   }
// }
// name3()

// function name4() {
//   while (true) {
//     let i = 2
//     if (i % 2) { i = 2; i < 12; i++ }
//     if (i >= 14) break
//     console.log(i);
//   }
// }
// name4()

// const a = 4000
// const b = 5000
// // console.log('ширина кузова автомобиля:' + a + ',' + 'длинна кузова:' + b);
// console.log(`ширина кузова автомобиля:${a},длинна кузова:${b}`);

// let myObj = {
//   a: 1,
//   b: 4,
//   c: 3,
//   abc: {
//     true: true,
//     false: {
//       false: 'false111',
//       null: null,
//       undefined: undefined,
//       NaN: NaN,
//       Infinity: Infinity,
//     }
//   },
// }

// console.log(myObj.abc.false.Infinity);
// for (const key in myObj) {
//   console.log(myObj[key]);
// }
// let result = []
// result[0] = prompt('Как ваше имя?', ' ')
// result[1] = prompt('Как ваша фамилия?', ' ')
// result[2] = prompt('Сколько вам лет?', ' ')

// document.write(result)

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

array.forEach(element => {
  console.log(element + '1');
});