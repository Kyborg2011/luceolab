export default ({ body, helmet }) => {
    return `
        <!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui">
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Open+Sans+Condensed:300" rel="stylesheet">
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
                <link href="/css/main.css" rel="stylesheet">
            </head>
            <body ${helmet.bodyAttributes.toString()}>
                <div id="root"><div>${body}</div></div>
                <script async src="/js/main.bundle.js"></script>
            </body>
        </html>
    `;
};
