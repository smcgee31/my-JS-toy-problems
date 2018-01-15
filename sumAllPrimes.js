/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having 
only two divisors, one and itself. For example, 2 is a prime number 
because it's only divisible by one and two.
The provided number may not be a prime.
*/

function primeFinder(num){
  for(let i = 2; i < num; i++){
    if(num % i === 0 && i !== num){
      return false
    }
  }
  return true
}

function sumPrimes(num) {
  let primeArray = [];
  for (let i = 2; i <= num; i++) {
    if (primeFinder(i)) {
      primeArray.push(i);
    }
  }
  
  return primeArray.reduce((a,b) => a+b);
}

console.log(sumPrimes(10));  // 17
console.log(sumPrimes(977));  // 73156
