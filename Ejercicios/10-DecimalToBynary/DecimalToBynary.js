function DecimalToBynary(num) {
  // Your code here:
  let binary = ''
  // mientras sea mayor que cero
  while (num) {
    binary = num % 2 + binary
    num = Math.floor(num / 2)
  }
  // devolvemos el string BINARY
  return binary
}

module.exports = DecimalToBynary
