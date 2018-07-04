<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <!-- <product-list :products="products"/> -->
    <product-list/>
    <hr>
    <shopping-cart/>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart'
// import response from '@/api/shop.js'
export default {
  data () {
    return {
      // products: []
    }
  },
  components: {
    ProductList,
    ShoppingCart
  },
  // created () {
  //   response.getProducts((res) => {
  //     console.log(res)
  //     this.products = res
  //     console.log(this.products)
  //   })
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
