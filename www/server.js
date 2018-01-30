let path = require( 'path' );
let express = require( 'express' );
let compression = require( 'compression' );
let serveStatic = require( 'serve-static' );

let app = express();

app.use( compression({
    filter: ( req, res ) => {
        if ( req.headers[ 'x-no-compression' ]) {
            return false;
        }

        return compression.filter( req, res );
    }
}));
app.use( '/assets', serveStatic( path.resolve( __dirname + './../dist/assets' )));
app.use( '/css', serveStatic( path.resolve( __dirname + './../dist/css' )));
app.use( '/js', serveStatic( path.resolve( __dirname + './../dist/js' )));

app.get( '/*', function( req, res ) {
    res.sendFile( path.resolve( __dirname + './../dist/index.html' ));
});

var server = app.listen( 80, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log( 'Express app listening at http://%s:%s', host, port );
});
