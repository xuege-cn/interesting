require('babel-polyfill')
const Koa = require('koa')
const koaStatic = require('koa-static')
const Router = require('koa-router')
// import Home from '../src/home'
import render from '../utils'

const app = new Koa()
const router = new Router()

// router.get('/', async(ctx, next) => {
//     console.log(ctx.path);
//     const content = ReactServerDom.renderToString(
//         <StaticRouter location={ctx.path}>
//             <Routes />
//         </StaticRouter>
//     );

//     ctx.body = `
//         <html>
//             <head>
//                 <title>哈哈哈</title>
//             </head>
//             <body>
//                 <div id="root">${content}</div>
//             </body>
//             <script src='/index.js'></script>
//         </html>
//     `
//     await next()
// })

// app.use(router.routes())

app.use(async(ctx, next) => {
    render(ctx)
    await next()
})

app.use(
    koaStatic('static')
)

app.listen(3000)