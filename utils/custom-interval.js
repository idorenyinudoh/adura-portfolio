export default function (callback, duration) {
  let timerId;
  let currentTime = 0;
  let paused = true;

  function step() {
    if (paused) {
      return;
    }

    currentTime += 100;
    if (currentTime >= duration) {
      callback();
      currentTime = 0;
    }

    timerId = setTimeout(step, 100);
  }

  this.play = function () {
    if (paused) {
      paused = false;
      step();
    }
  };

  this.pause = function () {
    clearTimeout(timerId);
    paused = true;
  };

  this.stop = function () {
    clearTimeout(timerId);
    paused = true;
    currentTime = 0;
  };
}