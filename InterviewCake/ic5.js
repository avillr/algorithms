// Write a function that, given:

// an amount of money
// an array of coin denominations
// computes the number of ways to make the amount of money with coins of
// the available denominations.

// Example: for amount = 4 (4¢) and denominations = [1,2,3] (1¢, 2¢ and 3¢),
// your program would output 4—the number of ways to make 4¢ with those denominations:

// 1. 1¢, 1¢, 1¢, 1¢
// 2. 1¢, 1¢, 2¢
// 3. 1¢, 3¢
// 4. 2¢, 2¢

let am = 4;
let den = [1, 2, 3];

function changeWays (amount, denominations, index) {
  index = (typeof index !== 'undefined') ? index : 0;

  if (amount === 0) return 1;
  if (amount < 0) return 0;
  if (index === denominations.length) return 0;

  let currentCoin = denominations[index];
  let numPossibilities = 0;
  while (amount >= 0) {
        numPossibilities += changeWays(amount,
            denominations, index + 1);
        amount -= currentCoin;
    }
  return numPossibilities;
}

console.log(changeWays(am, den));
