// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import vuex from 'vuex'
// import store from './assets/store'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(vuex)

// // eslint-disable-next-line no-redeclare
// const store = new vuex.Store({
//   state: {
//     products: [
//       {name: '鼠标', price: 20},
//       {name: '键盘', price: 40},
//       {name: '耳机', price: 60},
//       {name: '显示屏', price: 80}
//     ]
//   },
//   getters: {
//     saleProducts: (state) => {
//       let saleProducts = state.products.map(productes => {
//         return {
//           name: productes.name,
//           price: productes.price / 2
//         }
//       })
//       return saleProducts
//     }
//   },
//   mutations: {
//     minusPrice (state, payload) {
//       // eslint-disable-next-line no-unused-vars
//       let newprice = state.products.forEach(productes => {
//         productes.price -= payload
//       })
//     }
//   },
//   actions: {
//     minusPriceAsync (context, payload) {
//       setTimeout(() => {
//         context.commit('minusPrice', payload)
//       }, 2000)
//     },
//     increment ({commit, state}) {
//       commit('increment')
//     },
//     decrement ({commit, state}) {
//       if (state.count > 5) {
//         commit('decrement')
//       }
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
