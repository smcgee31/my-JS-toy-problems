//using n as a parameter in the calling function pattern, where n should be a
// natural number; complete the codes to get the pattern (take the help of examples).
// There is no newline in the end (after the pattern ends).

// Example:
// pattern(3):
// 1
// 1*2
// 1**3

// Solution #1
function pattern(n) {
  var output = '1\n';
  var stars = '1';
  for (var i = 1; i < n; i++) {
    for (var j = i-1; j < i; j++) {
      stars = stars + '*';
    }
    if(i+1 !== n) {
      output = output + stars + (i+1) + '\n';
    } else {
      output = output + stars + (i+1);
    }
  }
  return output;
}


// Solution # 2 - I like to replace if's with ternaries (Conditional Operators)
function pattern(n) {
  var output = '1\n';
  var stars = '1';
  for (var i = 1; i < n; i++) {
    for (var j = i-1; j < i; j++) {
      stars = stars + '*';
    }
    (i+1 !== n) ? output = output + stars + (i+1) + '\n' : output = output + stars + (i+1);
  }
  return output;
}


// Solution #3
function pattern(n){
  if (n < 1) return "";
  var output = "1";
  for (let i = 2; i <= n; ++i) {
    output += "\n1" + Array(i).join("*") + i;
  }
  return output;
}
