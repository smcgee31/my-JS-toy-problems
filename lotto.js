// Lotto function
// Write a function that returns a list of 6 randomly generated numbers
// and then checks your list of 6 numbers against the generated list to see if you won.

// my first answer
function lotto(arr) {
  var sixArray = [];

  for (var i = 0; i < 45 ; i++) {
    sixArray.push(Math.floor((Math.random() * 45) + 1));

    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === sixArray[i]) {
        console.log("matched ", arr[j]);
      }
    }
  }
    console.log("The Lotto numbers are: ", sixArray);
    console.log("Your lotto picks are: ", yourPicks);
}
var yourPicks = [32,12,40,37,9,22];
lotto(yourPicks);





// Cole's answer:
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function lotto(arr){
  var newArr = [];
  for(var i = 0; i < 6; i++){
    newArr.push(getRandomInt(1,10));
    if(arr[i] === newArr[i]){
      console.log("Match at " + i);
    }else{
      console.log("Mismatch at " + i);
    }
  }
  return newArr;
}

console.log(lotto([1,1,2,3,5,8]));






// Jason's answer:
var yourGuess = [1, 5, 3, 3, 5, 4];

function lotto(arr){
 var randomNum = [];
 for (var i = 0; i < 6; i++) {
   var selector = Math.floor(Math.random() * 10);
   randomNum.push(selector);
 }
 if(arr === randomNum){
   alert("Congrats. You Win! . . .cheater. . .");
   }
 else {
   alert("Sorry. You lose . . .");
   }
}

lotto(yourGuess);
