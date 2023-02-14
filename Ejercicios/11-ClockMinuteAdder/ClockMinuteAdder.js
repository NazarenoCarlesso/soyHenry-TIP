function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:
  // desestructuracion del tiempo
  let [hours, minutes] = time.split(':')
  minutes = Number(minutes) + minutesToAdd
  // mientras los minutos sean mas de 60
  while (minutes >= 60) {
    hours = Number(hours) + 1
    minutes -= 60
  }
  // mientras las horas sean mas de 12
  while (hours > 12) hours -= 12
  // formato de 2 digitos
  return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`
}

module.exports = clockMinuteAdder
