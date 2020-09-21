export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'gain'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()

  const oscillator = context.createOscillator()
  oscillator.type = 'sine'
  oscillator.frequency.value = 430

  const amp = context.createGain()

  oscillator.connect(amp).connect(context.destination)
  oscillator.start()

  const range = document.createElement('input')
  range.type = 'range'
  range.min = 0
  range.max = 100
  range.addEventListener('input', ev => {
    amp.gain.setValueAtTime(ev.target.value / 100, context.currentTime) // you can use other AudioParams here
    chapter.innerText = `gain value is ${JSON.stringify(amp.gain.value)}`
  })
  range.style.width = '100%'

  const section = document.createElement('section')
  section.append(chapter)
  section.append(range)

  return section
}
