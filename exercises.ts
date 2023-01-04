function oddNumbers(l: number, r: number) {
  const array: [] = [];
  for (var i = l; i <= r; i++) {
    array.push(i as never);
  }
  const filterArray = array.filter((n) => n % 2);
  return filterArray;
}

oddNumbers(1, 2);

function compareTriplets(a: Number[], b: Number[]) {
  let score = [0, 0];

  for (let i = 0; i < a.length; i++)
    a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : "";
  return score;
}

compareTriplets([4, 2], [4, 4]);

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

aVeryBigSum([1, 2, 3]);

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

diagonalDifference([
  [1, 2, 3],
  [2, 3, 4],
  [4, 4, 4],
  [5, 5, 5],
]);
