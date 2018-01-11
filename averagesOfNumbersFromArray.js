// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.
// Example:
// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null, your method should return an empty array.


// Solution #1 - mine
const averages = (numbers) => {
  let arr = [];
  if (numbers === null) return arr;
  if (numbers.length <= 1) return arr;
  for (let i = 0; i < numbers.length - 1; i++) {
    arr.push((numbers[i] + numbers[i + 1])/2);
  }
  return arr;
};


// Solution #2 -- similar to above but more concise
function averages2(numbers) {
  var final = [];
  if (numbers) {
    for (var i=0; i<numbers.length-1; i++) {
      final.push((numbers[i] + numbers[i+1]) / 2);
    }
  }
  return final;
}


// Solution #3 - uses .map()  --  I couldn't figure out how...
// basically if numbers is 'truthy' then 'map' through the array adding each number to the next number at i+1 index then div by 2. The .slice is so that them map doesn't go too far and get NaN for the last result.
function averages(numbers) {
  return numbers ? numbers.slice(0,-1).map((x, i) => (x+numbers[i+1])/2) : [];
}