function isPalindrome(word) {
  //One letter word
  if (word.length === 1) return true
  //Stop index for if even or odd number length word
  stopIndex = Math.floor(word.length/2)
  //Loop through
  for (let i = 0, j=word.length-1; i<= stopIndex; i++, j--){
    if (i === stopIndex) return true;
    if (word[i] !== word[j]) return false;
  }

}

/* 
  Add your pseudocode here:

*/

/*
  Add written explanation of your solution here:
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
