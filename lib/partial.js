'use strict';

// MODULES //

var betainc = require( 'compute-betainc/lib/numbers.js' );


// FUNCTIONS //

var floor = Math.floor;


// PARTIAL //

/**
* FUNCTION: partial( r, p )
*	Partially applies number of failures until experiment is stopped `r` and success probability `p` and returns a function for evaluating the cumulative distribution function (CDF) for a Negative Binomial distribution.
*
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @returns {Function} CDF
*/
function partial( r, p ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Negative Binomial distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {
		if ( x < 0 ) {
			return 0;
		}
		if ( x === Number.POSITIVE_INFINITY ) {
			return 1;
		}
		// Ensure left-continuity
		x = floor( x + 1e-7 );
		return betainc.lower( p, r, x + 1 );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
