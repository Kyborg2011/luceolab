let express = require( 'express' );
let app = express();

app.use( '/assets', express.static( '../dist/assets' ));
app.use( '/css', express.static( '../dist/css' ));
app.use( '/js', express.static( '../dist/js' ));

app.get( '/*', function( req, res ) {
    res.sendFile( __dirname + '../dist/index.html' );
});

var server = app.listen( 80, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log( 'Express app listening at http://%s:%s', host, port );
});
