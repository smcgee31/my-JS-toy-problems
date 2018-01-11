// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the
// opportunity to go for a short walk. The city provides its citizens with a
// Walk Generating App on their phones -- everytime you press the button it sends
// you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You know it takes you one minute to traverse one city block, so create a function
// that will return true if the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your
// starting point. Return false otherwise.

var walk = ['n','s','n','s','n','s','n','s','n','s'];
isValidWalk(walk);

// My solution
function isValidWalk(walk) {
  if ( walk.length !== 10 ) { return false; }
  else {
    walk = walk.toString()
    .replace(/w/g, '-1')
    .replace(/e/g, '1')
    .replace(/n/g, '-2')
    .replace(/s/g, '2')
    .split(',')
    .map(Number);
    return ( walk.reduce( (a,b) => { return a+b; }) === 0 );
  }
}



// Solution #2
function isValidWalk2(walk) {
  var dx = 0;
  var dy = 0;
  var dt = walk.length;

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break;
      case 's': dy++; break;
      case 'w': dx--; break;
      case 'e': dx++; break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}

// Solution #3

function isValidWalk3(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}
