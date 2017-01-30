//Chapter 10 - Month Names
var month = function() {
  var months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
  return {
    name : function(number) { return months[number]; },
    number: function(name) { return months.indexOf(name); }
	};
}();

console.log(month.name(2));
console.log(month.number("November"));
