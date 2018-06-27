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

app.use( compression());

app.use( serveStatic( path.join( __dirname, '../dist' )));

app.use( '/server.js', function( req, res, next ) {
    res.status( 403 )
    res.send( '<h1>403 Forbidden</h1>' )
})

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
