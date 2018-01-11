// Write a function that will mimic the "likes" on Facebook...
// if the re is one, two or three likes then list out the likes,
// but if there are more than three then list out the first two followed by
// "... and (number) others like this" -- see the test code at the bottom.

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return names[0] + " likes this";
  }
  if (names.length === 2) {
    return names[0] + " and " +  names[1] + " like this";
  }
  if (names.length === 3) {
    return names[0] + ", " +  names[1] + " and " + names[2] + " like this";
  }
  if (names.length > 3) {
    return names[0] + ", " +  names[1] + " and " + (names.length - 2) + " others like this";  }
}




//solution #2
function likes(names) {
  switch(names.length){
    case 0:
      return "no one likes this";
    case 1:
      return names[0] + " likes this";
    case 2:
      return names[0] + " and " + names[1] + " like this";
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    default:
      return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
}



//solution #2a
function likes(names) {
    switch (names.length){
        case 1: return names[0] + ' likes this';
        case 2: return names[0] + ' and ' + names[1] + ' like this';
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
        default: return names.length > 3 ? names[0] + ', ' + names[1] + ' and ' + (names.length - 2).toString() + ' others like this' : 'no one likes this';
    }
}



//solution #3
function likes(names) {
    var result = {
        0: ["no one likes this"],
        1: [ names[0], " likes this"],
        2: [ names[0], " and ", names[1] , " like this"],
        3: [ names[0], ", ", names[1],  " and ", names[2], " like this"],
        4: [ names[0], ", ", names[1], " and ", (names.length - 2) , " others like this"]
    };
    return names.length < 4 ? result[names.length].join("") : result[4].join("");
}




// The following was the test code to check the answer from CodeWars.com
// describe('example tests', function() {
//   it('should return correct text', function() {
//     Test.assertEquals(likes([]), 'no one likes this');
//     Test.assertEquals(likes(['Peter']), 'Peter likes this');
//     Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
//     Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
//     Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
//   });
// });
