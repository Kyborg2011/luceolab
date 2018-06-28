export default ({ body, helmet }) => {
    return `
        <!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
            <head>
                ${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}
                <link href="/css/main.css" rel="stylesheet">
            </head>
            <body ${helmet.bodyAttributes.toString()}>
                <div id="root"><div>${body}</div></div>
                <script src="/js/main.bundle.js"></script>
                <script type="text/javascript">
                  WebFontConfig = {
                      google: { families: [ 'Open+Sans:300,400,600', 'Open+Sans+Condensed:300,300italic' ] }
                  };
                  (function() {
                    var wf = document.createElement('script');
                    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                      '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
                    wf.type = 'text/javascript';
                    wf.async = 'true';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(wf, s);
                  })();
                </script>
            </body>
        </html>
    `;
};
