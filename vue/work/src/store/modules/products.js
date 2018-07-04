import shop from '@/api/shop'


// Store 里的一间库房 modules
// 搬运 actions 动作          请求数据
// 要搬的东西 state 状态数据
// getters  获取状态的get方法  加工state里面数据
// mutations 改变 会计  记账   改变数据

const state = {
    all: []
}
const getters = {}
const actions = {
    getAllProducts ({ commit }) {
        console.log('火车发动了')
        shop.getProducts(products => {
            console.log('火车带着货回来了')
            // vuex提供的api 
            commit('setProducts', products)
        })
    }
}
const mutations = {
    setProducts (state, products) {
        console.log('入库成功，卸货')
        state.all = products
    },
    decrementProductInventory (state, {id}) {
        const product = state.all.find(product => product.id === id);
        product.inventory--
    }  
}

export default {
    state,
    getters,
    actions,
    mutations
}