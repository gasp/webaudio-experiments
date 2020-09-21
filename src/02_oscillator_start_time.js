export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'oscillator start time'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()

  const oscillator = context.createOscillator()
  // start playing 196.2 after 10 sec
  oscillator.frequency.setValueAtTime(196.2, 10)
  oscillator.connect(context.destination)
  oscillator.start()

  const section = document.createElement('section')
  section.append(chapter)

  return section
}
