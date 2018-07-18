import Loki from 'lokijs';

// db 配置，初始化，连接及数据查询
// db 句柄 代表数据库 数据库名(一个项目一个库)->collections(table的别称)->row(数据记录)->columns(列名)
// sql查询，典型的异步操作， 用promise来封装吧，连接数据库要时间，查询要时间，返回结果要路上的时间
export const db = new Loki('notes', {
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    autosaveInterval: 3000,
    persistenceMethod: 'localStorage'
})
function databaseInitialize () {
    const notes = db.getCollection('notes');
    if (notes === null) {
        db.addCollection('notes')
    }
}

// 所有数据库操作都是异步操作
export function loadCollection(collection) {
    return new Promise(resolve => {
        db.loadDatabase({}, () => {
            const _collection = db.getCollection(collection) || db.addCollection(collection);
            resolve(_collection);
        })
    }) 
}