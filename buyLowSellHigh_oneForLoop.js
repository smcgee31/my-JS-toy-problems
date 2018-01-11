// Each number in the array is the stock price and the index of that price is the
// hour of the day that price was at.
//Write a solution for finding the best buy and sell point of the day for the most profit.
// ie. buy at the low of the day and sell at the high of the day but
// only when it makes the most profit not just any buy and sell for any profit.
//               0     1     2     3     4     5     6
var prices = [ 5.50, 5.35, 5.75, 5.15, 5.75, 3.15, 4.85 ];

var getProfit = function( prices ) {
	var   finalBuy       = prices[0]    // 5.25
    	, finalBuyIndex  = 0            //  0
    	, finalSell      = prices[0]    // 5.25
    	, finalSellIndex = 0            //  0
    	, currBuy        = prices[0]    // 5.25
    	, currBuyIndex   = 0            //  0
    	, currSell       = prices[0]    // 5.35
    	, currSellIndex  = 0            //  1
    	, finalDiff      = 0			//  0
    	, currDiff       = 0			// 5.25
  	;

	// We have to compare the difference between a specified low and a newfound high
	for ( var i = 1; i < prices.length; i++ ) {
		// if a newfound high sell price comes AFTER a newfound low buy price set it as the finalBuy price and record it's index
		// each number... is it a newfound high sell price?
		//   if so... does it come AFTER an already set low buy price? (is it's index > the currBuy)





		// IS IT A NEW SELL PRICE?
		// if the price you are looking at right now is larger than the currBuy && it also has the largest difference so far, then set the price equal to the currSell and set the new currDiff
		if (prices[i] > currSell && (prices[i] - currBuy) > currDiff) {
			currSell = prices[i];
			currSellIndex = i;
			currDiff = currSell - currBuy;
		}

		// IS IT AN EQUAL TOP SELL PRICE BUT AT A LATER TIME THAT DAY?
		// if the price your're looking at right now is equal to the currSell && the index is greater than the currSell then set the currSellIndex to this index
		if (prices[i] === currSell && i > currSellIndex) {
			currSellIndex = i;
		}

		// IS IT A NEW BUY PRICE?
		// if the price you're looking at right now is < the current buy price && it also creates the largest difference so far, then set currBuy to that value and currBuyIndex to that index
		if (prices[i] < currBuy && (currSell - prices[i]) > currDiff) {
			currBuy = prices[i];
			currBuyIndex = i;
			currDiff = currSell - currBuy;
		}


    // if the currSellIndex comes after the currBuyIndex then set currDiff
    if (currSellIndex > currBuyIndex) {
      currDiff = currSell - currBuy;
    }

		// if the currDiff > finalDiff then set currSell to finalSell and the currBuy to the finalBuy
		if (currDiff > finalDiff && currBuyIndex < currSellIndex) {
			finalBuy = currBuy;
			finalBuyIndex = currBuyIndex;
			finalSell = currSell;
			finalSellIndex = currSellIndex;
    	finalDiff = finalSell - finalBuy;
		}

	}
	finalDiff = finalSell - finalBuy;
    console.log(`finalBuy price = ${finalBuy} at ${finalBuyIndex} hour`);
	console.log(`finalSell price = ${finalSell} at ${finalSellIndex} hour`);
	console.log(`resulting in a profit of ${finalDiff}`);

}

getProfit(prices);