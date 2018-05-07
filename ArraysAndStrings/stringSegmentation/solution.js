const stringSegmentation = (str, dict) => {
  const solved = new Set([])
  return stringSegmentationRec(str, dict, solved)
}

const stringSegmentationRec = (str, dict, solved) => {
  for (let i = 0; i <= str.length; i++) {
    let first = str.substring(0, i)
    if (dict.has(first)) {
      let second = str.substring(i)
      if (second.length === 0) {
        return true
      }
      if (dict.has(second)) {
        return true
      }
      if (!solved.has(second)) {
        if (stringSegmentationRec(second, dict, solved)) {
          return true
        }
        solved.add(second)
      }
    }
  }
  return false
}
module.exports = { stringSegmentation }
