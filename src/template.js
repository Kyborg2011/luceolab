export default ({ body, helmet }) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                ${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}
                <!-- Global site tag (gtag.js) - Google Analytics -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-36412889-2"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'UA-36412889-2');
                </script>
            </head>
            <body>
                <div id="root"><div>${body}</div></div>
                <script>
                  WebFontConfig = {
                      google: { families: [ 'Open+Sans+Condensed:300,600', 'Open+Sans:300,400,600', 'Josefin+Sans:300,600' ] }
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
                <script src="/js/main.bundle.js"></script>
            </body>
        </html>
    `;
};
