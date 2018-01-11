// Create a function called 'reversedLooper' that when passed an array
//will loop through it backwards and subtract 2 from the last element, 1 from
//the second to last, 0 from to the third to last, add one to the fourth
//to last, add 2 to the fifth to last, etc. until it reaches the front of the array.
//Return the list when you are done
// [1,2,3,4,5,6] should result in [4,4,4,4,4,4]
var array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
function reversedLooper(array) {
    var newArray = [];
    var n = -3;
    for (var i = array.length - 1; i >= 0; i--) {
      n++;
        if (array[i] === array.length) {
            newArray.push(array[i] - 2);
        }
        else if (array[i] === array.length - 1) {
            newArray.push(array[i] - 1);
        }
        else if (array[i] === array.length - 2) {
            newArray.push(array[i]);
        }
        else {
            newArray.push(array[i] + n);
        }
    }
    return newArray;
}

console.log(reversedLooper(array));
