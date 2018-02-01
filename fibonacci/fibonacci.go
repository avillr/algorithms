package program

func GetNthFib(n int) int {
	prevprev := 0
	prev := 1
	for i := 2; i < n; i++ {
		current := prev + prevprev
		prevprev = prev
		prev = current
	}
	if n > 1 {
		return prev
	} else {
		return prevprev
	}
}
