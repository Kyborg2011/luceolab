import React from 'react';
import path from 'path';
import express from 'express';
import nodemailer from 'nodemailer';
import compression from 'compression';
import serveStatic from 'serve-static';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import bodyParser from 'body-parser';

import App from './components/App';
import template from './template';

var fs = require( 'fs' );
var parameters = JSON.parse( fs.readFileSync( path.join( __dirname, '../config.json' ), 'utf8' ));

let app = express();
app.use( bodyParser.json());

let selfSignedConfig = {
    host: parameters.smtp.host,
    port: parameters.smtp.port,
    secure: false,
    auth: {
        user: parameters.smtp.auth_user,
        pass: parameters.smtp.auth_pass
    },
    tls: {
        rejectUnauthorized: false
    }
};

app.use( compression());
app.use( serveStatic( path.join( __dirname, '../dist/public' )));

app.post( '/send-request', function( req, res, next ) {
    let params = req.body;
    let transporter = nodemailer.createTransport( selfSignedConfig );
    let html = JSON.stringify( params );
    let mailOptions = {
        from: parameters.smtp.mail_from,
        to: parameters.smtp.mail_to,
        subject: 'Request from LuceoLab',
        text: html,
    };
    transporter.sendMail( mailOptions, ( error, info ) => {
        if ( error ) {
            console.dir( error );
            res.header( 'Content-Type', 'application/json' );
            res.send( JSON.stringify({ error: true }));
            return;
        }
        console.log( 'Message sent: %s', info.messageId );
        res.header( 'Content-Type', 'application/json' );
        res.send( JSON.stringify({ success: true }));
    });
});

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
