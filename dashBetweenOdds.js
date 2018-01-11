// Write a function insertDash(num) that will insert dashes ('-')
// between each two odd numbers in num. For example: if num is 454793
// the output should be 4547-9-3. Don't count zero as an odd number.

// Solution #1
function insertDash(num) {
  num = num.toString().split('');
  console.log(num);
  var newArr = [num[0]];
  for (var i=1; i<num.length; i++) {
    if (num[i-1] % 2 !== 0 && num[i] % 2 !== 0) {
      newArr.push('-');
    }
    newArr.push(num[i]);
  }
  return newArr.join('');
}

console.log(insertDash(1544879)); // '1-54487-9'


// Solution #2
function insertDash(num) {
  return num.toString().split('').reduce(function(acc,curr){
      if (acc.slice(-1)===undefined){
      acc.push(curr);
      }
      else if (acc.slice(-1)% 2===0){
        acc.push(curr);
      }
      else if (acc.slice(-1)  % 2===0 && curr % 2===0){
        acc.push(curr);
        }
        else if(acc.slice(-1) % 2 !==0 && curr % 2 !==0){
        acc.push("-"+ curr);
        }
    else{acc.push(curr);}
        return acc;
  },[]).join('');
}



// Solution #3




// Solution #4
function insertDash(num) {
   return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}
