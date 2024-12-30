let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let play = document.querySelector("#play");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

let playMusic = () => {
  if (play.classList.contains("fa-play")) {
    song.play();
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
  } else {
    song.pause();
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
  }
};

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
    progress.max = song.duration;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  play.classList.remove("fa-play");
  play.classList.add("fa-pause");
};
