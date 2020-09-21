export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'oscillator'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext({
    sampleRate: 8000,
  })

  const oscillator = context.createOscillator()
  // oscillator.frequency.value = 196.2
  oscillator.connect(context.destination)
  oscillator.start()

  const section = document.createElement('section')
  section.append(chapter)

  return section
}
