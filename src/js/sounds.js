export default function Sounds() {
  const bgBonfire = new Audio(
    'https://github.com/henriquessf/pomodoreTimerNew/blob/main/public/audio/Lareira.mp3?raw=true'
  )
  const bgWood = new Audio(
    'https://github.com/henriquessf/pomodoreTimerNew/blob/main/public/audio/Floresta.mp3?raw=true'
  )
  const bgRain = new Audio(
    'https://github.com/henriquessf/pomodoreTimerNew/blob/main/public/audio/Chuva.mp3?raw=true'
  )
  const bgCoffee = new Audio(
    'https://github.com/henriquessf/pomodoreTimerNew/blob/main/public/audio/Cafeteria.mp3?raw=true'
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
