'use strict';

// MODULES //

var partial = require( './partial.js' );


// CDF //

/**
* FUNCTION: cdf( out, matrix, r, p )
*	Evaluates the cumulative distribution function (CDF) for a Negative Binomial distribution with number of failures until experiment is stopped `r` and success probability `p` for each matrix element.
*
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @returns {Matrix} output matrix
*/
function cdf( y, x, r, p ) {
	var len = x.length,
		fcn,
		i;
	if ( y.length !== len ) {
		throw new Error( 'cdf()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	fcn = partial( r, p );
	for ( i = 0; i < len; i++ ) {
		y.data[ i ] = fcn( x.data[ i ] );
	}
	return y;
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
