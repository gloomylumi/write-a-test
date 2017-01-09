'use strict';
var chai = require( 'chai' );
var assert = chai.assert;
var app = require( '../app.js' );
var plusOneSum = app.plusOneSum;

describe( 'plusOneSum', function() {
  it( 'should find the sum of an array after adding 1 to each element', function() {
    var arr = [ 1, 2, 3, 4 ];
    assert.equal( plusOneSum( arr ), 14 );
  } );
} )
