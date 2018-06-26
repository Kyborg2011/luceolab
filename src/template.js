export default ({ body, helmet }) => {
    return `
        <!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
            <head>
                ${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Open+Sans+Condensed:300,300i" rel="stylesheet">
                <link href="/css/main.css" rel="stylesheet">
            </head>
            <body ${helmet.bodyAttributes.toString()}>
                <div id="root"><div>${body}</div></div>
                <script src="/js/main.bundle.js"></script>
            </body>
        </html>
    `;
};
