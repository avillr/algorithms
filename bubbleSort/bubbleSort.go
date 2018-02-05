package program

func BubbleSort(array []int) []int {
	sorted := false
	for !sorted {
		sorted = true
		for i := 1; i < len(array); i++ {
			if array[i] < array[i-1] {
				temp := array[i]
				array[i] = array[i-1]
				array[i-1] = temp
				sorted = false
			}
		}
	}
	return array
}
