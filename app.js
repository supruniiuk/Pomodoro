let time = 2;
let repeat_time = 1000;

const convert_to_seconds = (min, sec) => {
  return Number(min * 60 + Number(sec));
};

const convert_from_seconds = (seconds) => {
  const sec = seconds % 60;
  const min = Math.floor(seconds / 60);
  return [min, sec];
};

const showTime = () => {
  let minutes = document.querySelector("#min");
  let seconds = document.querySelector("#sec");
  if (time > 0) {
    --time;
    let [min, sec] = convert_from_seconds(time);

    minutes.textContent = String(min).padStart(2, "0");
    seconds.textContent = String(sec).padStart(2, "0");
  }
};
setInterval(showTime, repeat_time);
