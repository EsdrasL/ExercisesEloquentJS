//Chapter 3 - Bean Counting
function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, char) {
  var count = 0;
  for(var i = 0; i < string.length; i++) {
    if(string.charAt(i) == char) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
