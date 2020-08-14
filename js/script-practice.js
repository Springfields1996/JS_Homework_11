//use promise

// function showDelay(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(delay);
//     }, delay);
//   });
// }

// function logger(ms) {
//   console.log(`Promise was done with delay in ${ms}`);
// }

// showDelay(4000).then(logger);
// showDelay(1445).then(logger);

// showDelay(1000).then(logger);

// showDelay(100).then(logger);

// console.log(showDelay(4000));

// const students = [
//   {
//     name: "user 1",
//     student: false,
//     age: 17,
//   },
//   {
//     name: "user 2",
//     student: true,
//     age: 22,
//   },
//   {
//     name: "user 3",
//     student: true,
//     age: 17,
//   },
//   {
//     name: "user 4",
//     student: false,
//     age: 23,
//   },
//   {
//     name: "user 5",
//     student: true,
//     age: 19,
//   },
// ];

// function updateUserStatus(array, name) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const student = array.find((elem) => elem.name === name);
//       if (!student) {
//         rej("We don't find choosed user");
//       } else {
//         res(
//           array.map((elem) => {
//             if (elem.name === name) {
//               !elem.student;
//               return elem;
//             }
//             return elem;
//           })
//         );
//       }
//     }, 0);
//   });
// }

// function toShowStudent(student) {
//   console.log(student);
// }

// updateUserStatus(students, "user 4").then(toShowStudent);
// updateUserStatus(students, "user 7")
//   .then(toShowStudent)
//   .catch((err) => console.log(err));

// function searchStudents(arr, min, max) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const newArr = arr.filter((student) => student.age >= min && student.age <= max);
//       newArr.length ? res(newArr) : rej("Can't find choosed students");
//     });
//   });
// }

// function showStudents(elem) {
//   console.log(elem);
// }

// function greeting() {
//   console.log("Hello");
// }

// searchStudents(students, 17, 18)
//   .then(showStudents)
//   .catch((err) => console.log(err))
//   .finally(greeting);
// searchStudents(students, 25, 30).then(showStudents).finally(greeting);

// const product1 = {
//   id: 1,
//   price: 100,
//   quantity: 10,
// };
// const product2 = {
//   id: 2,
//   price: 120,
//   quantity: 6,
// };
// const product3 = {
//   id: 3,
//   price: 10,
//   quantity: 4,
// };
// const product4 = {
//   id: 4,
//   price: 89,
//   quantity: 23,
// };

// function getSum (obj, num) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (obj.count >= num) {
//         const sum = obj.price * quantity;
//         res(sum);
//       } else {
//         rej("Недостаточно продуктов!")
//       }

//     }, 0)
//   })
// }

// function getSum(obj) {
//   let num = Math.floor(Math.random() * (20 - 1) + 1);
//   let ms = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (obj.count >= num) {
//         obj.price * quantity;
//         res({ sum: obj.price * quantity, delay: ms });
//       } else {
//         rej(`${obj.id} = ${obj.count}`);
//       }
//     }, 0);
//   });
// }

// function sucsees({ sum, ms }) {
//   console.log(sum, ms);
// }

// function errLog(arguments) {
//   console.log(`Здесь ${sum}`);
// }
// getSum(product3);

// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд,
//  так чтобы мы могли добавить к нему .then:

// function delay(ms) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res();
//     }, ms);
//   });
// }
// const delay = (ms) => new Promise((res, rej) => setTimeout(() => res(), ms));

// function alerting() {
//   alert("выполнилось через 3 секунды");
// }

// delay(3000).then(alerting);

// https://pokeapi.co/api/v2/pokemon/

// function findPocemon(name, number) {
//   return new Promise((res, rej) => {
//     let fn = fetch(`https://pokeapi.co/api/v2/pokemon/${name || number || ""}`);
//     fn && res(fn);
//   });
// }

// findPocemon(1000)
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const body = document.querySelector("body");

// function getCurrencyExchange() {
//   let api = fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");
//   return api;
// }

// getCurrencyExchange()
//   .then((api) => api.json())
//   .then((api) =>
//     api.map((el) =>
//       body.insertAdjacentHTML(
//         "afterbegin",
//         `<div><p>${el.ccy}: ${el.buy}, ${el.sale}<p></div>`
//       )
//     )
//   );

// const inputCity = document.querySelector("#input1");
// const inputStreet = document.querySelector("#input2");

// setTimeout(() => {
//   inputCity.addEventListener("input", (event) => {
//     let city = new FormData();
//     console.log(city, city.value);
//   });
// }, 1000);

// function getAddress() {
//   const keyAPI = "0e13905b619541988abd6bd979459f44";
//   let address = fetch(
//     `https://newsapi.org/v2/sources?apiKey=0e13905b619541988abd6bd979459f44`
//   );
//   return address;
// }

// getAddress().then((address) => console.log(address));
