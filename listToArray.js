let list = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
let list2 = {value: `foo`, next: {value: `bar`, next: null}};

// Solution #1
const listToArray = (list) => {
  let arr = [];
  for (let prop in list) {
    let value = list[prop];
    if (typeof value === 'object') arr.push(...listToArray(value));
    else arr.push(value);
  }
  return arr;
};

console.log(listToArray(list));



// Solution #2  <--- BUT it doesn't seem to work with list2!! why not?? I don't know...
const listToArray = (obj, arr) => {
  if (!arr) arr=[];
  arr.push(obj.value);
  if (obj.next) return listToArray(obj.next, arr);
  return arr;
};

console.log(listToArr(list));


// Solution #3 -- yeah. but I don't get it...
const listToArray = (list) => {
  var array = [];
  for (var node = list; node; node = node.next)
    array.push(node.value);
  return array;
};


// Solution #4
var listToAnArr = (list) => {
  return !list ? [] : [list.value].concat(listToArray(list.next));
};


// WTF???
const WTFisThis = (list) => list === null ? [] : [list.value].concat(listToArray(list.next));
