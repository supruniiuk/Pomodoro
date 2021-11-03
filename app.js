const convertToSeconds = (min, sec) => {
  return Number(min * 60 + Number(sec));
};

const convert_from_seconds = (seconds) => {
  const sec = seconds % 60;
  const min = Math.floor(seconds / 60);
  return [min, sec];
};

const startTimer = () => {
  intrvl = setInterval(showTime, repeat_time);
};

const pauseTimer = () => {
  clearInterval(intrvl);
};

const setTime = (time) => {
  let [min, sec] = convert_from_seconds(time);

  minutes.textContent = String(min).padStart(2, "0");
  seconds.textContent = String(sec).padStart(2, "0");
};

const showTime = () => {
  if (time > 0) {
    --time;
    setTime(time);
  }
};

let time = 22;
let repeat_time = 1000;
let counterActive = false;
let intrvl;

let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");

let timer = document.querySelector(".circle");
timer.onclick = () => {
  if (!counterActive) {
    startTimer();
    counterActive = true;
  } else {
    pauseTimer();
    counterActive = false;
  }
};

setTime(time);
