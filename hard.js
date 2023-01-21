// Figure it out the anagrams first
// Count how many different phrases you can make from the words
// words && phrases

const getSorted = (text) => text.split("").sort().join("");
const makeAnagramsCounter = (a, b) => {
  let object1 = {};
  a.forEach((element) => {
    const sortedWord = getSorted(element);
    const keys = Object.keys(object1);

    if (keys.includes(sortedWord)) {
      object1[sortedWord] = [...object1[sortedWord], element];
    } else {
      object1[sortedWord] = [element];
    }
  });

  console.log(object1);
};

makeAnagramsCounter(
  ["below", "elbow", "stab", "in", "ni", "the", "bats", "big", "sleep"],
  ["below elbow", "elbow in the below", "the big sleep"]
);

// result 4 8 1

// below : ["below", "elbow"]
// elbow : ["elbow", "below"]
// in : ["in", "ni"]
// ni ; ["in", "ni"]
// the : ["the"]
// big: ['big']
// sleep : ['sleep']
