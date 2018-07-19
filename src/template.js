export default ({ body, helmet }) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                ${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}
            </head>
            <body>
                <div id="root"><div>${body}</div></div>
                <script src="/js/main.bundle.js"></script>
            </body>
        </html>
    `;
};
