const intersection = (head1, head2) => {
  if (!head1 || !head2) return null
  // find length of list 1
  let length1 = 1
  let current1 = head1
  while (current1.next) {
    length1 += 1
    current1 = current1.next
  }
  // find length of list 2
  let length2 = 1
  let current2 = head2
  while (current2.next) {
    length2 += 1
    current2 = current2.next
  }
  // advance head of longer list
  if (length1 > length2) {
    while (length1 > length2) {
      head1 = head1.next
      length1 -= 1
    }
  } else if (length2 > length1) {
    while (length2 > length1) {
      head2 = head2.next
      length2 -= 1
    }
  }
  // iterate through both, if match return, else return null
  while (head1) {
    if (head1 === head2) {
      return head1
    }
    head1 = head1.next
    head2 = head2.next
  }

  return null
}

module.exports = { intersection }
