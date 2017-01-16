//Chapter 2 - Chess Board
var size = 8;
for(var i = 0; i < size; i++) {
  var str = '';

  for(var j = 0; j < size; j++) {
    if((i+j) % 2 == 0) {
      str += ' ';
    } else {
      str += '#';
    }
  }
  console.log(str);
}
