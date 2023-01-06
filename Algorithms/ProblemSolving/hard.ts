function countingValleys(steps: number, path: string): number {
  // Write your code here
  let numberOfValleysTraversed = 0;
  let up = 0;
  let down = 0;
  let counter = 0;

  for (var i = 0; i < steps; i++) {
    console.log(counter);
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

countingValleys(8, "UDDDUDUU");
