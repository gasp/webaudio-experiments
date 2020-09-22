export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'theremin'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()

  const oscillator = context.createOscillator()
  oscillator.frequency.value = 100
  oscillator.connect(context.destination)

  const button = document.createElement('button')
  button.innerText = 'play'
  button.addEventListener('click', () => {
    oscillator.start()
    section.append(range)
  })

  const range = document.createElement('input')
  range.type = 'range'
  range.min = 0
  range.max = 1000
  range.addEventListener('input', ev => {
    oscillator.frequency.value = ev.target.value
    console.log(ev.target.value)
  })
  range.style.width = '100%'

  const section = document.createElement('section')
  section.append(button)
  section.append(chapter)



  return section
}
