'use strict';

// MODULES //

var deepSet = require( 'utils-deep-set' ).factory,
	deepGet = require( 'utils-deep-get' ).factory,
	partial = require( './partial.js' );


// CDF //

/**
* FUNCTION: cdf( arr, r, p, path[, sep] )
*	Evaluates the cumulative distribution function (CDF) for a Negative Binomial distribution with number of failures until experiment is stopped `r` and success probability `p` for each array element and sets the input array.
*
* @param {Array} arr - input array
* @param {Number} r - number of failures until experiment is stopped
* @param {Number} p - success probability
* @param {String} path - key path used when deep getting and setting
* @param {String} [sep] - key path separator
* @returns {Array} input array
*/
function cdf( x, r, p, path, sep ) {
	var len = x.length,
		opts = {},
		dget,
		dset,
		fcn,
		v, i;
	if ( arguments.length > 4 ) {
		opts.sep = sep;
	}
	if ( len ) {
		dget = deepGet( path, opts );
		dset = deepSet( path, opts );
		fcn = partial( r, p );
		for ( i = 0; i < len; i++ ) {
			v = dget( x[ i ] );
			if ( typeof v === 'number' ) {
				dset( x[i], fcn( v ) );
			} else {
				dset( x[i], NaN );
			}
		}
	}
	return x;
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
