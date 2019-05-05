/* eslint-disable eqeqeq */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义属性（数据）
var state = {
  count: 6
}
// 定义 getters
var getters = {
  count (state) {
    return state.count
  },
  EvenOrOdd (state) {
    return state.count % 2 == 0 ? '偶数' : '奇数'
  }
}
const mutations = {
  // 与上方 commit 中的 ‘increment’ 相对应
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}
const actions = {
  increment ({commit, state}) {
    commit('increment')
  },
  decrement ({ commit, state }) {
    // **通过动作改变的数据，在此处来做判断是否提交**
    if (state.count > 5) {
      commit('decrement')
    }
  },
  incrementAsync ({ commit, state }) {
    var a = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
    a.then(() => {
      commit('increment')
    }).catch(() => {
      console.log('异步操作失败')
    })
  }
}
// 创建 store 对象
const store = new Vuex.Store({
  state,
  getters,
  // eslint-disable-next-line no-undef
  actions,
  // eslint-disable-next-line no-undef
  mutations
})

// 导出 store 对象
export default store
