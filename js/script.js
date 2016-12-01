var jQuery = jQuery.noConflict(); 
jQuery(document).ready(function() {
    console.log( "ready!" );
    
    jQuery('#videowrapper').tubular({videoId: 'ua18_AEf77Q'});
    playButtonClass: 'tubular-play';
    
});


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.now();
    //var hundreds = Math.floor((t % 1000 / 10));
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
    //'hundreds': hundreds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  //var hundredsSpan = clock.querySelector('.hundreds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    //hundredsSpan.innerHTML = ('' + t.hundreds).slice(-7);
      

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date("2017-08-18T18:00:00");
initializeClock('clockdiv', deadline);