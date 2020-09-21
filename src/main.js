import config from './config.js'
import toc from './toc.js'

import chapter_00 from './00_audiocontext.js'
import chapter_01 from './01_oscillator.js'
import chapter_02 from './02_oscillator_start_time.js'
import chapter_03 from './03_theremin.js'
import chapter_04 from './04_random_synth.js'
import chapter_05 from './05_gain.js'
import chapter_06 from './06_lfo.js'
// missing parts
import chapter_09 from './09_sample_rate.js'
import chapter_10 from './10_buffer.js'
import chapter_11 from './11_decode_audio.js'
import chapter_12 from './12_microphone.js'
import chapter_13 from './13_effects.js'


const title = document.createElement('h1')
title.innerHTML = 'webaudio examples'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  app.append(title)
  app.append(toc())
})
