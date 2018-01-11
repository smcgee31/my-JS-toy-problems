// Take a string of places and return a new string with the places separated by
// a comma, and the last one has the word 'and'

var places = `Mississippi Utah Colorado Washington`;
// return 'Mississippi, Utah, Colorado, and Washington'

function formatPlaces(str) {
  var places = places.split(' ');
  var newStr = '';
  for (var i = 0; i < places.length; i++) {
    if (i === places.length -2) {
      newStr += places[i] + ', and ';
    } else if (i === places.length -1) {
      newStr += places[i];
    } else {
      newStr += places[i] + ', ';
    }
  }
  return newStr;
}
