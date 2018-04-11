package program

func BinarySearch(array []int, target int) int {
	min, mid, max := 0, 1, len(array)-1
	for min <= max {
		mid = (max + min) / 2
		if array[mid] == target {
			return mid
		} else if array[mid] > target {
			max = mid - 1
		} else {
			min = mid + 1
		}
	}
	return -1
}
