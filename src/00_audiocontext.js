export default function() {
  const chapter = document.createElement('div')
  chapter.innerText = 'audiocontext: check in the console.log'

  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()
  console.log(context)

  const section = document.createElement('section')
  section.append(chapter)

  return section
}
