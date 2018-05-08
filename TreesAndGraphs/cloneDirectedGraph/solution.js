class NodeClone {
  constructor (data) {
    this.data = data
    this.neighbors = []
  }
}

const cloneDirectedGraphRec = (node, visited) => {
  if (!node) return null

  // Copy root node and mark as visited
  const copy = new NodeClone(node.data)
  visited[node.data] = copy

  // Clone each neighbor node as they come
  for (let i = 0; i < node.neighbors.length; i++) {
    let neighbor = visited[node.neighbors[i].data]
    if (!neighbor) {
      copy.neighbors.push(cloneDirectedGraphRec(node.neighbors[i], visited))
    } else {
      copy.neighbors.push(neighbor)
    }
  }

  // return root copy
  return copy
}

const cloneDirectedGraph = node => {
  const visited = {}
  return cloneDirectedGraphRec(node, visited)
}

module.exports = { cloneDirectedGraph }
