package program

import "sort"

func TwoNumberSum(array []int, target int) []int {
	sort.Ints(array)
	left := 0
	right := len(array) - 1
	for left < right {
		sum := array[left] + array[right]
		if sum == target {
			return []int{array[left], array[right]}
		} else if sum < target {
			left++
		} else {
			right--
		}
	}
	return []int{}
}

func NaiveTwoNumberSum(array []int, target int) []int {
	for i := 0; i < len(array); i++ {
		for j := i + 1; j < len(array); j++ {
			sum := array[i] + array[j]
			if sum == target {
				result := []int{array[i], array[j]}
				sort.Ints(result)
				return result
			}
		}
	}
	return []int{}
}
