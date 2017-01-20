//Chapter 6 - Sequence Interface
function logFive(sequence) {
  var length = Math.min(sequence.length, 5);
  for (var i = 0; i < length; i++) {
    console.log(sequence.next());
  }
}

function ArraySeq(array) {
  this.array = array;
  this.pointer = 0;
}
ArraySeq.prototype.next = function() {
  var next = this.array[this.pointer];
  this.pointer++;
  return next;
};
Object.defineProperty(ArraySeq.prototype, "length", {
  get: function() { return this.array.length; }
});

function RangeSeq(from, to) {
  this.from = from;
  this.to = to;
  this.pointer = 0;
}
RangeSeq.prototype.next = function() {
  var next = this.from + this.pointer;
  this.pointer++;
  return next;
};
Object.defineProperty(RangeSeq.prototype, "length", {
  get: function() { return this.to - this.from; }
});

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));
