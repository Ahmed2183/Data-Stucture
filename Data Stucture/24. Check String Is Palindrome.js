/* Check String is Palindrome */
function palindrome(getWord) {
  let start = 0;
  let end = getWord.length - 1;
  let result = true;
  while(end > start){
    if(getWord[start] != getWord[end]) {
        result = false;
    }
    start++;
    end--;
  }
  return result;
}

let word = "level";
// let word = "abc";
console.log(palindrome(word));