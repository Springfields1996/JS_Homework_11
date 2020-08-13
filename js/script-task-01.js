// const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];

// const startBtn = document.querySelector(".button-start");
// const stopBtn = document.querySelector(".button-stop");
// const body = document.querySelector("body");
// let intervalId = null;

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// function changeColor() {
//   body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
// }

// body.addEventListener("click", (event) => {
//   if (event.target.className === "button-start") {
//     intervalId = setInterval(changeColor, 1000);
//     event.target.setAttribute("disabled", "disabled");
//   } else if (event.target.className === "button-stop") {
//     clearInterval(intervalId);
//     startBtn.removeAttribute("disabled");
//   }
// });
