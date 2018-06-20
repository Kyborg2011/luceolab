import React from 'react';
import path from 'path';
import express from 'express';
import compression from 'compression';
import serveStatic from 'serve-static';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet';

import App from './components/App';
import template from './template';

let app = express();

app.use( serveStatic( path.join( __dirname, '../dist' )));

app.use( compression({
    filter: ( req, res ) => {
        if ( req.headers[ 'x-no-compression' ]) {
            return false;
        }
        return compression.filter( req, res );
    }
}));

app.get( '/*', function( req, res ) {
    const appString = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App />
        </StaticRouter>
    );

    const helmet = Helmet.renderStatic();

    res.send( template({
        body: appString,
        helmet: helmet,
    }));
});

var server = app.listen( 80, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log( 'Express app listening at http://%s:%s', host, port );
});
