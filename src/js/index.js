import Events from './events.js'
import Timer from './timer.js'
import { minutesDisplay, secondsDisplay } from './elements.js'

const timer = Timer({
  secondsDisplay,
  minutesDisplay
})

Events({ timer })
