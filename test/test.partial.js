/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Check whether an element is a finite number
	isFiniteNumber = require( 'validate.io-finite' ),

	// Check whether an element is `NaN`
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	partial = require( './../lib/partial.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'partial cdf', function tests() {

	var	validationData = require( './fixtures/partial.json' ),
		data = validationData.data,
		expected = validationData.expected.map( function( d ) {
			return d === 'Inf' ? Infinity : d;
		}),
		r = validationData.r,
		p = validationData.p;

	it( 'should export a function', function test() {
		expect( partial ).to.be.a( 'function' );
	});

	it( 'should partially apply the Negative Binomial cdf for given parameter values', function test() {
		var cdf;
		cdf = partial( r, p );
		expect( cdf ).to.be.a( 'function' );
	});

	it( 'should return a function which evaluates the cumulative distribution function', function test() {
		var cdf, actual;
		cdf = partial(  r, p );
		for ( var i = 0; i < data.length; i++ ) {
			actual = cdf( data[ i ] );
			if ( isFiniteNumber( actual ) && isFiniteNumber( expected[ i ] ) ) {
				assert.closeTo( actual, expected[ i ] , 1e-14 );
			}
		}
	});

	it( 'the function should return `NaN` if provided `NaN` as input', function test() {
		var cdf = partial(  r, p );
		assert.isTrue( isnan( cdf( NaN ) ) );
	});

	it( 'the function should return 1 for +Infinity', function test() {
		var cdf = partial(  r, p );
		assert.strictEqual( cdf( +Infinity, r, p ), 1 );
	});

});
