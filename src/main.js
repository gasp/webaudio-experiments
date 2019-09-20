import config from './config.js'

const title = document.createElement('h1')
title.innerHTML = 'hello'

const audio = document.createElement('audio')
audio.controls = true

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  app.append(title)
})
