//Given
// [
//     {startTime: 0,  endTime: 1},
//     {startTime: 3,  endTime: 5},
//     {startTime: 4,  endTime: 8},
//     {startTime: 10, endTime: 12},
//     {startTime: 9,  endTime: 10},
// ]
//Return
// [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]

// Write a function mergeRanges() that takes an array of meeting time ranges
//and returns an array of condensed ranges.

let arr ;
arr =
  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
  ];

//arr =   [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}];

// arr =
//   [
//     {startTime: 1, endTime: 10},
//     {startTime: 2, endTime: 6},
//     {startTime: 3, endTime: 5},
//     {startTime: 7, endTime: 9},
//   ];

function mergeRanges (arr) {
  let output = [];
  arr.sort((a, b) => a.startTime > b.startTime);
  output.push(arr[0]);
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].startTime <= output[j].endTime) {
      if (arr[i].endTime > output[j].endTime) {
        output[j].endTime = arr[i].endTime;
      }
    }
    else {
      output.push(arr[i]);
      j++;
    }
  }
  return output;
}

console.log(mergeRanges(arr));
