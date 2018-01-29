let arr = [1, 7, 3, 4];
//would return [84, 12, 28, 21]

function mygetProductsOfAllIntsExceptAtIndex (arr) {
  let output = [];
  arr.forEach((val) => {
    output.push(arr.reduce((a, b) => {
      if (a === val) a = 1;
      if (b === val) b = 1;
      return a * b;
    }));
  });
  return output;
}

function getProductsOfAllIntsExceptAtIndex(intArray) {

    if (intArray.length < 2) {
        throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
    }

    var productsOfAllIntsExceptAtIndex = [];

    // for each integer, we find the product of all the integers
    // before it, storing the total product so far each time
    var productSoFar = 1;
    for (var i = 0; i < intArray.length; i++) {
        productsOfAllIntsExceptAtIndex[i] = productSoFar;
        productSoFar *= intArray[i];
    }

    // for each integer, we find the product of all the integers
    // after it. since each index in products already has the
    // product of all the integers before it, now we're storing
    // the total product of all other integers
    productSoFar = 1;
    for (var j = intArray.length - 1; j >= 0; j--) {
        productsOfAllIntsExceptAtIndex[j] *= productSoFar;
        productSoFar *= intArray[j];
    }

    return productsOfAllIntsExceptAtIndex;
}

let a = getProductsOfAllIntsExceptAtIndex(arr);
console.log(a);
