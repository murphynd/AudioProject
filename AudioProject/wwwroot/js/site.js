window.onload = function(){

// start the sound and stuff  
var context = new AudioContext();

// so you won't start a bunch of sounds
let switchSound = "false";

// html selectors
var startSound = document.querySelector('#startsound');
var mute = document.querySelector('#mute');

// Initial synth
const synth = new Tone.PolySynth();


// NEW CONSTRUCTOR CODE 

class Instrument {
  constructor() {
    this.synthType = null;
    this.synth = null;
    this.gain = new Tone.Gain();
    this.gain.toDestination();
  }

  get defaultSettings() {
    return {
      Synth: {
        oscillator: { type: 'triangle' },
        envelope:  {
          attack: 0.005,
          decay: 0.1, 
          sustain: 0.3, 
          release: 1 
        }
      }
    };
  }

  updateSynthType(synthType) {

      // if we already defined this synth
      if (this.synth) {
        this.synth.disconnect(this.gain);
        this.synth.dispose();
      }
      let settings = this.defaultSettings[synthType] || {};
      this.synth = new Tone[synthType](settings);
      this.synth.connect(this.gain);
      this.synth.triggerAttackRelease('C4', '16n');
      console.log(this.synth);
  }
}



  startSound.addEventListener('click', function() {
    context.resume().then(() => {
    if (switchSound === "false"){

    switchSound = "true";
    

    let inst = new Instrument();
    inst.updateSynthType('Synth');

          const $inputs = document.querySelectorAll('input'),
          chords = [
            'G0 C1 E1 B1 C1', 'F1 A1 C1 E2', 'G1 B1 D1', 
            'D1 F1 A1 C2', 'E1 G1 B1'
          ].map(formatChords);

          var chordIdx = 0,
              step = 0;
          
          
          // synth.oscillator.type = 'sine';
          let gain = new Tone.Gain(0.2);
          let reverb = new Tone.Reverb(2, 0.1);
          gain.toDestination();
          // reverb.connect(gain).toDestination();
          // synth.connect(reverb).connect(gain);
          
          
          
          

      Array.from($inputs).forEach($input => {
      $input.addEventListener('change', () => {
        if ($input.checked) handleChord($input.value);
      })
      });

      function handleChord(valueString) {
      chordIdx = parseInt(valueString) - 1;
      }

      Tone.Transport.scheduleRepeat(onRepeat, '16n');
      Tone.Transport.bpm.value = 100;  
      Tone.Transport.start();

      function onRepeat(time) {
      let chord = chords[chordIdx],
          note = chord[step % chord.length];
      synth.triggerAttackRelease(note, '32n', time);
      step++;
      }

      function formatChords(chordString) {
        let chord = chordString.split(' ');
        let arr = [];
        for (let i= 0; i< 2; i++) {
          for (let j = 0; j < chord.length; j++){
            let noteOct = chord[j].split('')
                note = noteOct[0];
            let oct = (noteOct[1] === "0") ? i + 2 : i + 4;
            note += oct;
            arr.push(note);
          }
        }
        return arr;
      }

        mute.onclick = function() {
          if(mute.getAttribute('data-muted') === 'false') {
            gain.gain.rampTo(0);
            mute.setAttribute('data-muted', 'true');
            mute.innerHTML = "unmute";
          } else {
            gain.gain.rampTo(0.6);
            mute.setAttribute('data-muted', 'false');
            mute.innerHTML = "mute";
          };
      }
    }
  });
})
}
  
  

