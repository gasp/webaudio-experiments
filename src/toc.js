export default function(chapters) {
  const chapter = document.createElement('div')
  chapter.innerText = 'the navigation is ugly: to browse between experiments go in main.js line 25 and change <code>toc()</code> by <code>chapter_00()</code> if you are unhappy about it, submit a pull request'


  const section = document.createElement('section')
  section.append(chapter)

  return section
}
