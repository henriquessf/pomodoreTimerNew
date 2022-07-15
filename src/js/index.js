import Events from './events.js'
import Timer from './timer.js'
import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonMoreTime,
  buttonLessTime,
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
} from './elements.js'

const timer = Timer({
  secondsDisplay,
  minutesDisplay
})
import Controls from './controls.js'

const controls = Controls({
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
})

Events({ timer, controls })
