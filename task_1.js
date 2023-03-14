const input =
  "“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)";
const findLongestWords = (input) => {
  let longestWord = "";
  let vowel = -1;
  const arr = input.replace(/[^a-z\s]/gi, "").split(" ");
  console.log(arr);
  arr.forEach((e) => {
    if (e.length > longestWord.length) {
      longestWord = e;
      vowel = longestWord.match(/[aeiouAEIOU]/g).length || 0;
    } else if (e.length == longestWord.length) {
      const eVowel = e.match(/[aeiouAEIOU]/g).length;
      if (eVowel > vowel) {
        vowel = eVowel;
        longestWord = e;
      }
    }
  });
  return longestWord;
};
console.log(findLongestWords(input));
