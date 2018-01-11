// Each number in the array is the stock price and the index of that price is the
// hour of the day that price was at.
//Write a solution for finding the best buy and sell point of the day for the most profit.
// ie. buy at the low of the day and sell at the high of the day but
// only when it makes the most profit not just any buy and sell for any profit.
//               0     1     2     3     4     5     6
var prices = [ 5.50, 5.35, 5.75, 5.15, 5.75, 3.15, 4.85 ];

var getProfit = function( prices ) {
	var   currBuy       = 0
    	, currBuyIndex  = 0
    	, currSell      = 0
    	, currSellIndex = 0
    	, currDiff      = 0
    ;

	// We have to compare the difference between a specified low and a newfound high
	for ( var i = 0; i < prices.length; i++ ) {
		for (var j = i + 1; j < prices.length; j++) {
			if (prices[i] < prices[j] && prices[j] - prices[i] > currDiff) {
				currBuy       = prices[i];
				currBuyIndex  = i;
				currSell      = prices[j];
				currSellIndex = j;
				currDiff      = prices[j] - prices[i];
			}
		}
	}

// the following function is simply to format the numbers as currency and lose the floating point error
	var formater = function(n, currency) {
    return currency + '' + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
	};

	var   finalBuy       = formater(currBuy, '$')
		, finalBuyIndex  = currBuyIndex
		, finalSell      = formater(currSell, '$')
		, finalSellIndex = currSellIndex
		, finalDiff      = formater(currDiff, '$')
	;

  console.log(`the best buy price is ${finalBuy}`);
  console.log(`at the ${finalBuyIndex} hour`);
  console.log(`the best sell price is ${finalSell}`);
  console.log(`at the ${finalSellIndex} hour`);
  console.log(`for a max profit of ${finalDiff}`);

};

getProfit(prices);