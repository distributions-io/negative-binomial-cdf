'use strict';

// MODULES //

var betainc = require( 'compute-betainc/lib/numbers.js' );


// FUNCTIONS //

var floor = Math.floor;


// CDF //

/**
* FUNCTION: cdf( x, r, p )
*	Evaluates the cumulative distribution function (CDF) for a Negative Binomial distribution with number of failures until experiment is stopped `r` and success probability `p` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @returns {Number} evaluated CDF
*/
function cdf( x, r, p ) {
	if ( x < 0 ) {
		return 0;
	}
	if ( x === Number.POSITIVE_INFINITY ) {
		return 1;
	}
	// Ensure left-continuity
	x = floor( x + 1e-7 );
	return betainc.lower( p, r, x + 1 );
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
