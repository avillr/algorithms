package program

import (
	"math"
	"sort"
)

func SmallestDifference(array1, array2 []int) []int {
	sort.Ints(array1)
	sort.Ints(array2)
	idxOne, idxTwo := 0, 0
	smallestDiff, currentDiff := math.MaxInt32, math.MaxInt32
	smallestPair := []int{}
	for idxOne < len(array1) && idxTwo < len(array2) {
		numOne, numTwo := array1[idxOne], array2[idxTwo]
		if numOne < numTwo {
			currentDiff = numTwo - numOne
			idxOne++
		} else if numTwo < numOne {
			currentDiff = numOne - numTwo
			idxTwo++
		} else {
			return []int{numOne, numTwo}
		}
		if smallestDiff > currentDiff {
			smallestDiff = currentDiff
			smallestPair = []int{numOne, numTwo}
		}
	}
	return smallestPair
}
