import React from 'react';
import ReactServerDom from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';

export default ctx => {
    const content = ReactServerDom.renderToString(
        <StaticRouter location={ctx.path}>
            <Routes />
        </StaticRouter>
    );

    ctx.body = `
        <html>
            <head>
                <title>哈哈哈</title>
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src='/index.js'></script>
        </html>
    `
}