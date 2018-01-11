// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant 
// cluster) of an English word, moves it to the end of 
// the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.


function translatePigLatin(str) {
  if ((/^[aeiouAEIOU]/).test(str[0])) {
    return `${ str }way`;
  }

  let str1 = str.replace(/^[^aeiou]+/, '');
  let str2 = str.slice(0, (str.length - str1.length));  

  return `${ str1 }${ str2 }ay`;
}

translatePigLatin("consonant");
translatePigLatin("algorithm");
translatePigLatin("schaffer");