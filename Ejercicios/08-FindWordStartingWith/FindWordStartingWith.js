function FindWordStartingWith(book, query) {
  const regex = new RegExp(`^${query}`)
  // Your code here:
  book = book.text.toLowerCase()
  let lastIndex = 0
  let indexes = []

  book.split(' ').filter(w => regex.test(w)).forEach(w => {
    indexes.push(book.indexOf(w, lastIndex))
    lastIndex = book.indexOf(w, lastIndex)
    lastIndex++
  })
  // return book.split(' ').filter(w => regex.test(w)).map(w => book.indexOf(w))
  return indexes
}

module.exports = FindWordStartingWith
