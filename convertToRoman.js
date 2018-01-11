// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.


function convertToRoman(num) {
  let thousand, fiveHundred, fourHundred, hundred, fifty, forty, ten, five, four, one, len;
  if (num > 3999) {
    console.log(`Whoa! that's one BIG number - we ain't doing that!`);
    return;
  }
  const arr = num.toString().split('').map(Number);
  length = arr.length;

  thousand = length > 3 ? arr[length-4] : 0;
  hundred = length > 2 ? arr[length-3] : 0;
  ten = length > 1 ? arr[length-2] : 0;
  one = arr[length-1];

  function buildThousands(thousand) {
    let str = '';
    for (let i = 0; i < thousand; i++) {
      str += 'M';
    }
    return str;
  }

  function buildHundreds(hundred) {
    let str = '';
    if (hundred < 4) {
      for (let i = 0; i < hundred; i++) {
        str += 'C';   
      }
      return str;
    }
    if (hundred === 4) {
      str = 'CD';
      return str;
    }
    if (hundred === 5)  {
      str = 'D';
      return str;
    }
    if (hundred > 5 && hundred < 9) {
      str = 'D';
      for (let i = 0; i < hundred-5; i++) {
        str += 'C';   
      }
      return str;
    }
    if (hundred === 9) {
      str = 'CM';
      return str;
    }
  }

  function buildTens(ten) {
    let str = '';
    if (ten < 4) {
      for (let i = 0; i < ten; i++) {
        str += 'X';   
      }
      return str;
    }
    if (ten === 4) {
      str = 'XL';
      return str;
    }
    if (ten === 5)  {
      str = 'L';
      return str;
    }
    if (ten > 5 && ten < 9) {
      str = 'L';
      for (let i = 0; i < ten-5; i++) {
        str += 'X';   
      }
      return str;
    }
    if (ten === 9) {
      str = 'XC';
      return str;
    }
  }

  function buildOnes(one) {
    let str = '';
    if (one < 4) {
      for (let i = 0; i < one; i++) {
        str += 'I';   
      }
      return str;
    }
    if (one === 4) {
      str = 'IV';
      return str;
    }
    if (one === 5)  {
      str = 'V';
      return str;
    }
    if (one > 5 && one < 9) {
      str = 'V';
      for (let i = 0; i < one-5; i++) {
        str += 'I';   
      }
      return str;
    }
    if (one === 9) {
      str = 'IX';
      return str;
    }
  }

  return buildThousands(thousand) + buildHundreds(hundred) + buildTens(ten) + buildOnes(one);
}

convertToRoman(3525);
