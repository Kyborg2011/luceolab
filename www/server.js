let express = require( 'express' );
let app = express();
let path = require( 'path' );

app.use( '/assets', express.static( path.resolve( __dirname + './../dist/assets' )));
app.use( '/css', express.static( path.resolve( __dirname + './../dist/css' )));
app.use( '/js', express.static( path.resolve( __dirname + './../dist/js' )));

app.get( '/*', function( req, res ) {
    res.sendFile( path.resolve( __dirname + './../dist/index.html' ));
});

var server = app.listen( 80, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log( 'Express app listening at http://%s:%s', host, port );
});
