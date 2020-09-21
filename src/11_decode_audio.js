export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'sound sample'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()

  console.log('sample rate', context.sampleRate)

  let player = context.createBufferSource()
  player.connect(context.destination)

  fetch('assets/cl_hat_3001.wav') // or bip.mp3
    .then(response => response.arrayBuffer())
    .then(binAudio => context.decodeAudioData(binAudio))
    .then(buffer => {
      player.buffer = buffer
      player.loop = false
      player.start()
    })

  const section = document.createElement('section')
  section.append(chapter)

  return section
}
