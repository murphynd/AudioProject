// // instigate our audio context

// // for cross browser
// const audioContext = window.AudioContext || window.webkitAudioContext;
// let audioCtx;

// // load some sound
// const audioElement = document.querySelector('audio');
// let track;

// const playButton = document.querySelector('.tape-controls-play');

// // play pause audio
// playButton.addEventListener('click', function() {
//   if(!audioCtx) {
// 		init();
// 	}

// 	// check if context is in suspended state (autoplay policy)
// 	if (audioCtx.state === 'suspended') {
// 		audioCtx.resume();
// 	}

// 	if (this.dataset.playing === 'false') {
// 		audioElement.play();
// 		this.dataset.playing = 'true';
// 	// if track is playing pause it
// 	} else if (this.dataset.playing === 'true') {
// 		audioElement.pause();
// 		this.dataset.playing = 'false';
// 	}

// 	let state = this.getAttribute('aria-checked') === "true" ? true : false;
// 	this.setAttribute( 'aria-checked', state ? "false" : "true" );

// }, false);

// // if track ends
// audioElement.addEventListener('ended', () => {
// 	playButton.dataset.playing = 'false';
// 	playButton.setAttribute( "aria-checked", "false" );
// }, false);

// function init() {

// 	audioCtx = new AudioContext();
// 	track = audioCtx.createMediaElementSource(audioElement);

// 	// volume
// 	const gainNode = audioCtx.createGain();

// 	const volumeControl = document.querySelector('[data-action="volume"]');
// 	volumeControl.addEventListener('input', function() {
// 		gainNode.gain.value = this.value;
// 	}, false);

// 	// panning
// 	const pannerOptions = { pan: 0 };
// 	const panner = new StereoPannerNode(audioCtx, pannerOptions);

// 	const pannerControl = document.querySelector('[data-action="panner"]');
// 	pannerControl.addEventListener('input', function() {
// 		panner.pan.value = this.value;
// 	}, false);

// 	// connect our graph
// 	track.connect(gainNode).connect(panner).connect(audioCtx.destination);
// }



// GRANT CODE 

// let play, 
//     oscillator, 
//     changefreq, 
//     changetype

// let oscProp = {
//   type: "sine",
//   frequency: 500,
//   playing: false
// }



// let audioContext = new AudioContext();

let beginTone;

window.onload = function(){

  // play = function(){
  //   if(oscProp.playing) {
  //     oscillator.stop();
  //     oscProp.playing = false;
  //   }
  //   else {
  //     oscillator = audioContext.createOscillator();
  //     oscillator.type = oscProp.type;
  //     oscillator.frequency.setValueAtTime(oscProp.frequency, audioContext.currentTime);
  //     oscillator.connect(audioContext.destination);
  //     oscillator.start();
  //     oscProp.playing = true;
  //   }
  // }

  // changefreq = function(){
  //   oscProp.frequency = document.getElementById("freqslider").value * 10;
  //   play();
  //   play();
  // }

  // changetype = function(){
  //   oscProp.type = document.querySelector("input[name = 'waveform']:checked").value;
  //   play();
  //   play();
  // }

    beginTone1 = function() {

      const osc = new Tone.Synth("C5", "triangle").toDestination();
      const reverb = new Tone.Reverb(10, 0.1).toDestination();
      const now = Tone.now()
  
  osc.triggerAttack("C1", now)
  osc.triggerRelease(now + 1)
  osc.frequency.value = "C1";
  osc.frequency.rampTo("C4", 1);
  const filter = new Tone.Filter(600,).toDestination();
  const feedbackDelay = new Tone.FeedbackDelay(0.25, 0.1).toDestination();

  // connect the player to the feedback delay and filter in parallel
  osc.connect(feedbackDelay); 
  osc.connect(reverb);
  }

    beginTone2 = function() {

      const osc = new Tone.Synth("triangle").toDestination();
      const reverb = new Tone.Reverb(10, 0.1).toDestination();
      const now = Tone.now()

  osc.triggerAttack("C1", now)
  osc.triggerRelease(now + 1)
  osc.frequency.rampTo("C5", 1);
  const filter = new Tone.Filter(600,).toDestination();
  const feedbackDelay = new Tone.FeedbackDelay(0.25, 0.1).toDestination();

  // connect the player to the feedback delay and filter in parallel
  osc.connect(feedbackDelay);
  osc.connect(reverb);
  }

    beginTone3 = function() {

    const osc = new Tone.Synth("C3", "sine").toDestination();
    const now = Tone.now()

    osc.triggerAttackRelease("D4", "8n", now + 1)

  const reverb = new Tone.Reverb(10, 0.2).toDestination();
  const filter = new Tone.Filter(600,).toDestination();
  const feedbackDelay = new Tone.FeedbackDelay(0.25, 0.1).toDestination();

  // connect the player to the feedback delay and filter in parallel
  osc.connect(reverb);
}

    beginTone4 = function() {

      const osc = new Tone.Synth("C3", "sine").toDestination();
      const now = Tone.now()

      osc.triggerAttackRelease("E4", "8n", now + 1)

    const reverb = new Tone.Reverb(10, 0.2).toDestination();
    const filter = new Tone.Filter(600,).toDestination();
    const feedbackDelay = new Tone.FeedbackDelay(0.25, 0.1).toDestination();

    // connect the player to the feedback delay and filter in parallel
    osc.connect(reverb);
}

}

// document.querySelector('#sine1').addEventListener('click', function() {
//   audioContext.resume().then(() => {
//     console.log('Playback resumed successfully');
//   });
// });

// var oscillator = audioContext.createOscillator();
// var filter = audioContext.createBiquadFilter();
// oscillator.connect(filter);
// oscillator.type = "sawtooth";

// oscillator.detune.setValueAtTime(200, audioContext.currentTime + 2);
// oscillator.detune.setValueAtTime(400, audioContext.currentTime + 3);




// filter.connect(audioContext.destination)

// filter.type = "lowpass";
// filter.frequency.setTargetAtTime(100, audioContext.currentTime, 2)

// oscillator.start(audioContext.currentTime);
// oscillator.stop(audioContext.currentTime + 9);

// oscillator.onended = function(){
//   console.log("AUDIO IS FINISHED");
// }