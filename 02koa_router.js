const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

//配置路由
router.get('/',async (ctx)=>{
    ctx.body = '首页';
})

//启动路由
app.use(router.routes());

app.listen(3000);