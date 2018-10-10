const timer = (game) => {
  let minutes = document.body.querySelector(`.timer-value-mins`);
  let seconds = document.body.querySelector(`.timer-value-secs`);
  let minutesData = game.mins;
  let secondsData = game.secs;

  let setTimer = setInterval(function () {
    if (secondsData === 0 || secondsData === `00`) {
      secondsData = 59;
      minutesData--;
      if (minutesData < 0) {
        clearInterval(setTimer);
        secondsData = 0;
        minutesData = 0;
      }
    }

    minutes.innerHTML = minutesData;
    if (minutes.innerHTML < 10) {
      minutes.innerHTML = `0${minutes.innerHTML}`;
    }
    seconds.innerHTML = secondsData--;
    if (seconds.innerHTML < 10) {
      seconds.innerHTML = `0${seconds.innerHTML}`;
    }

  }, 1000);
};

export default timer;
