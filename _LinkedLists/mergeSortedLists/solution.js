/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => {
  if (lists === null) return null

  // delete all empty lists
  for (let i = 0; i < lists.length; ) {
    if (lists[i]) {
      i++
    } else {
      lists.splice(i, 1)
    }
  }

  if (lists.length === 0) return null

  let mergedList = null
  let minNodeIndex = -1

  // continue until array of lists is 0 length
  while (lists.length > 0) {
    let minNode = { val: Infinity }
    // find smallest list head
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].val <= minNode.val) {
        minNode = lists[i]
        minNodeIndex = i
      }
    }

    // add said head to new list
    if (mergedList === null) {
      mergedList = new ListNode()
      mergedList.val = minNode.val
    } else {
      let currentNode = mergedList
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = new ListNode()
      currentNode.next.val = minNode.val
    }

    // shorten list that head was taken from
    // if list is of 0 length remove from array
    if (lists[minNodeIndex].next !== null) {
      lists[minNodeIndex] = lists[minNodeIndex].next
    } else {
      lists.splice(minNodeIndex, 1)
    }
  }

  return mergedList
}
