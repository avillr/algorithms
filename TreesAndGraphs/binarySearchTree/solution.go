package program

type BST struct {
	value int

	left  *BST
	right *BST
}

func (tree *BST) Insert(value int) *BST {
	if value >= tree.value {
		if tree.right == nil {
			tree.right = &BST{value: value}
		} else {
			tree.right.Insert(value)
		}
	} else if tree.left == nil {
		tree.left = &BST{value: value}
	} else {
		tree.left.Insert(value)
	}
	return tree
}

func (tree *BST) Contains(value int) bool {
	if value == tree.value {
		return true
	} else if value > tree.value && tree.right != nil {
		return tree.right.Contains(value)
	} else if value < tree.value && tree.left != nil {
		return tree.left.Contains(value)
	} else {
		return false
	}
}

func (tree *BST) getMinValue() int {
	if tree.left == nil {
		return tree.value
	} else {
		return tree.left.getMinValue()
	}
}

func (tree *BST) Remove(value int) *BST {
	tree.remove(value, nil)
	return tree
}

func (tree *BST) remove(value int, parent *BST) *BST {
	if value < tree.value {
		if tree.left != nil {
			tree.left.remove(value, tree)
		}
	} else if value > tree.value {
		if tree.right != nil {
			tree.right.remove(value, tree)
		}
	} else if tree.left != nil && tree.right != nil {
		tree.value = tree.right.getMinValue()
		tree.right.remove(value, tree)
	} else if parent == nil {
		if tree.left != nil {
			tree.value = tree.left.value
			tree.right = tree.left.right
			tree.left = tree.left.left
		} else if tree.right != nil {
			tree.value = tree.right.value
			tree.right = tree.right.right
			tree.left = tree.right.left
		} else {
			tree.value = 0
		}
	} else if parent.left == tree {
		if tree.left != nil {
			parent.left = tree.left
		} else {
			parent.left = tree.right
		}
	} else if parent.right == tree {
		if tree.left != nil {
			parent.right = tree.left
		} else {
			parent.right = tree.right
		}
	}
}
