window.onload = function(){

// start the sound and stuff  
var context = new AudioContext();

// so you won't start a bunch of sounds
let switchSound = "false";

// html selectors
var startSound = document.querySelector('#startsound');
var mute = document.querySelector('#mute');

// Reverb
let reverb = new Tone.Reverb(3, 0.1, 0);

function reverbWet(wetAmount) {
  reverb.decay = wetAmount/10;
  console.log(reverb.decay)
}

// Delay
let delay = new Tone.FeedbackDelay(0.1, 0.5);

function delayWet(wetAmount) {
  delay.delayTime.value = wetAmount/100;
  console.log(delay.delayTime.value);
}

// Filter
let filter = new Tone.Filter(200, "lowpass");

function filterWet(wetAmount) {
  filter.frequency.value = wetAmount;
}


// NEW CONSTRUCTOR CODE 

class Instrument {
  constructor() {
    this.synthType = null;
    this.synth = null;
    this.gain = new Tone.Gain(0.5);
    this.gain;
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
      },
      AMSynth: {
        harmonicity: 3,
        detune: 0,
        oscillator: {
          type: "sine"
        },
        envelope: {
          attack: 0.01,
          decay: 0.01,
          sustain: 1,
          release: 0.5
        },
        modulation: {
          type: "square"
        },
        modulationEnvelope: {
          attack: 0.01,
          decay: 0,
          sustain: 1,
          release: 0.5
        }
      },

      FMSynth: {
        harmonicity: 3,
        modulationIndex: 10,
        detune: 0,
        oscillator: {
          type: "sine"
        },
        envelope: {
          attack: 0.01,
          decay: 0.01,
          sustain: 1,
          release: 0.5
        },
        modulation: {
          type: "square"
        },
        modulationEnvelope: {
          attack: 0.01,
          decay: 0,
          sustain: 1,
          release: 0.5
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
  }

  updateOscillatorType(oscillatorType, oscillatorPartials) {
    let partials = oscillatorPartials === 'none' ? '' : oscillatorPartials;
    this.synth.oscillator.type = `${oscillatorType}${partials}`;
  }
}



  startSound.addEventListener('click', function() {
    context.resume().then(() => {
    
      if (switchSound === "false"){
        switchSound = "true";
    
    // receiving inputs
    let $synthType = $("#synth-type").val();
    let $oscillatorType = $("#oscillator-type").val();
    let $oscillatorPartials = $("#oscillator-partials").val();

    let inst = new Instrument();
    inst.updateSynthType($synthType);
    inst.updateOscillatorType($oscillatorType, $oscillatorPartials)

    $("#synth-type").change(function() {
      inst.updateSynthType($("#synth-type").val());
    });
    $("#oscillator-type").change(function() {
      inst.updateOscillatorType($("#oscillator-type").val(), $("#oscillator-partials").val());
    });
    $("#oscillator-partials").change(function() {
      inst.updateOscillatorType($("#oscillator-type").val(), $("#oscillator-partials").val());
    });
    $("#bpm-speed").on('input', function() {
      updateBPM($("#bpm-speed").val());
      $('span#bpm-output').text($("#bpm-speed").val());
    });
    $("#reverb-wet").on('input', function() {
      reverbWet($("#reverb-wet").val());
      $('span#reverb-output').text($("#reverb-wet").val() - 3);
    });
    $("#filter-wet").on('input', function() {
      filterWet($("#filter-wet").val()); 
      $('span#filter-output').text($("#filter-wet").val());
    });
    $("#delay-wet").on('input', function() {
      delayWet($("#delay-wet").val()); 
      $('span#delay-output').text($("#delay-wet").val());
    });
    

    function updateBPM(speed) {
      Tone.Transport.bpm.value = speed;  
    }
    
    
          const $inputs = document.querySelectorAll('input'),
          chords = [
            'G0 C1 E1 D1 B1', 'F0 A1 C1 E1 F1', 'G0 B1 D1 F2 D2', 
            'D1 F1 A1 C2 D0', 'E1 G1 B1'
          ].map(formatChords);

          var chordIdx = 0,
              step = 0;

      Array.from($inputs).forEach($input => {
      $input.addEventListener('change', () => {
        if ($input.checked) handleChord($input.value);
      })
      });

      function handleChord(valueString) {
      chordIdx = parseInt(valueString) - 1;
      }
      
      inst.gain.chain(reverb, filter, delay, Tone.Destination);
      Tone.Transport.scheduleRepeat(onRepeat, '16n');
      
      Tone.Transport.start();

      function onRepeat(time) {
      let chord = chords[chordIdx],
          note = chord[step % chord.length];
      inst.synth.triggerAttackRelease(note, '32n', time);
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
            inst.gain.gain.rampTo(0);
            mute.setAttribute('data-muted', 'true');
            mute.innerHTML = "unmute";
          } else {
            inst.gain.gain.rampTo(0.5);
            mute.setAttribute('data-muted', 'false');
            mute.innerHTML = "mute";
          };
        }
      }
    });
  })
}
