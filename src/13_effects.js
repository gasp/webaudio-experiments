export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'sound sample'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()

  let player = context.createBufferSource()

  //set up the different audio nodes we will use for the app
  const analyser = context.createAnalyser()
  const distortion = context.createWaveShaper()
  const gainNode = context.createGain()
  const biquadFilter = context.createBiquadFilter()
  const convolver = context.createConvolver()

  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(stream => {
      const source = context.createMediaStreamSource(stream)
      source.connect(analyser)
      analyser.connect(distortion)
      distortion.connect(biquadFilter)
      biquadFilter.connect(convolver)
      convolver.connect(gainNode)
      gainNode.connect(context.destination)

      // Manipulate the Biquad filter

      biquadFilter.type = 'lowshelf'
      biquadFilter.frequency.setValueAtTime(1000, context.currentTime)
      biquadFilter.gain.setValueAtTime(25, context.currentTime)
    })

  const section = document.createElement('section')
  section.append(chapter)

  return section
}
