/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
function Interval (start, end) {
  this.start = start
  this.end = end
}

const merge = intervals => {
  intervals = intervals.sort((a, b) => a.start - b.start)
  for (let i = 1; i < intervals.length; i++) {
    let prev = intervals[i - 1]
    let curr = intervals[i]
    if (curr.start <= prev.end) {
      intervals.splice(
        i - 1,
        2,
        new Interval(
          Math.min(prev.start, curr.start),
          Math.max(prev.end, curr.end)
        )
      )
      i -= 1
    }
  }
  return intervals
}

module.exports = { merge }
