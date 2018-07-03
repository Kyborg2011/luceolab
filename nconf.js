var fs    = require( 'fs' ),
    nconf = require( 'nconf' ),
    path  = require( 'path' );

//
// Setup nconf to use (in-order):
//   1. Command-line arguments
//   2. Environment variables
//   3. A file located at 'path/to/config.json'
//
nconf.argv()
 .env()
 .file({ file: path.resolve( './config.json' ) });

//
// Set a few variables on `nconf`.
//
nconf.set( 'smtp:host', 'mail.example.com' );
nconf.set( 'smtp:port', 587 );
nconf.set( 'smtp:auth_user', 'someemail@example.com' );
nconf.set( 'smtp:auth_pass', 'password' );
nconf.set( 'smtp:mail_to', 'mailto@example.com' );
nconf.set( 'smtp:mail_from', '"Name" <someemail@example.com>' );


//
// Get the entire database object from nconf. This will output
// { host: '127.0.0.1', port: 5984 }
//
console.log( 'NODE_ENV: ' + nconf.get( 'NODE_ENV' ));
console.log( 'smtp: ' + nconf.get( 'smtp' ));

//
// Save the configuration object to disk
//
nconf.save( function( err ) {
    fs.readFile( path.resolve( './config.json' ), function( err, data ) {
        console.dir( JSON.parse( data.toString()))
    });
});
