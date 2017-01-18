//Chapter 4 - A List
function arrayToList(array) {
  var listHead = {};
  var pointer = listHead;
  for (var i = 0; i < array.length; i++) {
    pointer.value = array[i];
    if(i == array.length - 1) {
      pointer.rest = null;
    } else {
      pointer.rest = {};
      pointer = pointer.rest;
    }
  }
  return listHead;
}

function listToArray(list) {
  var array = [];
  while(list != null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function prepend(element, list) {
  var newHead = {
    value: element,
    rest: list
  };

  return newHead;
}

function nth(list, number) {
  var count = 0;
  while(list != null) {
    if(number == count) {
      return list.value;
    }
    count++;
    list = list.rest;
  }
  return undefined;
}

function nthRecursive(list, number) {
  if(number == 0) {
    return list.value;
  } else {
    return nthRecursive(list.rest, number - 1);
  }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nthRecursive(arrayToList([10, 20, 30]), 2));
