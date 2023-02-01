function MaxValueOld(shares) {
  // Your code here:
  let abs = 0
  for (let i = 0; i < shares.length; i++) {
    let max = 0
    for (let j = i; j < shares.length; j++) {
      shares[j] > shares[i] && shares[j] > max
        ? max = shares[j] : null
    }
    const diff = max - shares[i]
    diff > abs ? abs = diff : null
  }

  return abs
}

function MaxValue(arr) {
  let minPrecio = arr[0]
  let maxDif = -Infinity

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - minPrecio > maxDif) maxDif = arr[i] - minPrecio
    if (arr[i] < minPrecio) minPrecio = arr[i]
  }

  return maxDif
}

module.exports = MaxValue
