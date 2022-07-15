//arquivo contendo as funções do timer

export default function Timer({ secondsDisplay, minutesDisplay }) {
  let timerTimedOut
  let minutes = Number(minutesDisplay.textContent)

  function moreTime() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    minutes = minutes + 5
    return minutes
    // updateDisplay((minutesDisplay.textContent = Number(minutes + 5)), seconds)
  }
  function lessTime() {
    let minutes = Number(minutesDisplay.textContent)
    minutes = minutes - 5
    // updateDisplay((minutesDisplay.textContent = Number(minutes - 5)), seconds)
    if (minutes <= 5) {
      minutesDisplay.textContent = '00'
    }
    return minutes
  }
  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }
  function countdown() {
    timerTimedOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
      updateDisplay(minutes, 0)
      if (isFinished) {
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))
      countdown()
    }, 1000)
  }
  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes //definindo um valor padrão aos parametros, caso não receba nada
    seconds = seconds === undefined ? 0 : seconds

    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  function pause() {
    clearTimeout(timerTimedOut)
  }
  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimedOut)
  }
  return {
    countdown,
    updateDisplay,
    pause,
    moreTime,
    lessTime,
    reset,
    updateMinutes
  }
}
