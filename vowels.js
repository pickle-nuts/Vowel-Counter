/*
- Create a function that recognises the vowels in a string
- Create a counter that counts the numbers of vowels in a string
*/

function findVowels(str){
  var count = 0;
  for(i = 0; i < str.length; i++){
    if(str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u"){
      count++
    }
  }
  return count++;
}

console.log(findVowels("asia development academy"))