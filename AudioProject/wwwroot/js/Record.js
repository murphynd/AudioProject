var canvas = document.querySelector("canvas");
var video = document.querySelector("video");



var videoStream = canvas.captureStream(30);
var mediaRecorder = new MediaRecorder(videoStream);

var chunks = [];
mediaRecorder.ondataavailable = function(e) {
  chunks.push(e.data);
};

mediaRecorder.onstop = function(e) {
  var blob = new Blob(chunks, { 'type' : 'video/mp4' });
  chunks = [];
  var videoURL = URL.createObjectURL(blob);
  video.src = videoURL;
};
mediaRecorder.ondataavailable = function(e) {
  chunks.push(e.data);
};

mediaRecorder.start();
setTimeout(function() {mediaRecorder.stop(); }, 5000);
