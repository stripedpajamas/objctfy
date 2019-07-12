function objctfy (arr = [], labels = []) {
  if (!arr.length) return []
  return arr.map(entry => entry.reduce((acc, val, idx) => {
    const label = labels[idx] || idx
    acc[label] = val
    return acc
  }, {}))
}

module.exports = objctfy
