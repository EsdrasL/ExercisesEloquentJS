//Chapter 5 - Mother-child age difference
const ANCESTRY_FILE = require('./ancestry.js');
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(
  average(
    ancestry.filter(function(person) {
      return byName[person.mother];
    }).map(function(person) {
      return person.born - byName[person.mother].born;
    })
  )
);
