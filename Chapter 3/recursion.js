//Chapter 3 - Recursion
function isEven(number) {
  if(number < 0) {
    number = -number;
  }
  if(number == 0) {
    return true;
  }
  if(number == 1) {
    return false;
  }
  return isEven(number - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
