function oddNumbers(l: number, r: number) {
  const array: [] = [];
  for (var i = l; i <= r; i++) {
    array.push(i as never);
  }
  const filterArray = array.filter((n) => n % 2);
  return filterArray;
}

// oddNumbers(1, 2);

function compareTriplets(a: Number[], b: Number[]) {
  let score = [0, 0];

  for (let i = 0; i < a.length; i++)
    a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : "";
  return score;
}

// compareTriplets([4, 2], [4, 4]);

function aVeryBigSum(ar: Array<number>) {
  const totalSum = ar.reduce((a, b) => a + b, 0);
  return totalSum;
}

// ||

// function aVeryBigSums(ar:Array<number>) {
//   var total = 0;
//   for (var i in ar) {
//     total += ar[i];
//   }
//   return total;
// }

// aVeryBigSum([1, 2, 3]);

function diagonalDifference(arr: Array<Array<number>>) {
  // Write your code here
  let countDiagonalLeft = 0;
  let countDiagonalRight = 0;
  let j = 0;
  let k = arr.length - 1;
  for (var i = 0; i < arr.length; i++) {
    countDiagonalRight += arr[i][k];
    k -= 1;
    countDiagonalLeft += arr[i][j];
    j += 1;
  }

  return Math.abs(countDiagonalLeft - countDiagonalRight);
}

// diagonalDifference([
//   [1, 2, 3],
//   [2, 3, 4],
//   [4, 4, 4],
//   [5, 5, 5],
// ]);

function plusMinusNumbers(arr: number[]): void {
  // Write your code here
  let positiveNumbers = arr.filter((e: number) => e > 0);
  let negativeNumbers = arr.filter((e: number) => e < 0);
  let zero = arr.filter((e: number) => e === 0);

  const ratioPositiveNumbers = positiveNumbers.length / arr.length;
  const ratioNegativeNumbers = negativeNumbers.length / arr.length;
  const ratioZero = zero.length / arr.length;

  console.log(ratioPositiveNumbers.toFixed(6));
  console.log(ratioNegativeNumbers.toFixed(6));
  console.log(ratioZero.toFixed(6));
}

// plusMinusNumbers([1, 2, 3]);

function stairCase(n: number): void {
  // Write your code here
  let hash = "#";
  let amountSpace = n - 1;
  for (var i = 0; i < n; i++) {
    console.log(" ".repeat(amountSpace) + hash);
    hash += "#";
    amountSpace -= 1;
  }
}

// stairCase(6);

function miniMaxSum(arr: number[]): void {
  // Write your code here
  const findMinimum = Math.min(...arr);
  const findMaximum = Math.max(...arr);
  console.log(findMinimum, findMaximum);
  const calculateMinimumAmount = arr.reduce((a, b) => a + b) - findMaximum;
  const calculateMaximumAmount = arr.reduce((a, b) => a + b) - findMinimum;
  console.log(calculateMinimumAmount, calculateMaximumAmount);
}

// miniMaxSum([1, 2, 3, 4, 5]);
