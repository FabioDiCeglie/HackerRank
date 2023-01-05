function birthdayCakeCandles(candles: number[]): number {
  // Write your code here
  const findMax = Math.max(...candles);
  const filterArrayWithMaximumHeightOfCandles = candles.filter(
    (e) => e === findMax
  );
  return filterArrayWithMaximumHeightOfCandles.length;
}

// birthdayCakeCandles([3, 2, 1, 3]);

function timeConversion(s: string): string {
  // Write your code here
  let hours = s.slice(0, 2);
  let hoursInt = Number(hours);
  if (s.includes("PM")) {
    if (hours !== "12") {
      hoursInt += 12;
      hours = `${hoursInt}`;
    }
  }
  if (s.includes("AM")) {
    if (hours === "12") {
      hours = "00";
    }
  }
  return `${hours}:${s.slice(3, 8)}`;
}

// timeConversion("07:05:45PM");

function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  // Write your code here
  let numberOfApplesFall = 0;
  let numberOfOrangesFall = 0;
  for (var i = 0; i < apples.length; i++) {
    const sumDistance = apples[i] + a;
    if (sumDistance >= s && sumDistance <= t) {
      numberOfApplesFall += 1;
    }
  }
  for (var i = 0; i < oranges.length; i++) {
    const sumDistance = oranges[i] + b;
    if (sumDistance >= s && sumDistance <= t) {
      numberOfOrangesFall += 1;
    }
  }

  console.log(numberOfApplesFall);
  console.log(numberOfOrangesFall);
}

// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  // Write your code here
  if (x2 > x1 && v2 > v1) {
    return "NO";
  }
  if (v2 === v1) {
    return "NO";
  }
  while (x1 !== x2) {
    console.log(x1, x2);
    x1 += v1;
    x2 += v2;
    if (x1 > x2) {
      return "NO";
    }
  }
  return "YES";
}

// kangaroo(0, 3, 4, 2);

function breakingRecords(scores: number[]): number[] {
  // Write your code here
  let numberOfGames = scores.length;
  let highestScores: Array<number> = [];
  let lowestScores: Array<number> = [];

  let highestScore = scores[0];
  let lowestScore = scores[0];
  for (var i = 0; i < numberOfGames; i++) {
    if (scores[i] > highestScore) {
      highestScores.push(scores[i]);
      highestScore = scores[i];
    }
    if (scores[i] < lowestScore) {
      lowestScores.push(scores[i]);
      lowestScore = scores[i];
    }
  }
  return [highestScores.length, lowestScores.length];
}

// breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);

function birthday(s: number[], d: number, m: number): number {
  // let square = s[0];
  let calculateSquare = 0;
  let counter = 0;
  let month = m;
  for (var i = 0; i < s.length; i++) {
    const arrayNew = s.slice(counter, month);
    counter += 1;
    month += 1;
    const solution = arrayNew.reduce((a, b) => a + b, 0);
    if (solution === d) {
      calculateSquare += 1;
    }
    // if(s.length === 1 && s[i] === d){
    //    return findSquares += 1
    // }
    // if(square + s[i] === d){
    //     findSquares += 1
    //     square = s[i]
    // }
    // square = s[i]
  }

  return calculateSquare;
}

birthday([1, 1, 1, 1, 1, 1], 3, 2);
