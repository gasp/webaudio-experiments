export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'buffer'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()

  console.log('sample rate', context.sampleRate)

  const bufferSize = context.sampleRate * 3
  const numberOfChannels = 1
  const buffer = context.createBuffer(1, bufferSize, context.sampleRate)
  let data = buffer.getChannelData(0)

  // fill the buffer with noise
  for (let i = 0; i < bufferSize; i++) {
    // data[i] = Math.random() * 2 - 1 // white noise :-)
    // data[i] = Math.sin(i / 10) // an oscillator
    // data[i] = Math.sin(i * i) // a strange oscillator
    // data[i] = Math.log(Math.sin(i / 10)) // something strange and not pleasent
    data[i] = Math.sin((1 / i) * bufferSize) // lazer noise https://i0.wp.com/www.methodemaths.fr/limite_inverse.jpg
  }

  let noise = context.createBufferSource()
  noise.buffer = buffer

  noise.connect(context.destination)
  noise.start()

  const section = document.createElement('section')
  section.append(chapter)

  return section
}
