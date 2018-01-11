// Write a function that returns the factoralization(!) of a given number
// example:
// 5! = 1 * 2 * 3 * 4 * 5 = 120



// Solution #1 - mine
function factorialize(num) {
  if (num === 0 ) {
    return 1;
  }
  var result = num;
  for (var i = num; i > 1; i--) {
    result = result * (i - 1);
  }
  return result;
}

factorialize(5);


// Solution#2 - mine
function factorialize2(num) {
   var result = 1;
   for (var i = 1; i <= num; i++) {
       result *= i;
   }
   return result;
}

factorialize2(5);


// Solution #3 - recursive
function factorialize3(num) {
   if(num <= 1) {
       return num;
   } else {
       return num * factorialize3(num - 1);
   }
}

factorialize3(5);

// Solution #4 - recursive - one liner
const factorialize4 = (num) => { return (num <= 1) ? num : num * factorialize4(num-1) };

factorialize4(5);