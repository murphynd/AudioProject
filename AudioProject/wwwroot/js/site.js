var mute = document.querySelector('#mute');

window.onload = function(){

  document.querySelector('#startsound').addEventListener('click', function() {
    var context = new AudioContext();

          const $inputs = document.querySelectorAll('input'),
          chords = [
            'G0 C1 E1 B1 C1', 'F1 A1 C1', 'G1 B1 D1', 
            'D1 F1 A1', 'E1 G1 B1'
          ].map(formatChords);

          var chordIdx = 0,
              step = 0;

          const synth = new Tone.Synth();
          synth.oscillator.type = 'sine';
          gain = new Tone.Gain(0.6);
          reverb = new Tone.Reverb(5, 0.1);
          gain.toDestination();
          synth.connect(gain);

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
      synth.triggerAttackRelease(note, '16n', time);
      step++;
      }

      function formatChords(chordString) {
        let chord = chordString.split(' ');
        let arr = [];
        for (let i= 0; i< 2; i++) {
          for (let j = 0; j < chord.length; j++){
            let noteOct = chord[j].split('')
                note = noteOct[0];
            let oct = (noteOct[1] === "0") ? i + 4 : i + 3;
            note += oct;
            arr.push(note);
          }
        }
        return arr;
      }

        mute.onclick = function() {
          if(mute.getAttribute('data-muted') === 'false') {
            synth.disconnect(gain);
            mute.setAttribute('data-muted', 'true');
            mute.innerHTML = "Unmute";
          } else {
            synth.connect(gain);
            mute.setAttribute('data-muted', 'false');
            mute.innerHTML = "Mute";
          };
      }
    });
  
}

