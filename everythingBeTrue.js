/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.
*/



const arr1 = [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}]; // should return true
const arr2 = [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}]; // should return false;
const arr3 = [{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}]; // should return true;

const val1 = "sex";
const val2 = "sex";
const val3 = "onBoat";

function truthCheck(collection, pre) {
  let checker = [];
  collection.forEach(obj => {
    if (!(Object.keys(obj).includes(pre)) || !obj[pre]) {
      checker.push('false');
    } else {
      checker.push('true');
    }
  });
  return checker.includes('false') ? false : true;
}

// console.log(truthCheck(arr1, val1));
console.log(truthCheck(arr2, val2));