//My each
function myEach(collection, callback) {
    // Convert the collection into an array (if it's an object, we get values)
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      // If it's an object, loop through its keys
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection; // Return the original collection
  }
  
//My map

  function myMap(collection, callback) {
    let result = [];
    
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
  
    return result;
  }
  //my reduce

  function myReduce(collection, callback, acc) {
    let isAccDefined = acc !== undefined;
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (isAccDefined) {
          acc = callback(acc, collection[i], collection);
        } else {
          acc = collection[i];
          isAccDefined = true;
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (isAccDefined) {
            acc = callback(acc, collection[key], collection);
          } else {
            acc = collection[key];
            isAccDefined = true;
          }
        }
      }
    }
  
    return acc;
  }
  //my find
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key], key, collection)) {
            return collection[key];
          }
        }
      }
    }
    return undefined;
  }
  // my filter
  function myFilter(collection, predicate) {
    let result = [];
    
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key], key, collection)) {
            result.push(collection[key]);
          }
        }
      }
    }
    
    return result;
  }
  
  //my size
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  //my first
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, n);
  }
//  my last
function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(array.length - n);
  }
  
  //mysortby
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      let resultA = callback(a);
      let resultB = callback(b);
      
      if (resultA < resultB) return -1;
      if (resultA > resultB) return 1;
      return 0;
    });
  }
  //my flatten
  function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && !shallow) {
        myFlatten(array[i], shallow, newArr);
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  //mykeys
  function myKeys(object) {
    return Object.keys(object);
  }
 //myvalues
 function myValues(object) {
    return Object.values(object);
  }
  

  