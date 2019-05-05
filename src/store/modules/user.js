import types from './store/types'

const state = {
  count: 5
}
const getters = {
  count (state) {
    return state.count
  }
}
const actions = {
  increment ({commit, state}) {
    commit(types.DECREMENT)
  },
  decrement ({commit, state}) {
    if (state.count > 10) {
      // 此处提交的事件与下方 mutations 中的 types.DECREMENT 对应
      commit(types.DECREMENT)
    }
  }
}
const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.INCREMENT)
  [types.INCREMENT] (state) {
    state.count++
  },
  // 此处的事件为上方 actions 中的 commit(types.DECREMENT)
  [types.DECREMENT] (state) {
    state.count--
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
