/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (n, rectangles) {
  const xIntervals = rectangles.map(([x1, y1, x2, y2]) => [x1, x2]);
  const yIntervals = rectangles.map(([x1, y1, x2, y2]) => [y1, y2]);

  const mergeIntervals = (intervals) => {
    if (intervals.length === 0) return []
    intervals.sort((a, b) => a[0] - b[0])
    let stack = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
      let [s, e] = stack.pop()
      let [curs, cure] = intervals[i]
      if (e > curs) {
        if (e > cure) {
          stack.push([s, e])
        } else {
          stack.push([s, cure])
        }
      } else {
        stack.push([s, e])
        stack.push([curs, cure])
      }
    }
    return stack
  }

  const mergedX = mergeIntervals(xIntervals);
  const mergedY = mergeIntervals(yIntervals);

  return mergedX.length >= 3 || mergedY.length >= 3
};