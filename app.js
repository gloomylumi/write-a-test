'use strict';
module.exports = {
  plusOneSum: function( arr ) {
    var plusOne = arr.map( function( element ) {
      return element + 1;
    } );
    var sum = plusOne.reduce( function( a, b ) {
      return a + b;
    }, 0 );
    return sum;
  }
}
