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
  buttonPause,
  buttonDarkTheme,
  buttonWhiteTheme,
  theme,
  rainWait,
  coffeeWait,
  bonfireWait,
  woodWait
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
    buttonWoodOff.classList.add('hide')
    buttonRainOff.classList.add('hide')
    buttonCoffeeOff.classList.add('hide')

    woodWait.classList.remove('hide')
    rainWait.classList.remove('hide')
    coffeeWait.classList.remove('hide')

    buttonBonfireOn.classList.remove('hide')

    sounds.bgBonfire.play()
  })
  buttonBonfireOn.addEventListener('click', () => {
    buttonBonfireOff.classList.remove('hide')
    buttonWoodOff.classList.remove('hide')
    buttonRainOff.classList.remove('hide')
    buttonCoffeeOff.classList.remove('hide')

    woodWait.classList.add('hide')
    rainWait.classList.add('hide')
    coffeeWait.classList.add('hide')

    buttonBonfireOn.classList.add('hide')
    sounds.bgBonfire.pause()
  })
  buttonWoodOff.addEventListener('click', () => {
    buttonWoodOff.classList.add('hide')
    buttonBonfireOff.classList.add('hide')
    buttonRainOff.classList.add('hide')
    buttonCoffeeOff.classList.add('hide')

    bonfireWait.classList.remove('hide')
    rainWait.classList.remove('hide')
    coffeeWait.classList.remove('hide')

    buttonWoodOn.classList.remove('hide')

    sounds.bgWood.play()
  })
  buttonWoodOn.addEventListener('click', () => {
    buttonWoodOff.classList.remove('hide')
    buttonBonfireOff.classList.remove('hide')
    buttonRainOff.classList.remove('hide')
    buttonCoffeeOff.classList.remove('hide')

    bonfireWait.classList.add('hide')
    rainWait.classList.add('hide')
    coffeeWait.classList.add('hide')

    buttonWoodOn.classList.add('hide')

    sounds.bgWood.pause()
  })
  buttonCoffeeOff.addEventListener('click', () => {
    buttonWoodOff.classList.add('hide')
    buttonBonfireOff.classList.add('hide')
    buttonRainOff.classList.add('hide')
    buttonCoffeeOff.classList.add('hide')

    bonfireWait.classList.remove('hide')
    rainWait.classList.remove('hide')
    woodWait.classList.remove('hide')

    buttonCoffeeOn.classList.remove('hide')

    sounds.bgCoffee.play()
  })
  buttonCoffeeOn.addEventListener('click', () => {
    buttonWoodOff.classList.remove('hide')
    buttonBonfireOff.classList.remove('hide')
    buttonRainOff.classList.remove('hide')
    buttonCoffeeOff.classList.remove('hide')

    bonfireWait.classList.add('hide')
    rainWait.classList.add('hide')
    woodWait.classList.add('hide')

    buttonCoffeeOn.classList.add('hide')

    sounds.bgCoffee.pause()
  })
  buttonRainOff.addEventListener('click', () => {
    buttonRainOff.classList.add('hide')
    buttonBonfireOff.classList.add('hide')
    buttonWoodOff.classList.add('hide')
    buttonCoffeeOff.classList.add('hide')

    bonfireWait.classList.remove('hide')
    coffeeWait.classList.remove('hide')
    woodWait.classList.remove('hide')

    buttonRainOn.classList.remove('hide')
    sounds.bgRain.play()
  })
  buttonRainOn.addEventListener('click', () => {
    buttonRainOff.classList.remove('hide')
    buttonBonfireOff.classList.remove('hide')
    buttonWoodOff.classList.remove('hide')
    buttonCoffeeOff.classList.remove('hide')

    bonfireWait.classList.add('hide')
    coffeeWait.classList.add('hide')
    woodWait.classList.add('hide')
    buttonRainOn.classList.add('hide')
    sounds.bgRain.pause()
  })
  buttonDarkTheme.addEventListener('click', () => {
    theme.classList.remove('white-theme')
    theme.classList.add('dark-theme')
    buttonWhiteTheme.classList.remove('hide')
    buttonDarkTheme.classList.add('hide')
  })
  buttonWhiteTheme.addEventListener('click', () => {
    theme.classList.remove('dark-theme')
    theme.classList.add('white-theme')
    buttonDarkTheme.classList.remove('hide')
    buttonWhiteTheme.classList.add('hide')
  })
}
