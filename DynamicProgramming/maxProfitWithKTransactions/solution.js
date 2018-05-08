const maxProfitWithKTransactions = (prices, k) => {
  if (prices.length < 2 || k < 1) return 0

  // initialize transactions x days profit matrix as all 0s
  const profits = []
  for (let i = 0; i <= k; i++) {
    profits.push(new Array(prices.length).fill(0))
  }

  // build up transaction x days profit matric
  for (let transactions = 1; transactions <= k; transactions++) {
    for (let day = 1; day < prices.length; day++) {
      let maxProfitWithSale = -Infinity
      for (let i = day - 1; i >= 0; i--) {
        let profitWithSale =
          prices[day] - prices[i] + profits[transactions - 1][i]
        if (profitWithSale > maxProfitWithSale) {
          maxProfitWithSale = profitWithSale
        }
      }
      profits[transactions][day] = Math.max(
        profits[transactions][day - 1],
        maxProfitWithSale
      )
    }
  }
  return profits[k][prices.length - 1]
}

module.exports = { maxProfitWithKTransactions }
