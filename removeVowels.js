// Remove vowels from a string
// unless the vowel occurs on the first or last letter


var str = "supercalifragilisticexpialidocious";

function remVowels(str) {
    var vowels = [a,e,i,o,u];
    str.split('');
    str.forEach(function() {

    });
}




// Cole's solution #1

var vowels = "aeiouAEIOU".split("");

function cleanUpFor(str){
  var arr = str.split("");
  newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(i === 0 || i === arr.length -1 || vowels.indexOf(arr[i]) === -1){
      newArr.push(arr[i]);
    }
  }
  return newArr.join("");
}

console.log(cleanUpFor("testing"));
console.log(cleanUpFor("american psycho"));
console.log(cleanUpFor("La Dia Es Bonita"));





// Cole's solution #2

function cleanUp(str){
  var arr = str.split("");
  var newArr = [];
  arr.forEach(function(letter, index){
    if(index === 0 || index === arr.length -1 || vowels.indexOf(letter) === -1){
      newArr.push(letter);
    }
  });
  return newArr.join("");
}


console.log(cleanUp("testing"));
console.log(cleanUp("american psycho"));
console.log(cleanUp("La Dia Es Bonita"));





// Jason's solution

function removeVowels(str){
 var vowels = ["a", "e", "i", "o", "u"];
 var newStr = str.split("");
 for (var i = newStr.length - 2; i > 0; i--){
   if(vowels.indexOf(newStr[i]) !== -1){
     newStr.splice(i, 1);
   }
 }
 var solution = newStr.join("");
 return solution;
}

console.log(removeVowels("hello"));
console.log(removeVowels("apple"));
console.log(removeVowels("bananas"));
console.log(removeVowels("pikachu"));
