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

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here
  const sortArray = ar.sort();
  let validPairs = 0;

  for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
      const sum = sortArray[i] + sortArray[j];
      if (sum % k == 0) {
        validPairs += 1;
      }
    }
  }
  return validPairs;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);

function migratoryBirds(arr: number[]): number {
  // let maxcount = 0;
  // let element_having_max_freq;
  // for (let i = 0; i < arr.length; i++) {
  //     let count = 0;
  //     for (let j = 0; j < arr.length; j++) {
  //         if (arr[i] == arr[j])
  //             count++;
  //         if (count > maxcount) {
  //         maxcount = count;
  //         element_having_max_freq = arr[i];
  //         }
  //         }
  // }
  // return element_having_max_freq;

  const getCount = (value: number) => arr.filter((e) => e === value).length;
  const count: { [key: string]: number } = {
    "1": getCount(1),
    "2": getCount(2),
    "3": getCount(3),
    "4": getCount(4),
    "5": getCount(5),
  };
  const value = Object.values(count);
  const max_count = Math.max(...value);
  const find = Object.keys(count).find(
    (key: string) => count[key] === max_count
  );
  return Number(find);
}

// migratoryBirds([1, 4, 4, 4, 5, 3]);

function dayOfProgrammer(year: number): string {
  // Write your code here
  let monthsOfTheYear = [31, 28, 31, 30, 31, 30, 31, 31]; // not leap years
  if (year >= 1700 && year <= 1917) {
    // is julianCalendar
    if (year % 4 == 0) {
      monthsOfTheYear = [31, 29, 31, 30, 31, 30, 31, 31];
    }
  }
  if (year === 1918) {
    monthsOfTheYear = [31, 14, 31, 30, 31, 30, 31, 32];
  }
  if (year > 1919) {
    // is gregorianCalendar
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
      monthsOfTheYear = [31, 29, 31, 30, 31, 30, 31, 31];
    }
  }
  const calculateDaysInLeapYear = monthsOfTheYear.reduce((a, b) => a + b);
  let day = 256 - calculateDaysInLeapYear;
  let month =
    monthsOfTheYear.length + 1 < 10
      ? `0${monthsOfTheYear.length + 1}`
      : monthsOfTheYear.length + 1;
  return `${day}.${month}.${year}`;
}

// dayOfProgrammer(2017);

function bonAppetit(bill: number[], k: number, b: number): void {
  // Write your code here
  // const filterBillWithoutAnna = bill.filter((e) => e !== bill[k])
  delete bill[k];
  const whatAnnaHadToPay = bill.reduce((a, b) => a + b) / 2;
  // const billOfBrian = bill.reduce((a,b) => a + b) / 2
  if (b === whatAnnaHadToPay) {
    return console.log("Bon Appetit");
  }
  console.log(b - whatAnnaHadToPay);
}

// bonAppetit([3, 10, 2, 9], 1, 12);

function sockMerchant(n: number, ar: number[]): number {
  // Write your code here
  const sortArray = ar.sort();
  let pairsSocksMatchingColors = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if (sortArray[i] === sortArray[j]) {
        i += 2;
        j += 1;
        pairsSocksMatchingColors += 1;
      }
    }
  }
  return pairsSocksMatchingColors;
}

// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
