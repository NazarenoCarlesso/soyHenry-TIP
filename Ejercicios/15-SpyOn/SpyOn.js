function spyOn(fn) {
  // Your code here:
  let callCount = 0
  const calledWith = new Map()
  const returned = new Map()

  const spy = (...args) => {
    const result = fn(...args)
    callCount++
    for (const arg of args) calledWith.set(arg, true)

    returned.set(result, true)

    return result
  }

  spy.getCallCount = () => callCount
  spy.wasCalledWith = (value) => !!calledWith.get(value)
  spy.returned = (value) => !!returned.get(value)

  return spy
}

module.exports = spyOn
