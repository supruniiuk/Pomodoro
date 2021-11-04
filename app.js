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

const resetTimer = () => {
  clearInterval(intrvl);
  setTime(time);
};

const setTime = (currentTime) => {
  let [min, sec] = convert_from_seconds(currentTime);

  minutes.textContent = String(min).padStart(2, "0");
  seconds.textContent = String(sec).padStart(2, "0");
};

const getPercent = (currentTime) => {
  return (currentTime * 100) / time;
};
const showTime = () => {
  if (currentTime > 0) {
    --currentTime;
    setTime(currentTime);

    setPercent(currentTime);
  }
};

let time = 22;
let currentTime = 22;
let repeat_time = 1000;
let counterActive = false;
let timePercent = 100;
let intrvl;

let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");
let optionText = document.getElementsByClassName("option")[0];

let timer = document.querySelector(".circle");
timer.onclick = () => {
  if (!counterActive) {
    startTimer();
    counterActive = true;
    optionText.textContent = "pause";
  } else {
    pauseTimer();
    counterActive = false;
    optionText.textContent = "start";
  }
};

setTime(time);
