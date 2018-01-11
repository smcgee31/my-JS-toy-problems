// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters
// is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str){
    str.findIndex(function(a, b) {

        if (a === b) {
            return true;
        }

  });
}
isIsogram('Dermatoglyphics');


//OPTION #2
const isIsogram2 = (str) => {
  str.findIndex( (a, b) => {
    if (a === b) {return true;}
  });
}



//OPTION #3
