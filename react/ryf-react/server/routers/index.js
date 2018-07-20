const router = require('koa-router')();
const User = require('../model/user');
// .get() 通过url方式访问
router.get('/', async (ctx) => {
    ctx.body = '首页';
});
router.get('/users', async (ctx) => {
    const user = {
        name: 'zk',
        age: 18
    }
    ctx.body = user;
});
module.exports = router;