// Write a function that will convert a string into title case, 
// given an optional list of exceptions (minor words). The list 
// of minor words will be given as a string with each word separated 
// by a space. Your function should ignore the case of the minor 
// words string -- it should behave in the same way even if the case 
// of the minor word string is changed.
// examples:
// titleCase('a clash of KINGS', 'a an the of');  returns 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In');  returns 'The Wind in the Willows'
// titleCase('the quick brown fox');  returns 'The Quick Brown Fox'


// Solution #1 - mine
const titleCase = (title, minorWords) => {
  if (title === '') {
    return '';
  }
  if (!minorWords) {
    const titleArr = title.split(' ');
    return (titleArr.map(function(a) {
      return (a.substring(0,1).toUpperCase()) + (a.substring(1).toLowerCase());
    })).join(' ');
  }
  const minorWordsArr = minorWords.split(' ');
  const titleArr = title.split(' ');
  const allFirst = titleArr.map(function(a) {
    return (a.substring(0,1).toUpperCase()) + (a.substring(1).toLowerCase());
  });
  for (let i = 1; i < allFirst.length; i++) {
    for (let j = 0; j < minorWordsArr.length; j++) {
        if (allFirst[i].toLowerCase() === minorWordsArr[j].toLowerCase()) {
          allFirst[i] = minorWordsArr[j].toLowerCase();  
        }
    }
  } 
  return allFirst.join(' ');
};


// Solution #2 - Wow, very much the same functionality as mine above but 
// quite a bit less verbose
const titleCase = (title, minorWords) => {
  const minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
  return title.toLowerCase().split(' ').map((v, i) => {
    if(v !== "" && ( (minorWords.indexOf(v) === -1) || i === 0)) {
      v = v.split('');
      v[0] = v[0].toUpperCase();
      v = v.join('');
    }
    return v;
  }).join(' ');
};


// Solution #3 - You don't see this very often... create a new String.prototype method!
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function titleCase(title, minorWords) {  
  var titleAr = title.toLowerCase().split(' '),
      minorWordsAr = minorWords ? minorWords.toLowerCase().split(' ') : [];
    
  return titleAr.map(function(e, i){return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e })
                .join(' ');
}


// Solution #4 - More of creating more prototype methods both with String and Array
String.prototype.getWords = function () {
  return this.match(/\b\w+/gi) || [];
};
String.prototype.ucFirst = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}
Array.prototype.toLowerCase = function () {
  return this.map(function (word) {
    return word.toLowerCase();
  });
};

const titleCase = (title, minorWords) => {
  if (typeof title !== 'string') {
    return '';
  }
  if (typeof minorWords !== 'string') {
    minorWords = '';
  }
  const
    words = title.getWords().toLowerCase(),
    minorWords = minorWords.getWords().toLowerCase();
  
  return words.map( (word, index) => {
    return (minorWords.indexOf(word) >= 0 && index > 0) ? word : word.ucFirst();
  }).join(' ');
};


// Solution #5 - pretty short and sweet using regex
const titleCase = (title, minorWords) => {
  minorWords = (minorWords || "").toLowerCase().split(' ');
  title = title.toLowerCase();
  return title.replace(/(\w)\w*/g, (word, firstChar, index) => {
    if (index === 0 || minorWords.indexOf(word) === -1)
      word = word.replace(firstChar, firstChar.toUpperCase());
    return word;
  });
};