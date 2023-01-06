function pageCountBook(n: number, p: number): number {
  let numberOfPagesToTurn = [0, 0];
  let firstPageCounter = 0;
  let lastPageCounter = 0;
  if (n % 2 !== 0) {
    lastPageCounter -= 1;
  }
  if (p % 2 !== 0) {
    firstPageCounter -= 1;
  }
  if (p === 1) {
    return 0;
  }
  if (n % 2 !== 0 && p + 1 === n) {
    return 0;
  }
  if (n - 1 === p) {
    return 1;
  }
  for (var i = 0; i < n; i++) {
    if (i % 2 === 0 && i !== p) {
      firstPageCounter += 1;
    }
    if (i === p) {
      numberOfPagesToTurn[0] += firstPageCounter;
    }
  }

  for (var j = n + 1; j > p - 1; j--) {
    if (j % 2 === 0 && j !== p) {
      lastPageCounter += 1;
    }
    if (j === p) {
      numberOfPagesToTurn[1] += lastPageCounter;
    }
  }
  return Math.min(...numberOfPagesToTurn);
}

// pageCountBook(6, 2);

function countingValleys(steps: number, path: string): number {
  // Write your code here
  let numberOfValleysTraversed = 0;
  let up = 0;
  let down = 0;
  let counter = 0;

  for (var i = 0; i < steps; i++) {
    if (path[i].includes("U")) {
      up += 1;
      counter += 1;
      if (counter === 0) {
        numberOfValleysTraversed += 1;
      }
    }
    if (path[i].includes("D")) {
      down -= 1;
      counter -= 1;
    }
  }
  return numberOfValleysTraversed;
}

// countingValleys(8, "UDDDUDUU");

function getMoneySpent(keyboards, drives, b) {
  const sortedKeyboards = keyboards.sort();
  const sortedDrives = drives.sort();
  const filterKeyboards = sortedKeyboards.filter((e) => e < b);
  const filterDrives = sortedDrives.filter((e) => e < b);
  if (filterKeyboards.length === 0 || filterDrives.length === 0) {
    return -1;
  }
  let maximumBudget = 0;
  for (var i = filterDrives.length - 1; i >= 0; i--) {
    for (var j = filterKeyboards.length - 1; j >= 0; j--) {
      if (
        filterDrives[i] + filterKeyboards[j] <= b &&
        filterDrives[i] + filterKeyboards[j] > maximumBudget
      ) {
        maximumBudget = filterDrives[i] + filterKeyboards[j];
      }
    }
  }
  return maximumBudget;
}

// getMoneySpent([3,1],[5,2,8],10)
