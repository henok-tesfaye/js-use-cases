const getTotalSumCalculatorBetweenIndex = arr => {
  const sumArray = []
  sumArray[-1] = 0

  for (let i = 0; i < arr.length; i++) {
    sumArray[i] = sumArray[i - 1] + arr[i]
  }

  return (i, j) => {
    return sumArray[j] - sumArray[i - 1]
  }
}

// [-1, 4, 3, -4, 8]
const findContigiousMaxSum = arr => {
  const getTotalSum = getTotalSumCalculatorBetweenIndex(arr)
  let maxSum = arr[0]

  for(let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0

      sum += getTotalSum(i, j)

      maxSum = Math.max(sum, maxSum)
    }
  }

  return maxSum
}

const input = [-2, 5, -3, 7, -1]
const result = findContigiousMaxSum(input)

console.log({ result })

const getTotalSum = getTotalSumCalculatorBetweenIndex([2, 5, -3, 7, -1])
// console.log(getTotalSum(0, 4))