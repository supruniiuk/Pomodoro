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
  }
};

const setAnimation = () => {
  document.querySelector(".circle__content").style.animation =
    "line 10s linear forwards";

  let timelineStyle = document.querySelector(".timeline").style;
  timelineStyle.setProperty("--animBefore", "mask_right 10s steps(1, end) forwards");
  timelineStyle.setProperty("--animAfter", "mask_left 10s steps(1, end) forwards");
};

let time = 10;
let currentTime = 10;
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

    setAnimation();
  } else {
    pauseTimer();
    counterActive = false;
    optionText.textContent = "start";
  }
};

setTime(time);

/*
    document.querySelector(".timer-line").style.animationPlayState = "paused";
    document.querySelector(".timer-line::after").style.animationPlayState =
      "paused";
    document.querySelector(".timer:before").style.animationPlayState = "paused";
    document.querySelector(".timer:after").style.animationPlayState = "paused";*/
