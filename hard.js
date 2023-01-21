// Figure it out the anagrams first
// Count how many different phrases you can make from the words
// anagram are 2 words that have similar characters
// I want to create a bucket/array that consist of all the anagrams of that keyword
// for this the perfect data structure of this is an object

const getSorted = (text) => text.split("").sort().join("");
const makeAnagramsCounter = (words, phrases) => {
  let object1 = {};
  words.forEach((element) => {
    const sortedWord = getSorted(element);
    const keys = Object.keys(object1);
    if (keys.includes(sortedWord)) {
      object1[sortedWord] = [...object1[sortedWord], element];
    } else {
      object1[sortedWord] = [element];
    }
  });

  console.log(object1);

  // let counters = [];
  phrases.forEach((phrase) => {
    let counter = 1;
    phrase.split(" ").forEach((word) => {
      const sortedWord = getSorted(word);
      const keys = Object.keys(object1);
      if (keys.includes(sortedWord)) {
        counter *= object1[sortedWord].length;
      }
    });
    // counters.push(counter);
    console.log(counter);
  });

  // return counters;
};

makeAnagramsCounter(
  ["below", "elbow", "stab", "in", "ni", "the", "bats", "big", "sleep"],
  ["below elbow", "elbow in the below", "the big sleep"]
);

// result 4 8 1
