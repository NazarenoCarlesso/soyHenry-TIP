function BinaryToDecimal(binary) {
  // Your code here:
  let sum = 0
  for (let i = 1; i <= binary.length; i++) {
    sum += binary[binary.length - i] * Math.pow(2, i - 1)
  }
  return sum
}

module.exports = BinaryToDecimal
