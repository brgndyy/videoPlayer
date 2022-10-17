document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const play = document.getElementById("play");
  const stop = document.getElementById("stop");
  const progress = document.getElementById("progress");
  const timestamp = document.getElementById("timestamp");

  //재생 or 일시정지 and 아이콘 업데이트

  function playOrPauseVideo() {
    if (video.paused) {
      video.play();
      play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
    } else {
      video.pause();
      play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
    }
  }

  // 비디오 멈추기 버튼

  function stopVideo() {
    video.currentTime = 0;
    video.pause();
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  }

  // input range 변경하기

  function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;   



    let min = Math.floor(video.currentTime / 60);
    let sec = Math.floor(video.currentTime % 60);
    if( min < 10){
        min = '0' + String(min);
    }
    if( sec < 10){
        sec = '0' + String(sec);
    }

    timestamp.innerText = min + ':' + sec;
  }

  // progress 바 움직이면 비디오 화면 변경 되기

  function updateTime(){

    video.currentTime = (progress.value * video.duration) / 100;
    
  }





  video.addEventListener("click", playOrPauseVideo);
  video.addEventListener("timeupdate", updateProgress);
  play.addEventListener("click", playOrPauseVideo);
  stop.addEventListener("click", stopVideo);
  progress.addEventListener('change', updateTime);
});
