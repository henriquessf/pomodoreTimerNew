import {
  theme,
  rainWait,
  coffeeWait,
  bonfireWait,
  woodWait
} from './elements.js'

export default function Controls({
  buttonPlay,
  buttonStop,
  buttonWoodOff,
  buttonBonfireOff,
  buttonRainOff,
  buttonCoffeeOff,
  buttonWoodOn,
  buttonBonfireOn,
  buttonCoffeeOn,
  buttonRainOn,
  buttonPause,
  buttonDarkTheme,
  buttonWhiteTheme
}) {
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }
  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  function stop() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  function bonfireSoundOn() {
    buttonBonfireOff.classList.add('hide')
    buttonWoodOff.classList.add('hide')
    buttonRainOff.classList.add('hide')
    buttonCoffeeOff.classList.add('hide')

    woodWait.classList.remove('hide')
    rainWait.classList.remove('hide')
    coffeeWait.classList.remove('hide')

    buttonBonfireOn.classList.remove('hide')
  }
  function bonfireSoundOff() {
    buttonBonfireOff.classList.remove('hide')
    buttonWoodOff.classList.remove('hide')
    buttonRainOff.classList.remove('hide')
    buttonCoffeeOff.classList.remove('hide')

    woodWait.classList.add('hide')
    rainWait.classList.add('hide')
    coffeeWait.classList.add('hide')

    buttonBonfireOn.classList.add('hide')
  }
  function woodSoundOn() {
    buttonWoodOff.classList.add('hide')
    buttonBonfireOff.classList.add('hide')
    buttonRainOff.classList.add('hide')
    buttonCoffeeOff.classList.add('hide')

    bonfireWait.classList.remove('hide')
    rainWait.classList.remove('hide')
    coffeeWait.classList.remove('hide')

    buttonWoodOn.classList.remove('hide')
  }
  function woodSoundOff() {
    buttonWoodOff.classList.remove('hide')
    buttonBonfireOff.classList.remove('hide')
    buttonRainOff.classList.remove('hide')
    buttonCoffeeOff.classList.remove('hide')

    bonfireWait.classList.add('hide')
    rainWait.classList.add('hide')
    coffeeWait.classList.add('hide')

    buttonWoodOn.classList.add('hide')
  }
  function rainSoundOn() {
    buttonRainOff.classList.add('hide')
    buttonBonfireOff.classList.add('hide')
    buttonWoodOff.classList.add('hide')
    buttonCoffeeOff.classList.add('hide')

    bonfireWait.classList.remove('hide')
    coffeeWait.classList.remove('hide')
    woodWait.classList.remove('hide')

    buttonRainOn.classList.remove('hide')
  }

  function rainSoundOff() {
    buttonRainOff.classList.remove('hide')
    buttonBonfireOff.classList.remove('hide')
    buttonWoodOff.classList.remove('hide')
    buttonCoffeeOff.classList.remove('hide')

    bonfireWait.classList.add('hide')
    coffeeWait.classList.add('hide')
    woodWait.classList.add('hide')
    buttonRainOn.classList.add('hide')
  }
  function coffeeSoundOn() {
    buttonWoodOff.classList.add('hide')
    buttonBonfireOff.classList.add('hide')
    buttonRainOff.classList.add('hide')
    buttonCoffeeOff.classList.add('hide')

    bonfireWait.classList.remove('hide')
    rainWait.classList.remove('hide')
    woodWait.classList.remove('hide')

    buttonCoffeeOn.classList.remove('hide')
  }
  function coffeeSoundOff() {
    buttonWoodOff.classList.remove('hide')
    buttonBonfireOff.classList.remove('hide')
    buttonRainOff.classList.remove('hide')
    buttonCoffeeOff.classList.remove('hide')

    bonfireWait.classList.add('hide')
    rainWait.classList.add('hide')
    woodWait.classList.add('hide')

    buttonCoffeeOn.classList.add('hide')
  }
  function darkTheme() {
    theme.classList.remove('white-theme')
    theme.classList.add('dark-theme')
    buttonWhiteTheme.classList.remove('hide')
    buttonDarkTheme.classList.add('hide')
  }
  function whiteTheme() {
    theme.classList.remove('dark-theme')
    theme.classList.add('white-theme')
    buttonDarkTheme.classList.remove('hide')
    buttonWhiteTheme.classList.add('hide')
  }
  return {
    play,
    pause,
    stop,
    bonfireSoundOn,
    bonfireSoundOff,
    woodSoundOn,
    woodSoundOff,
    rainSoundOn,
    rainSoundOff,
    coffeeSoundOn,
    coffeeSoundOff,
    darkTheme,
    whiteTheme
  }
}
