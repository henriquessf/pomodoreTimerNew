//arquivo contendo todos os eventos, neste caso, só há o de click dos botões

import {
  buttonPlay,
  buttonStop,
  buttonMoreTime,
  buttonLessTime,
  buttonWoodOff,
  buttonBonfireOff,
  buttonRainOff,
  buttonCoffeeOff,
  minutesDisplay,
  buttonWoodOn,
  buttonBonfireOn,
  buttonCoffeeOn,
  buttonRainOn,
  buttonPause,
  buttonDarkTheme,
  buttonWhiteTheme,
  bonfireSoundVolume,
  coffeeSoundVolume,
  rainSoundVolume,
  woodSoundVolume,
  woodAudio,
  rainAudio,
  coffeeAudio,
  bonfireAudio
} from './elements.js' //importando as variáveis dos elementos css do arquivo element.js

export default function Events({ timer, controls }) {
  let minutes = Number(minutesDisplay.textContent)

  buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
  })

  buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.pause()
  })
  buttonStop.addEventListener('click', () => {
    controls.stop()
    timer.pause()
    timer.reset()
  })
  buttonMoreTime.addEventListener('click', () => {
    // timer.moreTime()
    let newMinutes = timer.moreTime()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
  buttonLessTime.addEventListener('click', () => {
    // timer.lessTime()
    let newMinutes = timer.lessTime()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
  buttonWoodOff.addEventListener('click', () => {
    controls.woodSoundOn()
    // sounds.bgWood.play()
    woodAudio.play()
  })
  woodAudio.addEventListener(
    'ended',
    () => {
      woodAudio.currentTime = 0
      woodAudio.play()
    },
    false
  )
  buttonWoodOn.addEventListener('click', () => {
    controls.woodSoundOff()
    // sounds.bgWood.pause()
    woodAudio.pause()
  })
  buttonBonfireOff.addEventListener('click', () => {
    controls.bonfireSoundOn()
    // sounds.bgBonfire.play()
    bonfireAudio.play()
  })
  bonfireAudio.addEventListener(
    'ended',
    () => {
      bonfireAudio.currentTime = 0
      bonfireAudio.play()
    },
    false
  )
  buttonBonfireOn.addEventListener('click', () => {
    controls.bonfireSoundOff()
    // sounds.bgBonfire.pause()
    bonfireAudio.pause()
  })

  buttonCoffeeOff.addEventListener('click', () => {
    controls.coffeeSoundOn()
    // sounds.bgCoffee.play()
    coffeeAudio.play()
  })
  coffeeAudio.addEventListener(
    'ended',
    () => {
      coffeeAudio.currentTime = 0
      coffeeAudio.play()
    },
    false
  )
  buttonCoffeeOn.addEventListener('click', () => {
    controls.coffeeSoundOff()
    // sounds.bgCoffee.pause()
    coffeeAudio.pause()
  })
  buttonRainOff.addEventListener('click', () => {
    controls.rainSoundOn()
    // sounds.bgRain.play()
    rainAudio.play()
  })
  rainAudio.addEventListener(
    'ended',
    () => {
      rainAudio.currentTime = 0
      rainAudio.play()
    },
    false
  )
  buttonRainOn.addEventListener('click', () => {
    controls.rainSoundOff()
    // sounds.bgRain.pause()
    rainAudio.pause()
  })
  buttonDarkTheme.addEventListener('click', () => {
    controls.darkTheme()
  })
  buttonWhiteTheme.addEventListener('click', () => {
    controls.whiteTheme()
  })
  bonfireSoundVolume.addEventListener('change', () => {
    bonfireAudio.bgBonfire.volume = bonfireSoundVolume.value
  })
  coffeeSoundVolume.addEventListener('change', () => {
    coffeeAudio.bgCoffee.volume = coffeeSoundVolume.value
  })
  rainSoundVolume.addEventListener('change', () => {
    rainAudio.volume = rainSoundVolume.value
  })
  woodSoundVolume.addEventListener('change', () => {
    woodAudio.volume = woodSoundVolume.value
  })
}
