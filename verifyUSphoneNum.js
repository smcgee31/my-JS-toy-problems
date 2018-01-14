/*
Return true if the passed string is a valid US phone number.
The user may fill out the form field any way they choose as long as it is a valid US number
For this challenge you will be presented with a string such as '800-692-7753' or 
'8oo-six427676;laskdjf'. Your job is to validate or reject the US phone number 
based on any combination of the formats provided above. The area code is required. 
If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.
*/


// Solution #1 - This solution is not what I wanted but gave up on the regex and 
// fixed the rest with my if statemenst - all of the test pass what is expected
// but FCC tests don't agree... whatever.

function telephoneCheck(str) {
  str = str.replace(/\s+/g, '');
  const l = str.match(/\d/g).length;
  if (l === 7 || l === 10 || l === 11) {
    if (l === 11 && !str.startsWith('1')) {
      return false;
    }
    const re = new RegExp(/^((1-?)?)([(]\d{3}[)]|\d{3})(-?\d{3}-?\d{4})/, 'g');
    
    console.log(re.test(str));
    return re.test(str);
  }
  return false;
}



// Solution #2 - the REAL solution. seems so simple now.  :)

function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}



telephoneCheck("555-555-5555");      // should return a boolean. 1
telephoneCheck("1 555-555-5555");    // should return true.      2
telephoneCheck("1 (555) 555-5555");  // should return true.      3
telephoneCheck("5555555555");        // should return true.      4
telephoneCheck("555-555-5555");      // should return true.      5
telephoneCheck("(555)555-5555");     // should return true.      6
telephoneCheck("1(555)555-5555");    // should return true.      7
telephoneCheck("555-5555");          // should return false.     8
telephoneCheck("5555555");           // should return false.     9
telephoneCheck("1 555)555-5555");    // should return false.    10
telephoneCheck("1 555 555 5555");    // should return true.     11
telephoneCheck("1 456 789 4444");    // should return true.     12
telephoneCheck("123**&!!asdf#");     // should return false.    13
telephoneCheck("55555555");          // should return false.    14
telephoneCheck("(6505552368)");      // should return false.    15
telephoneCheck("2 (757) 622-7382");  // should return false.    16
telephoneCheck("0 (757) 622-7382");  // should return false.    17
telephoneCheck("-1 (757) 622-7382"); // should return false.    18
telephoneCheck("2 757 622-7382");    // should return false.    19
telephoneCheck("10 (757) 622-7382"); // should return false.    20
telephoneCheck("27576227382");       // should return false.    21
telephoneCheck("(275)76227382");     // should return false.    22
telephoneCheck("2(757)6227382");     // should return false.    23
telephoneCheck("2(757)622-7382");    // should return false.    24
telephoneCheck("555)-555-5555");     // should return false.    25
telephoneCheck("(555-555-5555");     // should return false.    26
telephoneCheck("(555)5(55?)-5555");  // should return false.    27
