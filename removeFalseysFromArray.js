// Remove all falsy values from an array.
// examples:
// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9]
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"]
// bouncer([false, null, 0, NaN, undefined, ""]) should return []


// Solution #1 - mine
function bouncer(arr) {
  var result = arr.filter(function (val) {
    return !!val;  // just putting in val would also make the filter work
  })
  return result;
}

bouncer([7, "ate", "", false, 9]);


// Solution #2 - use Boolean constructor <-- WHAAAT!?
function bouncer2(arr) {
  var result = arr.filter(Boolean)
  return result;
}

bouncer2([7, "ate", "", false, 9]);


// Solution #3 - shorten the whole thing!!  BOOYAAA!!
const bouncer2 = (arr) => arr.filter(Boolean);

bouncer2([7, "ate", "", false, 9]);