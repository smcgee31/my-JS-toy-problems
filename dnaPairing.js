// The DNA strand is missing the pairing element. Take each character, 
// get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to 
// the provided character.

// Return the provided character as the first element in each array.
// For example, for the input GCG, return 
// [["G","C"], ["C","G"],["G","C"]]

// The character and its pair are paired up in an array, and all the
// arrays are grouped into one encapsulating array.


// Solution #1 - use a switch statement in another function to make the pair

function pairElement(str) {

  function makePairs(base1) {
    let base2;
    switch (base1) {
      case 'A': base2 = 'T'; break;
      case 'T': base2 = 'A'; break;
      case 'C': base2 = 'G'; break;
      case 'G': base2 = 'C'; break;
    }

    return base2;
  }

  let arr = str.split('');
  let results = [];
  arr.forEach(base1 => {
    results.push([base1, makePairs(base1)]);
  });

  console.log('========= results =========\n', JSON.stringify(results, null, 2));
  return results;
}

// pairElement("GCG");    // [["G","C"], ["C","G"],["G","C"]]
pairElement("ATCGA")   // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
// pairElement("TTGAG")   // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
// pairElement("CTCTA")   // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]


// Solution #2 - no function or switch... just object literals

function pairElement2(str) {
  const base2 = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C',
  }
  let arr = str.split('');
  let results = [];
  arr.forEach(base1 => {
    results.push([ base1, base2[base1] ]);
  });

  console.log('========= results =========\n', JSON.stringify(results, null, 2));
  return results;
}

// pairElement("GCG");    // [["G","C"], ["C","G"],["G","C"]]
pairElement2("ATCGA")   // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
// pairElement("TTGAG")   // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
// pairElement("CTCTA")   // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]