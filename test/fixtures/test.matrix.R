options( digits = 16 )
library( jsonlite )

r = 4
p = 0.5
x = 0:24
y = pnbinom( x, r, p )

cat( y, sep = ",\n" )

data = list(
	r = r,
	p = p,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
