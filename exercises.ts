function oddNumbers(l: number, r: number) {
  const array = [];
  for (var i = l; i <= r; i++) {
    array.push(i as never);
  }
  const filterArray = array.filter((n) => n % 2);
  return filterArray;
}

oddNumbers(1, 2);
