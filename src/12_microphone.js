export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'sound sample'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()

  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(stream => {
      const micro = context.createMediaStreamSource(stream)
      micro.connect(context.destination)
    })

  const section = document.createElement('section')
  section.append(chapter)

  return section
}
