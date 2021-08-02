const BtnReproducirVideo = document.getElementById("btn_repro_video");
let player = videojs("video_player");

player.hotkeys({
  volumeStep: 0.1,
  seekStep: 5
});

BtnReproducirVideo.addEventListener("click", function () {
  let url = document.getElementById("txt_url_video").value;
  if (url.trim().length == 0) {
    alert("Ingrese una url por favor");
    return;
  }
  player.src({ type: "video/mp4", src: url });
});

player.zoomrotate({
  // rotate: 90,
  zoom: 1,
  debug: false
});
