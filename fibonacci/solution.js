function getNthFib(n) {
  let prevprev = 0
  let prev = 1
  for (let i = 2; i < n; i++) {
    let current = prev + prevprev
    prevprev = prev
    prev = current
  }
  return n > 1 ? prev : prevprev
}
