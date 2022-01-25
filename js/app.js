const convertToSeconds = (min, sec) => {
  return Number(min * 60 + Number(sec));
};

const convert_from_seconds = (seconds) => {
  const sec = seconds % 60;
  const min = Math.floor(seconds / 60);
  return [min, sec];
};

const minutes = document.querySelector("#min");
const seconds = document.querySelector("#sec");
const timePicker = document.querySelectorAll("[data-time-type]");

const startBtn = document.querySelector('[data-action="start"]');
const pauseBtn = document.querySelector('[data-action="pause"]');
const resetBtn = document.querySelector('[data-action="reset"]');

let time = 1500;
let currentTime = 1500;
const repeat_time = 1000;
const timeTypes = {
  pomodoro: 1500,
  shortBreak: 300,
  longBreak: 600,
};
let intrvl;

const showCurrentTime = () => {
  if (currentTime > 0) {
    let [min, sec] = convert_from_seconds(currentTime--);

    minutes.textContent = String(min).padStart(2, "0");
    seconds.textContent = String(sec).padStart(2, "0");
  }
};

const setTime = (duration) => {
  time = duration;
  currentTime = duration;
};

const startTimer = () => {
  intrvl = setInterval(showCurrentTime, repeat_time);
};

const pauseTimer = () => {
  clearInterval(intrvl);
  intrvl = null;
};

const resetTimer = () => {
  pauseTimer();
  currentTime = time;
  showCurrentTime();
};

for (let i = 0; i < timePicker.length; i++) {
  const element = timePicker[i];
  const duration = element.getAttribute("data-time-type");

  element.onclick = () => {
    resetTimer();
    setTime(timeTypes[duration]);
    showCurrentTime(timeTypes[duration]);
  };
}

startBtn.onclick = () => {
  if (!intrvl) {
    startTimer();
  }
};

pauseBtn.onclick = () => {
  pauseTimer();
};

resetBtn.onclick = () => {
  resetTimer();
};
