// time: O(n-ish) space: O(n)
function findGrantsCap(grantsArray, newBudget) {
  // evenly distribute budget to start
  let cap = newBudget / grantsArray.length

  // if we settle into the same cap we have reached a local minimum
  let newCap
  while (cap !== newCap) {
    cap = newCap ? newCap : cap

    // find grants that are under current cap
    let underBudgetGrants = grantsArray.filter(el => el < cap)

    // find surplus at given cap
    let surplus = newBudget - underBudgetGrants.reduce((a, b) => a + b, 0)

    // set new cap to redistribute surplus among grants over the cap
    newCap = surplus / (grantsArray.length - underBudgetGrants.length)
  }

  return newCap
}
