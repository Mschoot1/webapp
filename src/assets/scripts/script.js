(function videojs(window, videojs) {
  var player = window.player = videojs('example-video');

  // hook up the video switcher
  var loadUrl = document.getElementById('load-url');
  var url = document.getElementById('url');
  loadUrl.addEventListener('submit', function(event) {
    event.preventDefault();
    player.src({
      src: url.value,
      type: 'application/x-mpegURL'
    });
    return false;
  });
}(window, window.videojs));
