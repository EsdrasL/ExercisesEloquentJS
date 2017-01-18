//Chapter 4 - The Sum of a Range
function range(start, end, step = 1) {
  var array = [];
  if(step < 0) {
    for(var i = start; i >= end; i+=step) {
      array.push(i);
    }
  } else {
    for(var i = start; i <= end; i+=step) {
      array.push(i);
    }
  }
  return array;
}

function sum(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1,10)));
