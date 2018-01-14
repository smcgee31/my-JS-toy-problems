/* 
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/



function convertHTML(str) {
  const specials = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&apos;',
    '"': '&quot;',
  };
  let keys = Object.keys(specials);
  let newStr = '';

  for (const char of str) {
    if (keys.includes(char)) {
      newStr = str.replace(char, specials[char]);
      str = newStr;
    }
  }

  return newStr === '' ? str : newStr;
}

console.log(convertHTML("abc"));