var express = require( 'express' ),
    app = express();

app.use( express.static( 'dist' ));

var server = app.listen( 80, function() {

    var host = server.address().address,
        port = server.address().port;

    console.log( 'Express app listening at http://%s:%s', host, port );

});
