// Write a function below called "oddsAndEvens" that loops through
// a parameter "nums" (an array). For each number in the given array, if it
// is even, it is added to the evens array, if the number is odd, is added to the odds array.



function oddsAndEvens(nums) {
    var evens = [];
    var odds = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            odds.push(nums[i]);
        }
        else {
            evens.push(nums[i]);
        }
    }
}
