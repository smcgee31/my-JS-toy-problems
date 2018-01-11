// given a string of words, return the length of the shortest word(s).

const str = 'bitcoin take over the world maybe who knows perhaps'; // <-- should return 3


// Solution #1 - mine
const findShort = (str) => {
  const arr = str.split(' ');
  let shortest = arr[0].length;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest) {
      shortest = arr[i].length;
    }
  }
  return shortest;
}



// Solution #2
function findShort2(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}


// Solution #3
const findShort3 = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;



// Solution #4
const findShort4 = (s) =>  s.split(' ').reduce((r,c) => c.length < r ? c.length : r, s.length);


