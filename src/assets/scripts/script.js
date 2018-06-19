function hlsPlayer() {
  var video = document.getElementById('video');
  if(Hls.isSupported()) {
    var hlsjsConfig = {
      "maxBufferSize": 0,
      "maxBufferLength": 30,
      "liveSyncDurationCount": 1
    };
    var hls = new Hls(hlsjsConfig);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
    });
  }
}
