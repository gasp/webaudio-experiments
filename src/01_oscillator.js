export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'oscillator'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()

  const oscillator = context.createOscillator()
  oscillator.frequency.value = 300
  oscillator.connect(context.destination)
  oscillator.start()

  const section = document.createElement('section')
  section.append(chapter)

  return section
}
