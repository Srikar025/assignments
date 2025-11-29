/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// function isAnagram(str1, str2) {

// }

function isAnagram(str1, str2) {
  // convert both strings to lowercase and

  // if lengths differ, they cannot be anagrams
  if (str1.length !== str2.length) return false;

  // sort letters and compare
  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}
let x=isAnagram("silet" , "listen");
if(x){

  console.log("is anagram")
}
else{
  console.log("not an anagram")
}

module.exports = isAnagram;

module.exports = isAnagram;
