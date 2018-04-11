function linkedListLoop(head) {
    let slowNode = head
    let fastNode = head.next

    // Increment nodes until you are in the loop
    while (slowNode !== fastNode){
        slowNode = slowNode.next
        fastNode = fastNode.next.next
    }

    // Calculate beginning of loop
    slowNode = head
    while (slowNode !== fastNode) {
        slowNode = slowNode.next
        fastNode = fastNode.next
    }

    // Return node that starts loop
    return slowNode
}
