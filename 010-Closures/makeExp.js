"use strict";

// Use closures to write a factory called makeExp() which takes a single argument x and returns a new function. The function that it returns takes a single argument y, and returns y to the power of x.

function makeExp(x) {
  return function(y) {
    var z = 1;
    for (var i = 1; i<=x; i++) {
      z *= y;
    }
    return z;
  };
}

var exp1 = makeExp(1);
var exp2 = makeExp(2);
var exp3 = makeExp(3);
var exp4 = makeExp(4);

exp4(2);

// exp2 and exp3 are both closures.  They share the same function body defiinition, but store diffferent environments, in exp2's environment, x is 2.  As far as exp3 is concerned, x = 3.
