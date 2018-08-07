const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {
    // res.send(`hello express ${req.params.name}`);
    // render后面为模板引擎需要的数据
    // 'users' 去views目录下找到users.ejs文件然后渲染
    res.render('users', {
        name: req.params.name,
        supplies: ['a', 'b', 'c']
    });
});

module.exports = router;
