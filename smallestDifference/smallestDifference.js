function smallestDifference(arrayOne, arrayTwo) {
  arrayOne = arrayOne.sort((a, b) => a - b)
  arrayTwo = arrayTwo.sort((a, b) => a - b)
  let idxOne = 0,
    idxTwo = 0,
    smallestDiff = Infinity,
    currentDiff = Infinity,
    smallestPair = []
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let numOne = arrayOne[idxOne]
    let numTwo = arrayTwo[idxTwo]
    if (numOne < numTwo) {
      currentDiff = numTwo - numOne
      idxOne++
    } else if (numTwo < numOne) {
      currentDiff = numOne - numTwo
      idxTwo++
    } else {
      return [numOne, numTwo]
    }
    if (smallestDiff > currentDiff){
      smallestDiff = currentDiff
      smallestPair = [numOne, numTwo]
    }
  }
  return smallestPair
}

console.log(smallestDifference([0, 20], [-13, 2, 5, 12, 19]))
