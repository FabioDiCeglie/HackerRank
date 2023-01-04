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

function aVeryBigSum(ar: Number[]) {
  const totalSum = ar.reduce((a, b) => a + b, 0);
  return totalSum;
}

// ||

// function aVeryBigSums(ar) {
//   var total = 0;
//   for (var i in ar) {
//     total += ar[i];
//   }
//   return total;
// }

aVeryBigSum([1, 2, 3]);
