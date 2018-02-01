package program

type Node struct {
	Name     string
	Children []*Node
}

func (n *Node) DepthFirstSearch(array []string) []string {
	array = append(array, n.Name)
	for i := 0; i < len(n.Children); i++ {
		array = n.Children[i].DepthFirstSearch(array)
	}
	return array
}
