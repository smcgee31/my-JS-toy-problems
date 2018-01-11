// Three candidates take part in a TV show.
// In order to decide who will take part in the final game and probably become rich, 
// they have to roll the Wheel of Fortune! The Wheel of Fortune is divided into 20 
// sections, each with a number from 5 to 100 (only mulitples of 5). Each candidate can 
// roll the wheel once or twice and sum up the score of each roll. The winner one that 
// is closest to 100 (while still being lower or equal to 100). In case of a tie, the 
// candidate that rolled the wheel first wins.
//
// You receive the information about each candidate as an array of objects: each object 
// should have a name and a scores array with the candidate roll values.
//
// Your solution should return the name of the winner or false if there is no winner (all scored more than 100).

var c1 = { name: "Bob", scores: [10, 65] };
var c2 = { name: "Bill", scores: [90, 5] };
var c3 = { name: "Charlie", scores: [40, 55] };
winner([c1, c2, c3]); // Returns "Bill"


function winner(contestants) {
	
}


//OPTION #2


//OPTION #3
