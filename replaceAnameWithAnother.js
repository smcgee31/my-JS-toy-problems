// replace one name in an array with another name in an array.

//method #1
function replace1(arr, tb, rp){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === tb){
      arr[i] = rp;
    }
  }
  return arr;
}
console.log(1, replace1(["Maxx", "Cole", "Tony", "Korudo"], "Tony", "Frio"));



//method #2
function replace2(arr, tb, rp){
  arr.splice(arr.indexOf(tb), 1, rp);
  return arr;
}
console.log(2, replace2(["Maxx", "Cole", "Tony", "Korudo"], "Tony", "Frio"));



// method #3
function replace3(arr, tb, rp){
  arr[arr.indexOf(tb)] = rp;
  return arr;
}
console.log(3, replace3(["Maxx", "Cole", "Tony", "Korudo"], "Tony", "Frio"));



//method #4
function replace4(arr, tb, rp){
  var newarr = arr.join(" ").replace(tb, rp).split(" ");
  return newarr;
}
console.log(4, replace4(["Maxx", "Cole", "Tony", "Korudo"], "Tony", "Frio"));
