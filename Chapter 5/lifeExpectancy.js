//Chapter 5 - Historical Life Expectancy
const ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, group) {
  var obj = {};
  array.forEach(function(element) {
    var century = group(element);
    if(!(century in obj)) {
      obj[century] = [];
    }
    obj[century].push(element);
  });
  return obj;
}

var grouped = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for(var century in grouped) {
  var ages = grouped[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}
