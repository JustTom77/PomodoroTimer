const timeElMin = document.getElementById("minutes");
const timeElSec = document.getElementById("seconds");
const pauseElMin = document.getElementById("pause-minutes");
const pauseElSec = document.getElementById("pause-seconds");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopTimeBtn = document.getElementById("focus-pause-btn");
const stopPauseBtn = document.getElementById("stop-pause-btn");
const focusTimeEl = document.getElementById("timer");
const pauseTimeEl = document.getElementById("pause-timer");
const focusChoiceEl = document.getElementById("focus-choice");
const pauseChoiceEl = document.getElementById("pause-choice");
const intervalChoiceEl = document.getElementById("interval-choice");
const intervalStatus = document.getElementById("interval-status");
const intervalStatusPause = document.getElementById("interval-status-pause");

// ==> FOCUS TIME CHOICES <==
const focusChoiceOne = document.getElementById("focus-one");
const focusChoiceTwo = document.getElementById("focus-two");
const focusChoiceThree = document.getElementById("focus-three");
const focusChoiceFour = document.getElementById("focus-four");

// ==> PAUSE TIME CHOICES <==
const pauseChoiceOne = document.getElementById("pause-one");
const pauseChoiceTwo = document.getElementById("pause-two");
const pauseChoiceThree = document.getElementById("pause-three");
const pauseChoiceFour = document.getElementById("pause-four");

// ==> INTERVAL CHOICES <==
const intervalChoiceOne = document.getElementById("interval-one");
const intervalChoiceTwo = document.getElementById("interval-two");
const intervalChoiceThree = document.getElementById("interval-three");
const intervalChoiceFour = document.getElementById("interval-four");

// ==> MESSAGES <==
const pauseMessage = document.getElementById("pause-message");
const pauseCloser = document.getElementById("pause-closer");
const workMessage = document.getElementById("work-message");
const workCloser = document.getElementById("work-closer");
const finishedMessage = document.getElementById("finished-message");
const finishCloser = document.getElementById("finish-closer");

// ==> ON LOAD <==
// ==> GLOBAL VARIABLES <==

const timeObject = {
  minutes: "",
  seconds: 0,
  pauseMinutes: "",
  pauseSeconds: 0,
  intervals: "",
  intervalStatus: 1,
};

timeElSec.textContent =
  timeObject.seconds < 10 ? `0${timeObject.seconds}` : timeObject.seconds;
pauseElSec.textContent =
  timeObject.pauseSeconds < 10
    ? `0${timeObject.pauseSeconds}`
    : timeObject.pauseSeconds;

function timer() {
  let currentTimeMin = timeObject.minutes;
  stopTimeBtn.style.display = "flex";
  startBtn.style.display = "none";
  let timerCountdown = setInterval(() => {
    if (timeObject.seconds > 0) {
      timeObject.seconds--;
    } else if (timeObject.minutes > 0) {
      timeObject.minutes--;
      timeObject.seconds = 59;
    }
    timeElMin.textContent =
      timeObject.minutes < 10 ? `0${timeObject.minutes}` : timeObject.minutes;
    timeElSec.textContent =
      timeObject.seconds < 10 ? `0${timeObject.seconds}` : timeObject.seconds;
    if (
      timeObject.minutes === 0 &&
      timeObject.seconds === 0 &&
      timeObject.intervals > 1
    ) {
      clearInterval(timerCountdown);
      focusTimeEl.style.display = "none";
      pauseMessage.style.display = "flex";
    } else if (
      timeObject.minutes === 0 &&
      timeObject.seconds === 0 &&
      timeObject.intervals === 1
    ) {
      finishedMessage.style.display = "flex";
      focusTimeEl.style.display = "none";
    }
    stopTimeBtn.addEventListener("click", () => {
      stopTimeBtn.style.display = "none";
      startBtn.style.display = "flex";
      clearInterval(timerCountdown);
    });
  }, 1000);
  pauseCloser.addEventListener("click", () => {
    timeObject.minutes = currentTimeMin;
    timeElMin.textContent =
      timeObject.minutes < 10 ? `0${timeObject.minutes}` : timeObject.minutes;
    timeElSec.textContent =
      timeObject.seconds < 10 ? `0${timeObject.seconds}` : timeObject.seconds;
    pauseMessage.style.display = "none";
    pauseTimeEl.style.display = "flex";
    stopPauseBtn.style.display = "none";
    console.log(timeObject);
    timeObject.intervalStatus++;
  });

  console.log(timeObject);
}

