package program

func Powerset(array []int) [][]int {
	superSet := [][]int{[]int{}}
	for _, el := range array {
		superSetLength := len(superSet)
		for i := 0; i < superSetLength; i++ {
			currSubset := superSet[i]
			newSubset := append(currSubset, el)
			superSet = append(superSet, newSubset)
		}
	}
	return superSet
}
