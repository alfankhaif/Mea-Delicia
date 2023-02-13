var video = document.getElementById("vidi");
video.playbackRate = 7;
video.muted = true;

function updateClock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
  document.getElementById("clock").innerHTML = time;
}

function addZero(num) {
  return (num < 10) ? "0" + num : num;
}

var audio = document.getElementById("audio");

if (audio.paused) {
  audio.play();
}

function playPauseAudio() {
  if (audio.paused) {
    audio.play();
    document.getElementById("playPauseImg").src = "./pause.svg";
  } else {
    audio.pause();
    document.getElementById("playPauseImg").src = "./play.svg";
  }
}

var volumeControl = document.getElementById("vc");

function changeVolume() {
  audio.volume = volumeControl.value;
}

setInterval(updateClock, 1000);

var startDate = new Date(2023, 0, 15);
var currentDate = new Date();
var timeDiff = currentDate - startDate;
var daysAfter = Math.ceil(timeDiff / (1000 * 3600 * 24));
var mo = daysAfter % 30;
document.getElementById("daysAfter").innerHTML = (daysAfter - 1) + " days " + "(" + mo + " Months)" + " has passed since we committed a relationship";
