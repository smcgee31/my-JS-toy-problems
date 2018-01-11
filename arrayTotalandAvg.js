//function that returns an object that has total: 'number of characters in the array'
//and avg: 'average length of each array item'

var list = ["alpha", "beta", "delta", "omega"];


function testTime(arr){
  var obj = {Total: 0, Avg: 0};
  for(var i = 0; i < arr.length; i++){
    obj.Total += arr[i].length;
  }
  obj.Avg = ( obj.Total / arr.length );
  return obj;
}

console.log("testTime: " , testTime(list));



// Solution #2
function testTime2(arr){
  var obj = {Total: 0, Avg: 0};
  arr.forEach(function(value, index){
    obj.Total += value.length;
    obj.Avg = obj.Total/(index+1);
  });
  return obj;
}

console.log("testTime2: " , testTime2(list));



// Solution #3
function testTime3(arr){
  var newarr = arr.join("");
  return {Total: newarr.length, Avg: (newarr.length/arr.length)};
}

console.log("testTime3: " , testTime3(list));
