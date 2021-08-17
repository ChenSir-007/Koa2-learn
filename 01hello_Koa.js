const koa = require('koa');

const app = new koa();

app.use( async (ctx)=>{
    ctx.body = '你好 koa2'
})
app.listen(3000);