function pauseTimer() {
  let intervalStartValue = timeObject.intervals;
  timeObject.intervals--;
  let currentPauseTimeMin = timeObject.pauseMinutes;
  stopPauseBtn.style.display = "flex";
  pauseBtn.style.display = "none";
  let pauseTimerCountdown = setInterval(() => {
    if (timeObject.pauseSeconds > 0) {
      timeObject.pauseSeconds--;
    } else if (timeObject.pauseMinutes > 0) {
      timeObject.pauseMinutes--;
      timeObject.pauseSeconds = 59;
    }
    pauseElMin.textContent =
      timeObject.pauseMinutes < 10
        ? `0${timeObject.pauseMinutes}`
        : timeObject.pauseMinutes;
    pauseElSec.textContent =
      timeObject.pauseSeconds < 10
        ? `0${timeObject.pauseSeconds}`
        : timeObject.pauseSeconds;
    if (timeObject.pauseMinutes === 0 && timeObject.pauseSeconds === 0) {
      clearInterval(pauseTimerCountdown);
      workMessage.style.display = "flex";
      pauseTimeEl.style.display = "none";
    }
    stopPauseBtn.addEventListener("click", () => {
      stopPauseBtn.style.display = "none";
      pauseBtn.style.display = "flex";
      clearInterval(pauseTimerCountdown);
    });
  }, 1000);
  workCloser.addEventListener("click", () => {
    timeObject.pauseMinutes = currentPauseTimeMin;
    pauseElMin.textContent =
      timeObject.pauseMinutes < 10
        ? `0${timeObject.pauseMinutes}`
        : timeObject.pauseMinutes;
    pauseElSec.textContent =
      timeObject.pauseSeconds < 10
        ? `0${timeObject.pauseSeconds}`
        : timeObject.pauseSeconds;
    intervalStatus.innerText = `${timeObject.intervalStatus}/${intervalStartValue}`;
    intervalStatusPause.innerText = `${timeObject.intervalStatus}/${intervalStartValue}`;
    workMessage.style.display = "none";
    focusTimeEl.style.display = "flex";
    stopTimeBtn.style.display = "none";
    startBtn.style.display = "flex";
    console.log(timeObject);
  });
}

// ==> EVENT LISTENER <==
startBtn.addEventListener("click", timer);
pauseBtn.addEventListener("click", pauseTimer);

finishCloser.addEventListener("click", () => {
  location.reload();
});
// ==> SET FOCUS TIME <==
focusChoiceOne.addEventListener("click", () => {
  timeObject.minutes = parseInt(focusChoiceOne.innerText);
  console.log(timeObject);
  focusChoiceEl.style.display = "none";
  pauseChoiceEl.style.display = "flex";
  timeElMin.textContent =
    timeObject.minutes < 10 ? `0${timeObject.minutes}` : timeObject.minutes;
});
focusChoiceTwo.addEventListener("click", () => {
  timeObject.minutes = parseInt(focusChoiceTwo.innerText);
  console.log("clicked");
  focusChoiceEl.style.display = "none";
  pauseChoiceEl.style.display = "flex";
  timeElMin.textContent =
    timeObject.minutes < 10 ? `0${timeObject.minutes}` : timeObject.minutes;
});
focusChoiceThree.addEventListener("click", () => {
  timeObject.minutes = parseInt(focusChoiceThree.innerText);
  console.log(timeObject.minutes);
  focusChoiceEl.style.display = "none";
  pauseChoiceEl.style.display = "flex";
  timeElMin.textContent =
    timeObject.minutes < 10 ? `0${timeObject.minutes}` : timeObject.minutes;
});
focusChoiceFour.addEventListener("click", () => {
  timeObject.minutes = parseInt(focusChoiceFour.innerText);
  console.log(minutes);
  focusChoiceEl.style.display = "none";
  pauseChoiceEl.style.display = "flex";
  timeElMin.textContent =
    timeObject.minutes < 10 ? `0${timeObject.minutes}` : timeObject.minutes;
});

