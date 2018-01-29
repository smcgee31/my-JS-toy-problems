/*
Design a cash register drawer function checkCashRegister() that accepts purchase 
price as the first argument (price), payment as the second argument (cash), 
and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. 
Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/
// THIS FUNCTION IS THE FUNCTIONAL VERSION - WHICH I WAS TRYING FOR BUT COULDN'T WRAP MY HEAD AROUND AT FIRST
function checkCashRegister2(price, cash, cid) {
  // All amounts are multiplied by 100 until the final result to avoid errors with floating point math
  const denominations = { "PENNY": 1, "NICKEL": 5, "DIME": 10, "QUARTER": 25, "ONE": 100, "FIVE": 500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000 }
  let changeDue = (cash * 100 - price * 100);
  const register = cid.reverse().map(el => [el[0], Math.round(el[1]*100)]);
  const registerTotal = register.reduce((sum, elem) => (sum + elem[1]), 0);
  
  if (changeDue > registerTotal ) return "Insufficient Funds";
  if (changeDue === registerTotal ) return "Closed";

  let partial;
  let change = register.reduce((acc, elem) => {
        // for each denomination calculate the lesser of (a) the amount that could be paid with that
        // denomination without going over the amount owed, and (b) the actual amount of that denomination in 
        // the register. Denominations not used to make change are excluded from the resulting array.
        partial = Math.min(elem[1], Math.floor(changeDue / denominations[elem[0]]) * denominations[elem[0]]);
        if ( partial > 0 ) {
          changeDue -= partial;
          acc.push([elem[0], partial / 100]);
        } return acc;
    }, [])
      
  // If the correct change could not be made from what was in the register.
  if (changeDue > 0 ) return "Insufficient Funds"

  return change;
}

function checkCashRegister(price, cash, cid) {
  price = price * 100;
  cash = cash * 100;
  let reply;
  let change = [];
  let changeDue = cash - price;
  const totalCID = cid.reduce((p, c) => {
    return p + c[1]*100;
  }, 0);
  const denoms = Object.assign(...cid.map(d => ({[d[0]]: +(d[1]*100).toFixed(0)})));

  function makeChange(denomName, changeDue, denomValue) {
    let denomNeeded = Math.floor(changeDue / denomValue) * denomValue;
    if (denoms[denomName] > denomNeeded ) {
      changeDue -= denomNeeded;
      change.push([denomName, (denomNeeded / 100)]);
      denoms[denomName] -= denomNeeded;
    } else {
      changeDue -= denoms[denomName];
      change.push([denomName, (denoms[denomName] / 100)]);
      denoms[denomName] = 0;
    }
    return changeDue;
  }

  if (totalCID === changeDue) return 'Closed';
  if (totalCID > changeDue) {
    if (changeDue > 10000 && denoms['ONE HUNDRED'] > 0) {
      changeDue = changeDue = makeChange('ONE HUNDRED', changeDue, 10000);
      if (changeDue === 0) return change;
    }
    if (changeDue > 2000 && denoms.TWENTY > 0) {
      changeDue = makeChange('TWENTY', changeDue, 2000);
      if (changeDue === 0) return change;
    }
    if (changeDue > 1000 && denoms.TEN > 0) {
      changeDue = makeChange('TEN', changeDue, 1000);
      if (changeDue === 0) return change;
    }
    if (changeDue > 500 && denoms.FIVE > 0) {
      changeDue = makeChange('FIVE', changeDue, 500);
      if (changeDue === 0) return change;
    }
    if (changeDue > 100 && denoms.ONE > 0) {
      changeDue = makeChange('ONE', changeDue, 100);
      if (changeDue === 0) return change;
    }
    if (changeDue > 25 && denoms.QUARTER > 0) {
      changeDue = makeChange('QUARTER', changeDue, 25);
      if (changeDue === 0) return change;
    }
    if (changeDue > 10 && denoms.DIME > 0) {
      changeDue = makeChange('DIME', changeDue, 10);
      if (changeDue === 0) return change;
    }
    if (changeDue > 5 && denoms.NICKEL > 0) {
      changeDue = makeChange('NICKEL', changeDue, 5);
      if (changeDue === 0) return change;
    }
    if (changeDue < denoms.PENNY) {
      let penniesNeeded = changeDue;
      change.push(['PENNY', (changeDue / 100)]);
      denoms.PENNY -= changeDue;
      changeDue = 0;
      return change;
    } else {
      reply = 'Insufficient Funds';
    }
  } else {
    reply = 'Insufficient Funds';
  }

  return reply;
}

// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
// should return an array.

// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// // should return a string.

// checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// // should return a string.

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); 
// // should return [["QUARTER", 0.50]]

// checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); 
// // should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]

// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 
// // should return "Insufficient Funds".

// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 
// // should return 'Insufficient Funds'

// checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 
// // should return "Closed".



// THOUGHT I WOULD NEED TO ADD THE NUMBER OF EACH DENOMINATION TO THE ARRAY
  // add the number of each denom to each denom array (ie. .45 in nickels would be 9)
  // cid.forEach(e => {
  //   switch (e[0]) {
  //     case 'PENNY':       e.push(+(e[1] * 100).toFixed(0)); break;
  //     case 'NICKEL':      e.push(+(e[1] * 100/5).toFixed(0)); break;
  //     case 'DIME':        e.push(+(e[1] * 100/10).toFixed(0)); break;
  //     case 'QUARTER':     e.push(+(e[1] * 100/25).toFixed(0)); break;
  //     case 'ONE':         e.push(+(e[1]).toFixed(0)); break;
  //     case 'FIVE':        e.push(+(e[1] / 5).toFixed(0)); break;
  //     case 'TEN':         e.push(+(e[1] / 10).toFixed(0)); break;
  //     case 'TWENTY':      e.push(+(e[1] / 20).toFixed(0)); break;
  //     case 'ONE HUNDRED': e.push(+(e[1] / 100).toFixed(0)); break;
  //   }
  // });


/* SOME TEST DATA...
 * let changeDue = 27327;
 * need 2 hundreds, 3 twenties, 1 ten, 3 ones, 1 quarter, 2 pennies
  
 * ALL DENOMS AND CALCULATION DONE IN 1 CENT VALUES
 * const denoms = {
 *   'PENNY': 15,
 *   'NICKEL': 205,
 *   'DIME': 310,
 *   'QUARTER': 425,
 *   'ONE': 1300,
 *   'FIVE': 5500,
 *   'TEN': 6600,
 *   'TWENTY': 18000,
 *   'ONE HUNDRED': 30000,
 * }
 * 
 */

