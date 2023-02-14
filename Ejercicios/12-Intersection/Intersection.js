function intersection (arr1, arr2) {
  // Your code here:
  return arr1.filter(n => arr2.includes(n))
}

module.exports = intersection
