export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'lfo_connect'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()

  const osc = context.createOscillator()
  osc.type = 'sine'
  osc.frequency.value = 430

  const amp = context.createGain()
  amp.gain.setValueAtTime(1, context.currentTime)

  let lfo = context.createOscillator()
  lfo.type = 'sine'
  lfo.frequency.value = 4

  lfo.connect(amp.gain)
  osc.connect(amp).connect(context.destination)
  lfo.start()
  osc.start()

  const rangeO = document.createElement('input')
  rangeO.type = 'range'
  rangeO.min = 0
  rangeO.max = 1000
  rangeO.addEventListener('input', ev => {
    osc.frequency.value = ev.target.value
    console.log(ev.target.value)
  })
  rangeO.style.width = '100%'

  const rangeL = document.createElement('input')
  rangeL.type = 'range'
  rangeL.min = 0
  rangeL.max = 50
  rangeL.addEventListener('input', ev => {
    lfo.frequency.value = ev.target.value
    console.log(ev.target.value)
  })
  rangeL.style.width = '100%'

  const section = document.createElement('section')
  section.append(chapter)
  section.append(rangeO)
  section.append(rangeL)

  return section
}

/*
var saw = context.createOscillator(),
      sine = context.createOscillator(),
      sineGain = context.createGainNode();

//set up our oscillator types
saw.type = saw.SAWTOOTH;
sine.type = sine.SINE;

//set the amplitude of the modulation
sineGain.gain.value = 10;

//connect the dots
sine.connect(sineGain);
sineGain.connect(saw.frequency);
*/
