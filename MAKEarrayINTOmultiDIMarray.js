var input = [50, 55, 56, 57, 58, 59];
var size = 3;

var sets = function(input, size) {
    var results = [], result, mask, i, total = Math.pow(2, input.length);
    for (mask = size; mask < total; mask++) {
        result = [];
        i = input.length - 1;

        do {
            if ((mask & (1 << i)) !== 0) {
                result.push(input[i]);
            }
        } while (i--);

        if (result.length === size) {
            results.push(result);
        }
    }

    return results; 
};



console.log(sets(input, size));