const removeDuplicates = head => {
  const visited = {}

  let currentNode = head
  visited[currentNode.data] = true

  while (currentNode.next) {
    if (visited[currentNode.next.data]) {
      currentNode.next = currentNode.next.next
    } else {
      visited[currentNode.next.data] = true
      currentNode = currentNode.next
    }
  }
  return head
}

module.exports = { removeDuplicates }
