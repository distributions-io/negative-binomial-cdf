'use strict';

// FUNCTIONS //


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

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
