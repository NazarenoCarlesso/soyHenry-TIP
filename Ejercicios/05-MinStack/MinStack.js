class Node {
  // Your code here:
  constructor(value) {
    this.next = null
    this.value = value
    this.min = null
  }
}

class MinStack {
  // Your code here:
  constructor() {
    this.top = null
  }
}

MinStack.prototype.push = function (value) {
  if (!this.top) {
    this.top = new Node(value)
    this.top.min = this.top.value
  } else {
    const newTop = new Node(value)
    value < this.top.min ? (newTop.min = value) : newTop.min = this.top.min
    newTop.next = this.top
    this.top = newTop
  }
}

MinStack.prototype.pop = function () {
  let value
  this.top ? (value = this.top.value) : null
  this.top ? (this.top = this.top.next) : null
  return value
}

MinStack.prototype.peek = function () {
  return this.top.value
}

MinStack.prototype.min = function () {
  return this.top.min
}

module.exports = {
  Node,
  MinStack
}
