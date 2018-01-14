// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.



function spinalCase(str) {
  let newStr = '';
  for (const char of str) {
    if (/[A-Z]/.test(char)) {
      newStr = str.replace(char, ' ' + char);
      str = newStr;
    }
  }

  return str.trim().replace(/[^a-zA-Z]+/g, '-').replace('--', '-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
