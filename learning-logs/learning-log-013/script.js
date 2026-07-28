let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let clock = document.querySelector("#clock");
let message = document.querySelector("#message");

let clockInterval;

startBtn.addEventListener(`click`, function () {

    message.textContent = `Clock Started`;
    clockInterval = setInterval(function () {
      let date = new Date();
      clock.textContent = date.toLocaleTimeString();
    }, 1000);

    setTimeout(function () {   // Stop the clock after 10 seconds
      clearInterval(clockInterval);
      message.textContent = `Clock Stopped after 5 sec`;
    }, 10000);
});

stopBtn.addEventListener(`click`, function () {
  clearInterval(clockInterval);
  message.textContent = `Clock Stopped`;
});
