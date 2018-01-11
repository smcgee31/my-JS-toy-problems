// Find the number of divisors of a positive integer n.

var num = 125;

function getDivisorsCnt(n){
  var div = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      div++;
    }
  }
  return div;
}

console.log(getDivisorsCnt(num));

// lets make it shorter
function getDivisorsCnt(n){
  for (var d = 0, i = 1; i <= n; i++) {
    if (n % i === 0) d++;
  }
  return d;
}
