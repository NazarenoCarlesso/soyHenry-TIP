function SolveGraph(graph, start, end, reg = []) {
  // Your code here:
  if (reg.includes(start)) return false
  reg.push(start)
  if (start === end) return true
  return graph[start].map(n => SolveGraph(graph, n, end, reg)).some(e => e)
}

module.exports = SolveGraph
