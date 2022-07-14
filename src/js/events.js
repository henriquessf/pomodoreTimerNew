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
  buttonWhiteTheme
} from './elements.js' //importando as variáveis dos elementos css do arquivo element.js

export default function Events({ timer, sounds, controls }) {
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
    timer.updateDisplay(minutes, 0)
  })
  buttonMoreTime.addEventListener('click', () => {
    timer.moreTime()
  })
  buttonLessTime.addEventListener('click', () => {
    timer.lessTime()
  })
  buttonBonfireOff.addEventListener('click', () => {
    controls.bonfireSoundOn()
    sounds.bgBonfire.play()
  })
  buttonBonfireOn.addEventListener('click', () => {
    controls.bonfireSoundOff()
    sounds.bgBonfire.pause()
  })
  buttonWoodOff.addEventListener('click', () => {
    controls.woodSoundOn()
    sounds.bgWood.play()
  })
  buttonWoodOn.addEventListener('click', () => {
    controls.woodSoundOff()
    sounds.bgWood.pause()
  })
  buttonCoffeeOff.addEventListener('click', () => {
    controls.coffeeSoundOn()
    sounds.bgCoffee.play()
  })
  buttonCoffeeOn.addEventListener('click', () => {
    controls.coffeeSoundOff()
    sounds.bgCoffee.pause()
  })
  buttonRainOff.addEventListener('click', () => {
    controls.rainSoundOn()
    sounds.bgRain.play()
  })
  buttonRainOn.addEventListener('click', () => {
    controls.rainSoundOff()
    sounds.bgRain.pause()
  })
  buttonDarkTheme.addEventListener('click', () => {
    controls.darkTheme()
  })
  buttonWhiteTheme.addEventListener('click', () => {
    controls.whiteTheme()
  })
}
