export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'random'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()

  var oscillator = context.createOscillator()
  oscillator.type = 'triangle'

  var freq = 200

  function changeNote() {
    freq = freq * 1.5
    if (freq > 600) {
      freq = 200 + Math.random() * 200
    }
    oscillator.frequency.value = freq
    oscillator.frequency.setValueAtTime(freq, context.currentTime)
  }

  setInterval(changeNote, 145)

  oscillator.connect(context.destination)
  oscillator.start()

  const section = document.createElement('section')
  section.append(chapter)

  return section
}
