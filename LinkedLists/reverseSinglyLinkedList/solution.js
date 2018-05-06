const reverse = head => {
  if (!head || !head.next) {
    return head
  }

  let currentHead = head.next
  let reversedHead = head
  reversedHead.next = null

  while (currentHead) {
    let temp = currentHead
    currentHead = currentHead.next

    temp.next = reversedHead
    reversedHead = temp
  }
  return reversedHead
}

module.exports = { reverse }
