export default function Sounds() {
  const bgBonfire = new Audio(
    'https://github.com/henriquessf/pomodoreTimerNew/blob/main/public/audio/Lareira.wav?raw=true'
  )
  const bgWood = new Audio(
    'https://github.com/henriquessf/pomodoreTimerNew/blob/main/public/audio/Floresta.wav?raw=true'
  )
  const bgRain = new Audio(
    'https://github.com/henriquessf/pomodoreTimerNew/blob/main/public/audio/Chuva.wav?raw=true'
  )
  // const bgCoffee = new Audio('../../public/audio/Cafeteria.wav')
  const bgCoffee = new Audio(
    'https://github.com/henriquessf/pomodoreTimerNew/blob/main/public/audio/Cafeteria.wav?raw=true'
  )

  bgBonfire.loop
  bgWood.loop
  bgRain.loop
  bgCoffee.loop

  return {
    bgBonfire,
    bgWood,
    bgRain,
    bgCoffee
  }
}
