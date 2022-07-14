//arquivo contendo todos os eventos, neste caso, só há o de click dos botões
import Sounds from './sounds.js'
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
  secondsDisplay,
  buttonWoodOn,
  buttonBonfireOn,
  buttonCoffeeOn,
  buttonRainOn,
  buttonPause
} from './elements.js' //importando as variáveis dos elementos css do arquivo element.js

const sounds = Sounds()

export default function Events({ timer }) {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    timer.countdown()
  })

  buttonPause.addEventListener('click', () => {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    timer.pause()
  })
  buttonStop.addEventListener('click', () => {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
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
    buttonBonfireOff.classList.add('hide')
    buttonBonfireOn.classList.remove('hide')
    sounds.bgBonfire.play()
  })
  buttonBonfireOn.addEventListener('click', () => {
    buttonBonfireOff.classList.remove('hide')
    buttonBonfireOn.classList.add('hide')
    sounds.bgBonfire.pause()
  })
  buttonWoodOff.addEventListener('click', () => {
    buttonWoodOff.classList.add('hide')
    buttonWoodOn.classList.remove('hide')
    sounds.bgWood.play()
  })
  buttonWoodOn.addEventListener('click', () => {
    buttonWoodOff.classList.remove('hide')
    buttonWoodOn.classList.add('hide')
    sounds.bgWood.pause()
  })
  buttonCoffeeOff.addEventListener('click', () => {
    buttonCoffeeOff.classList.add('hide')
    buttonCoffeeOn.classList.remove('hide')
    sounds.bgCoffee.play()
  })
  buttonCoffeeOn.addEventListener('click', () => {
    buttonCoffeeOff.classList.remove('hide')
    buttonCoffeeOn.classList.add('hide')
    sounds.bgCoffee.pause()
  })
  buttonRainOff.addEventListener('click', () => {
    buttonRainOff.classList.add('hide')
    buttonRainOn.classList.remove('hide')
    sounds.bgRain.play()
  })
  buttonRainOn.addEventListener('click', () => {
    buttonRainOff.classList.remove('hide')
    buttonRainOn.classList.add('hide')
    sounds.bgRain.pause()
  })
}
