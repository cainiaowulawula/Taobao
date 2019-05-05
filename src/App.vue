<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <img src="./assets/logo.png">-->
    <!-- <router-view/>  -->
    <!-- <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="incrementAsync">异步增加</button>
    <h1>{{count}}</h1>
    <h1>{{EvenOrOdd}}</h1> -->
=======
    <img src="./assets/logo.png">
		<router-view/>
>>>>>>> 2c93fa1c4c6207b3acc7cd5f18bbfbfa463c42bf
  </div>
</template>

<script>
// import ProductListOne from './components/ProductListOne.vue'
// import ProductListTwo from './components/ProductListTwo.vue'
// import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'App',
  // components:{
  //   // 'product-list-one':ProductListOne,
  //   // 'product-list-two':ProductListTwo
  // },
  // computed:mapGetters([
  //   'count',
  //   'EvenOrOdd'
  // ]),
  // methods:mapActions([
  //   //该 increment 来自 store.js 中导出的 actions 和 mutations 中的 increment 
  //   'increment',
  //   'decrement',
  //   'incrementAsync'
  // ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
<<<<<<< HEAD
  margin-top: 25px;
}
*{
  margin: 0px;
  padding: 0px;
  overflow: hidden;
=======
  margin-top: 60px;
	
}
p{
	margin-right: -25%;
	margin-top:-15px;
}
p a{
	color: darkgrey;
}
html,body{
	background: linear-gradient(to bottom right,#a04fff,#6a37fd);
	
	overflow: hidden;
	height: 100%;
>>>>>>> 2c93fa1c4c6207b3acc7cd5f18bbfbfa463c42bf
}
</style>
