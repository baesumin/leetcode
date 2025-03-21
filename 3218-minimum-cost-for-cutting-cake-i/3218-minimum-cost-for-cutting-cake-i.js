/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function (m, n, horizontalCut, verticalCut) {
  horizontalCut.sort((a, b) => b - a)
  verticalCut.sort((a, b) => b - a)

  let totalCost = 0
  let horizontalPieces = 1
  let verticalPieces = 1
  let hIdx = 0, vIdx = 0

  while (hIdx < horizontalCut.length || vIdx < verticalCut.length) {
    const canCutVertical = vIdx < verticalCut.length
    const canCutHorizontal = hIdx < horizontalCut.length

    if (canCutVertical && (!canCutHorizontal || verticalCut[vIdx] > horizontalCut[hIdx])) {
      totalCost += horizontalPieces * verticalCut[vIdx]
      vIdx++
      verticalPieces++
    } else {
      totalCost += verticalPieces * horizontalCut[hIdx]
      hIdx++
      horizontalPieces++
    }
  }

  return totalCost
};