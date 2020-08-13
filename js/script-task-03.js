const targetDate = new Date("October 20, 2020");
const hours = document.querySelector('span[data-value="hours"]');
const mins = document.querySelector('span[data-value="mins"]');
const days = document.querySelector('span[data-value="days"]');
const secs = document.querySelector('span[data-value="secs"]');

function remainingTime() {
  let time = targetDate.getTime() - Date.now();
  const daysTime = Math.floor(time / (1000 * 60 * 60 * 24));
  const hoursTime = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minsTime = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secsTime = Math.floor((time % (1000 * 60)) / 1000);
  hours.textContent = hoursTime;
  mins.textContent = minsTime;
  days.textContent = daysTime;
  secs.textContent = secsTime;
}

setInterval(remainingTime, 1000);
