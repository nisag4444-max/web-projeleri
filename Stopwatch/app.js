window.onload = function () {
  let seconds = 0;
  let tens = 0;

  let appendTens = document.querySelector(".tens");
  let appendSeconds = document.querySelector(".second");
  let buttonStart = document.querySelector(".btnStart");
  let buttonStop = document.querySelector(".btnStop");
  let buttonReset = document.querySelector(".btnReset");

  let interval;

  buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(interval);
  };

  buttonReset.onclick = function () {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;

      appendSeconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;

      tens = 0;
      appendTens.innerHTML = "00";
    }
  }
};
