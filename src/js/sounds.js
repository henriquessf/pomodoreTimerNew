export default function Sounds() {
  const bgBonfire = new Audio('../../public/audio/Lareira.wav')
  const bgWood = new Audio('../../public/audio/Floresta.wav')
  const bgRain = new Audio('../../public/audio/Chuva.wav')
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
