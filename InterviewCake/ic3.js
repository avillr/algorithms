//Given an array of integers, find the highest product you can get from three of the integers.
let highestProductOfThree = -Infinity;
let arr = [-10, -10, 1, 3, 2]; //300


function arrayOfInts (arr) {
  arr.sort();
  let set = [];
  for (let i = 0; i < arr.length; i++) {
    if (set.length < 3) set.push(arr[i]);

  }
  return arr;
}
console.log(arrayOfInts(arr));
