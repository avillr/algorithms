const deleteNode = (head, key) => {
  if (head.data === key) {
    return head.next
  }

  let currentNode = head
  while (currentNode.next) {
    if (currentNode.next.data === key) {
      currentNode.next = currentNode.next.next
    } else {
      currentNode = currentNode.next
    }
  }

  return head
}

module.exports = { deleteNode }
