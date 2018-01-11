'use strict';

const timesObject = {
  monday: [ { open: '07:00', close: '17:00' } ],
  tuesday: [ { open: '07:00', close: '17:00' } ],
  wednesday: [],
  thursday: [ { open: '07:00', close: '16:00' } ],
  friday: [ { open: '07:00', close: '16:00' } ],
  saturday: [ { open: '09:00', close: '15:00' } ],
  sunday: [ { open: '09:00', close: '15:00' } ],
};

function timesMatch(arr, open, close) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].open === open && arr[i].close === close) {
      return true;
    }
  }

  return false;
}

function shapeTimesObjectIntoIterableArray(timesObject) {
  if (!timesObject) return [];
  const timesArray = [];

  for (const key in timesObject) {
    if (timesObject[key].length === 0) {
      continue;
    }
    if (timesArray.length === 0) {
      timesArray.push({ open: timesObject[key][0].open, close: timesObject[key][0].close, days: [ key ] });
    } else if (timesMatch(timesArray, timesObject[key][0].open, timesObject[key][0].close)) {
      for (let i = 0; i < timesArray.length; i++) {
        if (timesObject[key][0].open === timesArray[i].open && timesObject[key][0].close === timesArray[i].close) {
          timesArray[i].days.push(key);
          break;
        }
      }
    } else {
      timesArray.push({ open: timesObject[key][0].open, close: timesObject[key][0].close, days: [ key ] });
    }
  }

  return timesArray;
}

console.log(shapeTimesObjectIntoIterableArray(timesObject));



// Solution #2 - this is what I was trying to accomplish but couldn't seem to figure it out!
//               much more elegant than my solution above.

function shapeTimesObjectIntoIterableArray2(timesObject) {
  let results = [];
  for (let day in timesObject) {
    if (timesObject[day].length === 0) continue;

    let found = results.findIndex((r) => {
      return (r.open === timesObject[day][0].open) && (r.close === timesObject[day][0].close);
    });

    if (found === -1) {
      results.push({
        open: timesObject[day][0].open,
        close: timesObject[day][0].close,
        days: [day]
      });
    }
    if (found !== -1) {
      results[found].days.push(day);
    }
  }
  return results;
}

console.log(shapeTimesObjectIntoIterableArray2(timesObject));


// Solution #3 - Also almost exactly what I was trying to come up with... pretty similar to #2

function shapeTimesObjectIntoIterableArray3(timesObject) {
  if (!timesObject) return []
  if (Object.keys(timesObject).length === 0) return []
  const result = Object.keys(timesObject).reduce((result, dayKey) => {
    const dayTimes = timesObject[dayKey]
    
    dayTimes.forEach(dayTime => {
      const openCloseItem = result.find(item => item.open === dayTime.open && item.close === dayTime.close)
      
      if (!openCloseItem) {
        result.push({ ...dayTime, days: [dayKey] })
      } else {
        openCloseItem.days.push(dayKey)
      }
    })
    
    return result
  }, [])
  
  return result
}

console.log(shapeTimesObjectIntoIterableArray3(timesObject));