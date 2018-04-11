package program

type LinkedList struct {
	value int
	next  *LinkedList
}

func LinkedListLoop(head *LinkedList) *LinkedList {
	slowNode := head.next
	fastNode := head.next.next

	for slowNode != fastNode {
		slowNode = slowNode.next
		fastNode = fastNode.next.next
	}

	slowNode = head

	for slowNode != fastNode {
		slowNode = slowNode.next
		fastNode = fastNode.next
	}

	return slowNode
}
