/*
Find the smallest common multiple of the provided parameters that can be evenly 
divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical 
order.
e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly 
divisible by all numbers between 1 and 3.
*/


// Solution #1 - my original solution - this works but FFC says it doesn't pass the last test... BS

function smallestCommons(arr) {
  console.time('asdf');
  arr.sort((a, b) => b - a);
  const newArr = [];
  for (let i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);    
  }
  const max = newArr.reduce((a, b) => a * b);
  for (let i = newArr[newArr.length-1]; i <= max; i++) {
    if(newArr.every((e) => i % e === 0)) {
      console.timeEnd('asdf');
      return i;
    }
    
  }
}


// console.log(smallestCommons([1, 5]));   // should return 60.
// console.log(smallestCommons([5, 1]));   // should return 60.
// console.log(smallestCommons([1, 13]));  // should return 360360.
console.log(smallestCommons2([23, 18])); // should return 6056820.



// Solution #2 - after studying the forum help answers about the Euclidean Algorithm
// studied and vaguely get it but not really.

function smallestCommons2(arr) {
  arr.sort((a, b) => b - a);
  const numbersArr = [];
  for (let i = arr[0]; i >= arr[1]; i--) {
    numbersArr.push(i);    
  }
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  }
  let lowCommMult = numbersArr[0];
  for (let i = 1; i < numbersArr.length; i++) {
    let GCD = gcd(lowCommMult, numbersArr[i]);
    lowCommMult = (lowCommMult * numbersArr[i]) / GCD;
  }
  return lowCommMult;
}