/*
 *  Here is the model I made to help get the logic down to build all the conditionals...
 *
 * IF there is enough total money in the drawer
 *   do I need hundreds? 
 *     NO       YES
 *     |         |->  do I have hundreds?
 *     |               NO        YES
 *     |               |         |->  do I have enough hundreds?
 *     |               |              |->  YES - use the hundreds you need and subtract from what's due
 *     |               |              |->  NO  - use as many as you have and subtract from what's due, move on to checking for twenties
 *     |               |
 *     |               |-> move on to checking for twenties
 *     |
 *     |-> move on to checking for twenties
 *
 *
 *  do I need twenties?
 *     NO       YES
 *     |         |->  do I have twenties?
 *     |               NO        YES
 *     |               |         |->  do I have enough twenties?
 *     |               |              |->  YES - use the twenties you need and subtract from what's due
 *     |               |              |->  NO  - use as many as you have and subtract from what's due, move on to checking for tens
 *     |               |
 *     |               |-> move on to checking for tens
 *     |
 *     |-> move on to checking for tens
 *
 *
 *  do I need tens?
 *     NO       YES
 *     |         |->  do I have tens?
 *     |               NO        YES
 *     |               |         |->  do I have enough tens?
 *     |               |              |->  YES - use the tens you need and subtract from what's due
 *     |               |              |->  NO  - use as many as you have and subtract from what's due, move on to checking for fives
 *     |               |
 *     |               |-> move on to checking for fives
 *     |
 *     |-> move on to checking for fives
 *
 *
 *
 *  ... AND ON AND ON TILL DONE WITH PENNIES ...
 */
