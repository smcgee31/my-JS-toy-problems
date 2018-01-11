/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
  'use strict';

  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function( number ) {
      // Your implementation goes here
      const val = number
        .toString().split('').reduce( (a,b) => (+a) + (+b) );
      if(number % val === 0) { return true; }
      return false;
    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function( number ) {
      // Your implementation goes here
      while(!this.isValid(++number)){};   // the end brackets aren't necessary IF you use a semicolon, otherwise it tries to 'return' as part of the while loop
      return number;
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSeries: function( count, start = 0 ) {
      // Your implementation goes here
      let arr = [];
      for(let i = 0; i < count; i++) {   // here is a crazy alt to this for-loop >  for(let arr = []; arr.length < count; arr.push(start)) {
        arr.push(this.getNext(start));   //                                           start = this.getNext(start);
        start = arr[i];                  //                                         }
      }
      return arr;
    }
  };