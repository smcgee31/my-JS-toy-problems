// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Solution #1
function disemvowel(str) {
  var newStr = str.replace(/[aeiouAEIOU]/g, '');
  return newStr;
}


// Solution #2 - shorten the above code
function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}

// Solution #3 - added the i after g to mean ignore case and removed the uppercase vowels in the regex
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
