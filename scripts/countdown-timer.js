function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    'total': t,
    'days': 0,
    'hours': 0,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var notification = new Notification('Timer', {
        body: 'Times\'s up!'
      });

    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}


module.exports = function() {
  // var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  // var deadline = new Date(Date.parse(new Date()) + 1 * 1 * 20 * 60 * 1000);
  // var deadline = new Date(Date.parse(new Date()) + 1 * 1 * 1 * 60 * 1000);
  // var deadline = new Date(Date.parse(new Date()) + 1 * 1 * 1 * 10 * 1000);
  // initializeClock('clockdiv', deadline);
  var clock = document.getElementById('clockdiv');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var startButton = document.getElementById('start');

  minutesSpan.innerHTML = '20';
  secondsSpan.innerHTML = '00';

  startButton.onclick = function () {
    minutesSpan.innerHTML = '20';
    secondsSpan.innerHTML = '00';
    // var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    // var deadline = new Date(Date.parse(new Date()) + 1 * 1 * 20 * 60 * 1000);
    var deadline = new Date(
      Date.parse(new Date()) +
      (minutesSpan.innerHTML/1) * 60 * 1000 + (secondsSpan.innerHTML/1) * 60 * 1000
    );
    // var deadline = new Date(Date.parse(new Date()) + 1 * 1 * 1 * 60 * 1000);
    // var deadline = new Date(Date.parse(new Date()) + 1 * 1 * 1 * 10 * 1000);
    initializeClock('clockdiv', deadline);
  }

}
