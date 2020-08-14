const targetDate = new Date("October 20, 2020");
const select = document.querySelector.bind(document);
const hours = select('span[data-value="hours"]');
const mins = select('span[data-value="mins"]');
const days = select('span[data-value="days"]');
const secs = select('span[data-value="secs"]');

function remainingTime() {
  countingFormulas();
}

function countingFormulas(time) {
  let time = targetDate.getTime() - Date.now();
  const daysTime = Math.floor(time / (1000 * 60 * 60 * 24));
  const hoursTime = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minsTime = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secsTime = Math.floor((time % (1000 * 60)) / 1000);
  setTimer(daysTime, hoursTime, minsTime, secsTime);
}

function setTimer(day, hour, min, sec) {
  hours.textContent = hour;
  mins.textContent = min;
  days.textContent = day;
  secs.textContent = sec;
}

setInterval(remainingTime, 1000);
