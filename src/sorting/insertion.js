// [4, 2, 7, 1, 3]

const insertionSort = arr => {
  for(let i = 1; i < arr.length; i++) {
    let tempValue = arr[i]

    for (j = i - 1; j >= 0; j--) {
      if (tempValue >= arr[j]) break

      arr[j + 1] = arr[j]
    }

    arr[j + 1] = tempValue
  }

  return arr
}

const sortedArray = insertionSort([4, 2, 7, 1, 3])
console.log({ sortedArray })