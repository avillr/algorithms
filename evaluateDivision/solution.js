const calcEquation = function(equations, values, queries) {
  const output = []
  const graph = buildGraph({ equations, values })
  for (let i = 0; i < queries.length; i++) {
    const [numerator, denominator] = queries[i]

    const value = depthFirstSearch({
      graph,
      numerator,
      denominator,
      product: 1,
      visited: new Set()
    })

    if (value) {
      output.push(value)
      //update graph to prevent duplicate calculation
      graph.get(numerator).set(denominator, value)
      graph.get(denominator).set(numerator, 1 / value)
    } else {
      output.push(-1)
    }
  }
  return output
}

const buildGraph = ({ equations, values }) => {
  const adjacenyList = new Map()

  for (let i = 0; i < equations.length; i++) {
    const [numerator, denominator] = equations[i]
    const quotient = values[i]

    if (!adjacenyList[numerator]) {
      adjacenyList.set(numerator, new Map())
    }
    if (!adjacenyList[denominator]) {
      adjacenyList.set(denominator, new Map())
    }

    adjacenyList.get(numerator).set(denominator, quotient)
    adjacenyList.get(denominator).set(numerator, 1 / quotient)
  }

  return adjacenyList
}

const depthFirstSearch = ({
  graph,
  numerator,
  denominator,
  product,
  visited
}) => {
  if (!graph.has(numerator)) return null
  if (numerator === denominator) return 1

  // mark current node as visited
  visited.add(numerator)

  const neighbors = [...graph.get(numerator).keys()]

  for (let i = 0; i < neighbors.length; i++) {
    const nextDenominator = neighbors[i]
    const currentProduct = product * graph.get(numerator).get(nextDenominator)

    if (nextDenominator === denominator) {
      return currentProduct
    }

    if (!visited.has(nextDenominator)) {
      const value = depthFirstSearch({
        graph,
        numerator: nextDenominator,
        denominator,
        product: currentProduct,
        visited
      })
      if (value) {
        return value
      }
    }

    return null
  }
}
