const nthFromLastNode = (head, n) => {
  if (!head || n < 1) {
    return null
  }

  let tail = head
  let nth = head

  // move tail n away from nth
  while (tail && n > 0) {
    tail = tail.next
    n -= 1
  }
  if (n !== 0) return null

  while (tail) {
    tail = tail.next
    nth = nth.next
  }

  return nth
}

module.exports = { nthFromLastNode }
