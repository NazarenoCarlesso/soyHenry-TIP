function HasBalancedBrackets(string) {
  // Your code here:
  let valid = true
  const op = ['(', '[', '{']
  const end = [')', ']', '}']
  const stack = []

  string.split('').forEach(b => {
    if (op.includes(b)) stack.push(b)
    if (end.includes(b)) {
      if (op.indexOf(stack.pop()) !== end.indexOf(b)) valid = false
    }
  })
  if (stack.length) valid = false

  return valid
}

module.exports = HasBalancedBrackets