// ==> SET PAUSE TIME <==
pauseChoiceOne.addEventListener("click", () => {
  timeObject.pauseMinutes = parseInt(pauseChoiceOne.innerText);
  console.log(timeObject);
  pauseChoiceEl.style.display = "none";
  intervalChoiceEl.style.display = "flex";
  pauseElMin.textContent =
    timeObject.pauseMinutes < 10
      ? `0${timeObject.pauseMinutes}`
      : timeObject.pauseMinutess;
});
pauseChoiceTwo.addEventListener("click", () => {
  timeObject.pauseMinutes = parseInt(pauseChoiceTwo.innerText);
  pauseChoiceEl.style.display = "none";
  intervalChoiceEl.style.display = "flex";
  pauseElMin.textContent =
    timeObject.pauseMinutes < 10
      ? `0${timeObject.pauseMinutes}`
      : timeObject.pauseMinutes;
});
pauseChoiceThree.addEventListener("click", () => {
  timeObject.pauseMinutes = parseInt(pauseChoiceThree.innerText);
  pauseChoiceEl.style.display = "none";
  intervalChoiceEl.style.display = "flex";
  pauseElMin.textContent =
    timeObject.pauseMinutes < 10
      ? `0${timeObject.pauseMinutes}`
      : timeObject.pauseMinutes;
});
pauseChoiceFour.addEventListener("click", () => {
  timeObject.pauseMinutes = parseInt(pauseChoiceFour.innerText);
  pauseChoiceEl.style.display = "none";
  intervalChoiceEl.style.display = "flex";
  pauseElMin.textContent =
    timeObject.pauseMinutes < 10
      ? `0${timeObject.pauseMinutes}`
      : timeObject.pauseMinutes;
});

// ==> SET INTERVALS <==
intervalChoiceOne.addEventListener("click", () => {
  timeObject.intervals = parseInt(intervalChoiceOne.innerText);
  intervalStatus.innerText = `${timeObject.intervalStatus}/${timeObject.intervals}`;
  intervalStatusPause.innerText = `${timeObject.intervalStatus}/${timeObject.intervals}`;
  intervalChoiceEl.style.display = "none";
  focusTimeEl.style.display = "flex";
});
intervalChoiceTwo.addEventListener("click", () => {
  timeObject.intervals = parseInt(intervalChoiceTwo.innerText);
  intervalStatus.innerText = `${timeObject.intervalStatus}/${timeObject.intervals}`;
  intervalStatusPause.innerText = `${timeObject.intervalStatus}/${timeObject.intervals}`;
  intervalChoiceEl.style.display = "none";
  focusTimeEl.style.display = "flex";
  console.log(timeObject);
});
intervalChoiceThree.addEventListener("click", () => {
  timeObject.intervals = parseInt(intervalChoiceThree.innerText);
  intervalStatus.innerText = `${timeObject.intervalStatus}/${timeObject.intervals}`;
  intervalStatusPause.innerText = `${timeObject.intervalStatus}/${timeObject.intervals}`;
  intervalChoiceEl.style.display = "none";
  focusTimeEl.style.display = "flex";
  console.log(timeObject);
});
intervalChoiceFour.addEventListener("click", () => {
  timeObject.intervals = parseInt(intervalChoiceFour.innerText);
  intervalStatus.innerText = `${timeObject.intervalStatus}/${timeObject.intervals}`;
  intervalStatusPause.innerText = `${timeObject.intervalStatus}/${timeObject.intervals}`;
  intervalChoiceEl.style.display = "none";
  focusTimeEl.style.display = "flex";
  console.log(timeObject);
});

// ==> CLOSE FINISH MESSAGE AND RELOAD PAGE <==
finishCloser.addEventListener("click", () => {
  location.reload();
});
