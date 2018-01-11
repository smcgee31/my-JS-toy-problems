// The new "Avengers" movie has just been released! There are a lot of people at the 
// cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 
// dollars bill. A "Avengers" ticket costs 25 dollars.

// Randy is currently working as a clerk. He wants to sell a ticket to every single person 
// in this line. Can Randy sell a ticket to each person and give the change if he initially 
// has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Randy can sell a ticket to each person and give the change. Otherwise return NO.
// example 2:
// tickets([25, 25, 50, 50])  returns "YES"
// tickets([25, 100])  returns "NO"


// Solution #1 - mine - this solution simply takes value into consideration and not
// what "bills" Randy has in the drawer. It may not always work because he may have
// a senario where he has to give $25 back in change but only has a $50 in the drawer.
// The value is enough but the change still cannot be given.
function tickets(peopleInLine) {

   var ticket = 25
      ,drawer = 0
      ,change = 0;

   if (peopleInLine[0] > ticket) return "NO";

   for (var i = 0; i < peopleInLine.length; i++) {
      change = peopleInLine[i] - ticket;
      if (change > drawer) {
         return "NO";
      } else {
         drawer -= change;
      }
      drawer += peopleInLine[i];
   }
   return 'YES';
}


// Solution #2 - mine - this solution gives change according to the bills that Randy
// has in his drawer in a more real life senario.
function tickets(peopleInLine) {

   var ticket = 25
      ,change = 0
      ,bills = []
      ,drawer = 0
      ;

   if (peopleInLine[0] > ticket) return "NO";

   for (var i = 0; i < peopleInLine.length; i++) {
      change = peopleInLine[i] - ticket;
      if (peopleInLine[i] > ticket) {
         //figure out the change
         if (change === 75) {
            //if there's a 50 and a 25 use that
            //else if there are three 25's use them
            //else return no
            if (bills.indexOf(50) !== -1 && bills.indexOf(25) !== -1) {
            bills.splice(bills.indexOf(50),1);
            bills.splice(bills.indexOf(25),1);
            } else if (bills[2] === 25) {
               bills.splice(0,3);
            } else {
               return 'NO';
            }
         }
         if (change === 50) {
            //if there's a 50 use it
            //else if there's two 25's use them
            //else return no
            if (bills.indexOf(50) !== -1) {
               bills.splice(bills.indexOf(50),1);
            } else if (bills[1] === 25) {
               bills.splice(0,2);
            } else {
               return 'NO';
            }
         }
         if (change === 25) {
            //use a 25, if there is no 25 then return 'NO'
            if (bills[0] === 25) {
               bills.splice(0,1);
            } else {
               return 'NO';
            }
         }
      }
      bills.push(peopleInLine[i]);
      bills.sort((a,b) => a-b);
      drawer = bills.reduce((a, b) => a + b);     
   }
   return 'YES';
}


//Solution #3 - this was voted as best practice
function Clerk(name) {
  this.name = name;
  
  this.money = {
    25 : 0,
    50 : 0,
    100: 0 
  };
  
  this.sell = function(element, index, array) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets(peopleInLine){
  var vasya = new Clerk("Vasya");
  return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}



//Solution #4 - seems to be pretty much the same as above but less verbose and complicated
function tickets(peopleInLine){
   var m25 = 0, m50 = 0;

   for (var i = 0; i < peopleInLine.length; i++) {
      switch(peopleInLine[i]){
         case 25:
            m25++;
            break;
         case 50:
            m25 > 0 ? m25-- : m25 = -1;
            m50++;
            break;
         case 100:
            m25 > 0 && m50 > 0 ? m50-- : (m25 > 2 ? m25 -= 2 : m25 = -1);
            m25--;
            break;
      }
   }
   return m25 < 0 ? "NO" : "YES";
}



//Solution #5 - here's one to study! uses forEach and nested while-loop
function tickets(peopleInLine){

  var  bills   = [100, 50, 25]
   ,   canSell = "YES"
   ,   bank    = {"100": 0, "50": 0, "25": 0}
   ,   change  = 0
   ;

   peopleInLine.forEach(function(person){
      bank[person]++;
      change = person - 25;
      bills.forEach(function(bill){
         while (bank[bill] && change > 0 && change >= bill) {
            change = change - bill;
            bank[bill]--;
         }
      });
      if (change > 0) canSell = "NO";
   });
   
  return canSell;
}