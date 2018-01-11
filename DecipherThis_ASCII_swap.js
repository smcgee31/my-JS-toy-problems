// Decipher this!
// You are given several secret messages you need to decipher. Here are the conditions:

// The first letter corresponds to ASCII character code (case sensitive)
// The second letter needs to be switched to the last letter
// The last letter needs to be switched to the second letter
// If it only has one letter, it will be unchanged
// If it only has two letters, you will just need to convert the ASCII character code to a letter
// Keepin' it simple -- there are no special characters

// Example:
// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'


// Solution #1 - mine (I think its concise and readable)
function decipherThis(str) {

  const swap = (str) => {
    let arr = str.split('');
    let x = arr[1];
    arr[1] = arr[arr.length - 1];
    arr[arr.length - 1] = x;
    let newStr = arr.join('');
    return newStr;
  };

  let arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    let str = arr[i];

    str = str.replace(str.match(/\d+/), String.fromCharCode(str.match(/\d+/)));
    arr[i] = swap(str);

  }
  return arr.join(' ');
}


// Solution #2 - uses regex - kinda hard to read and follow
function decipherThis(str) {
  return str.split(" ")
    .map(w =>
      w.replace(/^\d+/, c => String.fromCharCode(c))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ")
}


// Solution #3 - regex - WTF?
const decipherThis=str=>str.replace(/\w+/g,s=>String.fromCharCode(+s.match(/^\d+/))+s.replace(/(\d+)((\w)(\w*)(\w))?/,"$5$4$3"));


// Solution #4 - a little more readable than the last two!
function decipherWord(word) {
    const arr = word.match(/(?:\d+)|(?:[^\d])+/g); 
    const firstLetter = String.fromCharCode(+arr[0]);

    if (!arr[1])             { return firstLetter; } 
    if (arr[1].length === 1) { return firstLetter + arr[1]; }

    return firstLetter + arr[1].slice(-1) + arr[1].slice(1,-1) + arr[1].slice(0,1);   // this line does everything that my swap() function does...nice!
}

function decipherThis(sentence) {
    return sentence
      .split(' ')
      .map(decipherWord)
      .join(' ');
}