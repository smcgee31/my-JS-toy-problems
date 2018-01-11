// You and your friends want to play undercover agents. In order to exchange 
// your secret messages, you've come up with the following system: you take 
// the word, cut it in half, and place the first half behind the latter. If 
// the word has an uneven number of characters, you leave the middle at its 
// previous place:
//reverseByCenter("agent") == "nteag" // center character is e

//reverseByCenter("secret")  == "retsec" // no center character

  // console.log(str1.slice(str1.length/2) + str1.slice(0, str1.length/2));
  // console.log(str2.slice(str2.length/2+1) + str2.charAt(str2.length/2) + str2.slice(0, str2.length/2));

// Solution #1 - mine using .slice() - ugly long ternary
function reverseByCenter(str){
  return (str.length % 2 === 0) ? str.slice(str.length/2) + str.slice(0, str.length/2) : str.slice(str.length/2+1) + str.charAt(str.length/2) + str.slice(0, str.length/2);
}
// same as above but better if it's not all on one line...
function reverseByCenter(str){
  return (str.length % 2 === 0) 
    ? str.slice(str.length/2) + str.slice(0, str.length/2) 
    : str.slice(str.length/2+1) + str.charAt(str.length/2) + str.slice(0, str.length/2);
}
// works exactly the same if you use substr()
function reverseByCenter(str){
  return (str.length % 2 === 0) 
    ? str.substr(str.length/2) + str.substr(0, str.length/2) 
    : str.substr(str.length/2+1) + str.charAt(str.length/2) + str.substr(0, str.length/2);
}
// AND exactly the same if you use substring()
function reverseByCenter(str){
  return (str.length % 2 === 0) 
    ? str.substring(str.length/2) + str.substring(0, str.length/2) 
    : str.substring(str.length/2+1) + str.charAt(str.length/2) + str.substring(0, str.length/2);
}
// it could be a one-liner I suppose...
const reverseByCenter = str => (str.length % 2 === 0) ? str.slice(str.length/2) + str.slice(0, str.length/2) : str.slice(str.length/2+1) + str.charAt(str.length/2) + str.slice(0, str.length/2);