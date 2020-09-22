export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'oscillator start time'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()

  const oscillator = context.createOscillator()
  // start playing 196.2 after 10 sec
  oscillator.frequency.setValueAtTime(196.2, 10)
  oscillator.connect(context.destination)

  const button = document.createElement('button')
  button.innerText = 'play in 10 sec'
  button.addEventListener('click', () => {
    button.innerText = 'wait for it'
    oscillator.start()
  })

  const section = document.createElement('section')
  section.append(button)
  section.append(chapter)

  return section
}
