function HasBalancedBrackets(string) {
  // Your code here:
  let valid = true
  const op = ['(', '[', '{']
  const end = [')', ']', '}']
  const stack = []

  string.split('').forEach(b => {
    if (['(', '[', '{'].includes(b)) stack.push(b)
    if ([')', ']', '}'].includes(b)) {
      if (op.indexOf(stack.pop()) !== end.indexOf(b)) valid = false
    }
  })
  if (stack.length > 0) valid = false

  return valid
}

module.exports = HasBalancedBrackets
