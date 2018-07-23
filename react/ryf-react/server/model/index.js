const Sequelize = require('sequelize');
// 数据库语言是sql
// koa 数据json obj
const sequelize = new Sequelize('antd', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    }
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connenction has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connent to the database:', err);
    })

module.exports = sequelize