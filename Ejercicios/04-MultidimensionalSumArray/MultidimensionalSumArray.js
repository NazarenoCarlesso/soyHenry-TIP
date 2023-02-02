const { arrayBuffer } = require("stream/consumers")

function mdArray(arr) {
  // Your code here:
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) sum += mdArraySum(arr[i])
    else sum += arr[i]
  }

  return sum
}

function mdArraySum(arr) {
  // Your code here:
  if (!Array.isArray(arr)) return arr
  let sum = 0
  arr.forEach(a => sum += mdArraySum(a))
  return sum
}

function mdArrayReduce(arr) {
  // Your code here:
  return arr.reduce((acc, current) => acc + (Array.isArray(current) ? mdArraySum(current) : current), 0)
}


module.exports = mdArraySum
